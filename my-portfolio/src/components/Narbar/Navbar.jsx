import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <a href="#skills" className={styles.navLink}>Skills</a>
      <a href="#experience" className={styles.navLink}>Experience</a>
      <a href="#projects" className={styles.navLink}>Projects</a>
      <a href="#contact" className={styles.navLink}>Contact Me</a>
    </nav>
  );
};

export default Navbar;
