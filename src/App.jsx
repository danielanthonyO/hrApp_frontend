// src/App.jsx
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import PersonList from "./pages/AddEmployee/PersonList";
import About from "./pages/About/About";
import AddEmployee from "./pages/AddEmployee/AddEmployee";

import useAxios from "./hooks/useAxios";

function App() {
  const [employees, setEmployees] = useState([]);
  const { get, post } = useAxios();

  useEffect(() => {
    get("http://localhost:3001/employees")
      .then((res) => setEmployees(res.data))
      .catch((err) => console.error("Error fetching employees:", err));
  }, [get]);

  const handleAddEmployee = (newEmployee) => {
    post("http://localhost:3001/employees", newEmployee)
      .then((res) => setEmployees((prev) => [...prev, res.data]))
      .catch((err) => console.error("Error adding employee:", err));
  };

  const handleUpdateEmployee = (updatedEmployee) => {
    setEmployees((prev) =>
      prev.map((emp) => (emp.id === updatedEmployee.id ? updatedEmployee : emp))
    );
  };

  return (
    <Router>
      <div className="app-container" style={{ width: '100%', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Header />
        <main style={{ flex: 1, width: '100%' }}>
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
            <Route
              path="/add"
              element={<AddEmployee onAddEmployee={handleAddEmployee} />}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

