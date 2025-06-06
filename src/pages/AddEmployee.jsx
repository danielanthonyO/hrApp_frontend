import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddEmployee = ({ onAddEmployee }) => {
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    salary: '',
    phone: '',
    email: '',
    animal: '',
    startDate: '',
    location: '',
    department: '',
    skills: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEmployee = {
      ...formData,
      salary: Number(formData.salary),
      skills: formData.skills.split(',').map(s => s.trim()).filter(Boolean),
      // no id here — json-server generates it
    };

    onAddEmployee(newEmployee);
    navigate('/');
  };

  return (
    <section style={{ padding: '2rem' }}>
      <h2>Add New Employee</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: '500px' }}>
        {Object.entries(formData).map(([key, value]) => (
          <div key={key} style={{ marginBottom: '1rem' }}>
            <label htmlFor={key} style={{ display: 'block', marginBottom: '0.3rem' }}>
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </label>
            <input
              type={key === 'salary' ? 'number' : key === 'startDate' ? 'date' : 'text'}
              id={key}
              name={key}
              value={value}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '0.5rem' }}
            />
          </div>
        ))}
        <button type="submit">Add Employee</button>
      </form>
    </section>
  );
};

export default AddEmployee;

