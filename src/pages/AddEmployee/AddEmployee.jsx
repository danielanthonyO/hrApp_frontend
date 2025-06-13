import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiUser, FiBriefcase, FiDollarSign, FiPhone, FiMail, FiHeart, FiCalendar, FiMapPin, FiLayers, FiPlus, FiCode } from 'react-icons/fi';
import "./AddEmployee.css";

const AddEmployee = ({ onAddEmployee }) => {
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    salary: '',
    phone: '',
    email: '',
    favouriteAnimal: '',
    startDate: '',
    location: '',
    department: '',
    skills: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEmployee = {
      ...formData,
      salary: Number(formData.salary),
      skills: formData.skills.split(',').map(s => s.trim()).filter(Boolean),
    };

    onAddEmployee(newEmployee);
    navigate('/');
  };

  const inputFields = [
    { name: 'name', label: 'Employee Name', icon: <FiUser /> },
    { name: 'title', label: 'Job Title', icon: <FiBriefcase /> },
    { name: 'salary', label: 'Salary', type: 'number', icon: <FiDollarSign /> },
    { name: 'phone', label: 'Phone', icon: <FiPhone /> },
    { name: 'email', label: 'Email', type: 'email', icon: <FiMail /> },
    { name: 'favouriteAnimal', label: 'Favourite Animal', icon: <FiHeart /> },
    { name: 'startDate', label: 'Start Date', type: 'date', icon: <FiCalendar /> },
    { name: 'location', label: 'Location', icon: <FiMapPin /> },
    { name: 'department', label: 'Department', icon: <FiLayers /> },
    { name: 'skills', label: 'Skills (comma-separated)', icon: <FiCode /> },
  ];

  return (
    <motion.section 
      className="add-employee-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="add-employee-container">
        <motion.div
          className="add-employee-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="add-employee-title">Add New Employee</h2>
          <p className="add-employee-subtitle">Fill in the details below to add a new team member</p>
        </motion.div>

        <motion.form 
          onSubmit={handleSubmit} 
          className="add-employee-form"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="form-grid">
            {inputFields.map(({ name, label, type = 'text', icon }) => (
              <div key={name} className="form-group">
                <label htmlFor={name} className="form-label">
                  <span className="input-icon">{icon}</span>
                  {label}
                </label>
                <input
                  type={type}
                  id={name}
                  name={name}
                  value={formData[name]}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder={`Enter ${label}`}
                />
              </div>
            ))}
          </div>

          <button type="submit" className="submit-button">
            <FiPlus /> Add Employee
          </button>
        </motion.form>
      </div>
    </motion.section>
  );
};

export default AddEmployee;