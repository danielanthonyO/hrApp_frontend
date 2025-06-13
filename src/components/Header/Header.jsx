// src/components/Header.jsx
import React from 'react';
import styles from "./Header.module.css";
import { Link } from 'react-router-dom';
import useTheme from '../../hooks/useTheme'; // (We'll create this next)
import { useState } from 'react';


const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        <h1>Employee Dashboard</h1>
      </Link>

      <button className={styles.menuToggle} onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? '✕' : '☰'}
      </button>

      <nav className={`${styles.nav} ${menuOpen ? styles.open : ''}`}>
        <ul>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Employees</Link></li>
          <li><Link to="/add" onClick={() => setMenuOpen(false)}>Add Employee</Link></li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
          <li>
            <button onClick={toggleTheme} className={styles.themeToggle}>
              {theme === 'dark' ? '🌞' : '🌙'}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
