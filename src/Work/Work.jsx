import React from "react";
import styles from "./Work.module.css";
import { useSelector, useDispatch } from "react-redux";
import { selectDarkMode, toggleDarkMode } from "../Features/ToggleModeSlice";

const workData = [
  {
    role: "Web Development Intern",
    company: "Catnyx India Pvt Ltd",
    duration: "03/2024 - 05/2024",
    responsibilities: [
      "Completed an internship at Catnyx India Pvt Ltd where I developed, tested, and maintained client websites.",
      "Demonstrated exceptional skills in HTML, CSS, JavaScript, and other relevant technologies.",
      "Contributed to various projects and displayed great proficiency in web development.",
    ],
  },
];

const WorkExperience = () => {
  const darkMode = useSelector(selectDarkMode);
  return (
    <div
      className={`${styles.container} ${darkMode ? styles.dark : styles.light}`}
      id="work"
    >
      <h2 className={styles.title}>Work Experience</h2>
      {workData.map((work, index) => (
        <div key={index} className={styles.workItem}>
          <h3 className={styles.role}>{work.role}</h3>
          <p className={styles.company}>{work.company}</p>
          <p className={styles.duration}>{work.duration}</p>
          <ul className={styles.responsibilities}>
            {work.responsibilities.map((responsibility, i) => (
              <li key={i} className={styles.responsibility}>
                {responsibility}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default WorkExperience;
