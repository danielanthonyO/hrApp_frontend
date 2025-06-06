// src/components/PersonList.jsx
import React from 'react';
import PersonCard from './PersonCard';
import './PersonList.css';

const PersonList = ({ employees }) => {
  return (
    <div>
      {employees.map(person => (
        <PersonCard key={person.id} {...person} />
      ))}
    </div>
  );
};

export default PersonList;
