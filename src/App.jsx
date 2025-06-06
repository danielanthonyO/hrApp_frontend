import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import PersonList from './components/Person/PersonList';
import employees from './data/employees';

function App() {
  return (
    <div>
      <Header />
      <main>
        <PersonList employees={employees} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
