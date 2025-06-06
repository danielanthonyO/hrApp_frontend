
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import PersonList from './components/Person/PersonList';
import axios from 'axios';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import AddEmployee from './pages/AddEmployee';

// import initialEmployees from './data/employees';

import React, { useState, useEffect } from 'react';




function App() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/employees')
      .then(res => setEmployees(res.data))
      .catch(err => console.error("Error fetching employees:", err));
  }, []);

  const handleAddEmployee = (newEmployee) => {
    axios.post('http://localhost:3001/employees', newEmployee)
      .then(res => {
        // Add the new employee to local state
        setEmployees(prev => [...prev, res.data]);
      })
      .catch(err => console.error("Error adding employee:", err));
  };

  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<PersonList employees={employees} />} />
          <Route path="/about" element={<About />} />
          <Route path="/add" element={<AddEmployee onAddEmployee={handleAddEmployee} />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
