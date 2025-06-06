// src/components/Person.jsx
import React from 'react';
import './Person.css';

const Person = ({ name, title, salary, phone, email, animal }) => (
  <div className="person-card">
    <h2>{name}</h2>
    <p><strong>Title:</strong> {title}</p>
    <p><strong>Salary:</strong> €{salary}</p>
    <p><strong>Phone:</strong> {phone}</p>
    <p><strong>Email:</strong> {email}</p>
    <p><strong>Animal:</strong> {animal}</p>
  </div>
);

export default Person;
