// src/components/Person/PersonCard.jsx
import React, { useState } from 'react';
import axios from 'axios';

const PersonCard = ({
  id,
  name,
  title,
  salary: initialSalary,
  phone,
  email,
  animal,
  startDate,
  location: initialLocation,
  department: initialDepartment,
  skills: initialSkills,
  onUpdateEmployee,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [salary, setSalary] = useState(initialSalary);
  const [location, setLocation] = useState(initialLocation);
  const [department, setDepartment] = useState(initialDepartment);
  const [skills, setSkills] = useState(initialSkills.join(', '));
  const [saving, setSaving] = useState(false);
  const [savedMessage, setSavedMessage] = useState('');

  const handleEditClick = () => {
    setIsEditing(true);
    setSavedMessage('');
  };

  const handleCancelClick = () => {
    setSalary(initialSalary);
    setLocation(initialLocation);
    setDepartment(initialDepartment);
    setSkills(initialSkills.join(', '));
    setIsEditing(false);
    setSavedMessage('');
  };

  const handleSaveClick = async () => {
    setSaving(true);
    const salaryNum = Number(salary);

    const updates = {};
    if (salaryNum !== initialSalary) updates.salary = salaryNum;
    if (location !== initialLocation) updates.location = location;
    if (department !== initialDepartment) updates.department = department;

    const skillsArray = skills.split(',').map(s => s.trim()).filter(Boolean);
    if (JSON.stringify(skillsArray) !== JSON.stringify(initialSkills)) {
      updates.skills = skillsArray;
    }

    if (Object.keys(updates).length === 0) {
      setIsEditing(false);
      setSaving(false);
      return;
    }

    try {
      const res = await axios.patch(`http://localhost:3001/employees/${id}`, updates);
      onUpdateEmployee(res.data);
      setIsEditing(false);
      setSavedMessage('Changes saved!');
      setTimeout(() => setSavedMessage(''), 3000);
    } catch (error) {
      console.error('Failed to save changes:', error);
      alert('Failed to save changes. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="person-card" style={{ position: 'relative' }}>
      <h3>
        {name} {animal}
      </h3>

      <p><strong>Title:</strong> {title}</p>

      {isEditing ? (
        <>
          <label>
            Salary:{' '}
            <input
              type="number"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
              disabled={saving}
            />
          </label>
          <br />
          <label>
            Location:{' '}
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              disabled={saving}
            />
          </label>
          <br />
          <label>
            Department:{' '}
            <input
              type="text"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              disabled={saving}
            />
          </label>
          <br />
          <label>
            Skills:{' '}
            <input
              type="text"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
              disabled={saving}
            />
            <small> (comma separated)</small>
          </label>
          <br />
          <button onClick={handleSaveClick} disabled={saving}>
            Save
          </button>{' '}
          <button onClick={handleCancelClick} disabled={saving}>
            Cancel
          </button>
        </>
      ) : (
        <>
          <p><strong>Salary:</strong> €{salary}</p>
          <p><strong>Location:</strong> {location}</p>
          <p><strong>Department:</strong> {department}</p>
          <p><strong>Skills:</strong> {initialSkills.join(', ')}</p>
          <button onClick={handleEditClick}>Edit</button>
          {savedMessage && (
            <div
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                padding: '0.5rem',
                backgroundColor: '#d4edda',
                color: '#155724',
                borderRadius: '4px',
                fontSize: '0.85rem',
              }}
            >
              {savedMessage}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default PersonCard;
