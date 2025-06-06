import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// src/App.jsx
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import PersonList from './pages/PersonList';
import About from './pages/About';
import AddEmployee from './pages/AddEmployee';

function App() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/employees')
      .then(res => setEmployees(res.data))
      .catch(err => console.error("Error fetching employees:", err));
  }, []);

  const handleAddEmployee = (newEmployee) => {
    axios.post('http://localhost:3001/employees', newEmployee)
      .then(res => setEmployees(prev => [...prev, res.data]))
      .catch(err => console.error("Error adding employee:", err));
  };

  const handleUpdateEmployee = (updatedEmployee) => {
    setEmployees((prev) =>
      prev.map(emp => (emp.id === updatedEmployee.id ? updatedEmployee : emp))
    );
  };

  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route 
            path="/" 
            element={
              <PersonList 
                employees={employees} 
                onUpdateEmployee={handleUpdateEmployee} 
              />
            } 
          />
          <Route path="/about" element={<About />} />
          <Route path="/add" element={<AddEmployee onAddEmployee={handleAddEmployee} />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
