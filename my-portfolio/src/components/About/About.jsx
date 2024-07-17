import React from 'react';
import styles from "./About.module.css";
import profilePic from '../../../assets/image.jpg'; // Replace with your actual profile picture path
import flowerImg from '../../../assets/flower.png'; // Replace with your actual flower image path

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <img src={flowerImg} alt="Flower" className={styles.flower} />
      <div className={styles.container}>
        <img src={profilePic} alt="Profile" className={styles.profilePic} />
        <div className={styles.content}>
          <h1>Hello, I'm Anaya Lambright</h1>
          <p>
            My tech journey began at the Brooklyn Steam Center, where I earned a Python certification. 
            I graduated from Marcy Lab School in March 2023, mastering JavaScript, React, and Node.js. 
            I further enhanced my skills through the Google IT Automation with Python program and the Google G-SWEP program.
          </p>
          <p>
            Currently, I'm a Product Support Specialist intern at Class Link. 
            I love problem-solving, learning new things, and developing real-world applications. 
            I’m now seeking my next software engineering role and exploring AI to create my own personal assistant.
          </p>
        </div>
      </div>

    </section>
  );
};

export default About;
