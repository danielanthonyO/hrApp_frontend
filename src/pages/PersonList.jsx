// src/components/PersonList.jsx
import React from 'react';
import PersonCard from '../components/Person/PersonCard';
import './PersonList.css';


const PersonList = ({ employees, onUpdateEmployee }) => {
  return (
    <div className="person-list">
      {employees.map(emp => (
        <PersonCard 
          key={emp.id} 
          {...emp} 
          onUpdateEmployee={onUpdateEmployee} 
        />
      ))}
    </div>
  );
};

export default PersonList;

