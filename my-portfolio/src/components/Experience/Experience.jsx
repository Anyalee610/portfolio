import React, { useEffect, useState } from 'react';
import history from '../../data/history.json';
import styles from './Experience.module.css';
import skills from "../../data/skills.json"
import arrow from "../../../assets/arrow.png"; // Import the arrow image

import { getImageUrl } from "../../utils";

const Experience = () => {
  const [visibleItem, setVisibleItem] = useState(null);

  const toggleVisibility = (id) => {
    setVisibleItem(visibleItem === id ? null : id);
  };

  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <ul className={styles.history}>
          {history.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                <img
                  src={getImageUrl(historyItem.imageSrc)}
                  alt={`${historyItem.organization} Logo`}
                />
                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.role}, ${historyItem.organization}`}</h3>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                  <img
                    src={arrow}
                    alt="Toggle details"
                    className={styles.arrow}
                    onClick={() => toggleVisibility(id)}
                  />
                  {visibleItem === id && (
                    <ul>
                      {historyItem.experiences.map((experience, idx) => {
                        return <li key={idx}>{experience}</li>;
                      })}
                    </ul>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Experience;