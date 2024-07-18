import React from 'react';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Experience from './components/Experience/Experience';
import Navbar from './components/Narbar/Navbar';
import Projects from './components/Projects/Projects';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <About className={styles.section} />
      <Experience className={styles.section} />
      <Projects className={styles.section} />
      <Contact className={styles.section} />
    </div>
  );
}

export default App;
