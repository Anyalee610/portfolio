import React from 'react';
import './App.module.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Experience from './components/Experience/Experience';
import Navbar from './components/Narbar/Navbar';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
