// src/App.jsx
import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Person from './components/Person/Person';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Person
          name="Aino Virtanen"
          title="HR Manager"
          salary={4200}
          phone="040-1234567"
          email="aino.virtanen@example.com"
          animal="🦉 Owl"
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;

