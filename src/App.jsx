
import React, { useState } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import PersonList from './components/Person/PersonList';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import AddEmployee from './pages/AddEmployee';

import initialEmployees from './data/employees';

function App() {
  const [employees, setEmployees] = useState(initialEmployees);

  const handleAddEmployee = (newEmployee) => {
    setEmployees(prev => [...prev, newEmployee]);
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

