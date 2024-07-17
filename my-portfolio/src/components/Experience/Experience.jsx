import React, { useEffect, useState } from 'react';
import experienceData from '../../data/experience.json';
import styles from './Experience.module.css';

const Experience = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    // Fetching the data from the JSON file (can also be used for remote fetching)
    setExperiences(experienceData);
  }, []);

  return (
    <section id="experience">
      <h2>Work Experience</h2>
      <div className={styles.experienceContainer}>
        {experiences.map((experience, index) => (
          <div className={styles.experienceItem} key={index}>
            <div className={styles.experienceSummary}>
              <h3>{experience.company}</h3>
              <p>{experience.title} | {experience.date}</p>
            </div>
            <div className={styles.experienceDetails}>
              <ul>
                {experience.responsibilities.map((responsibility, idx) => (
                  <li key={idx}>{responsibility}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
