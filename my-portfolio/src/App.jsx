import React from 'react';
import './App.module.css';
import About from './components/About/About';
import Contact from './components/Contact';
import Experience from './components/Experience/Experience';
import Navbar from './components/Narbar/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
    </div>
  );
}

export default App;
