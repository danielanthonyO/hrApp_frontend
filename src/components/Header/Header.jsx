// src/components/Header.jsx
import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">Employees</Link> |{' '}
        <Link to="/add">Add Employee</Link> |{' '}
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
};

export default Header;
