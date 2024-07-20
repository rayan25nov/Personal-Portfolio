import React from "react";
import styles from "./Skills.module.css";
import { useSelector } from "react-redux";
import { selectDarkMode } from "../Features/ToggleModeSlice";

const Skills = () => {
  const darkMode = useSelector(selectDarkMode);
  return (
    <div
      className={`${styles.container} ${darkMode ? styles.dark : styles.light}`}
      id="skills"
    >
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.skillsContainer}>
        <div className={styles.skillsRow}>
          <img
            src="./assets/html.png"
            alt="HTML"
            className={styles.skillIcon}
          />
          <img src="./assets/css.png" alt="CSS" className={styles.skillIcon} />
          <img
            src="./assets/javascript.png"
            alt="Javascript"
            className={styles.skillIcon}
          />
          <img
            src="./assets/react.png"
            alt="React"
            className={styles.skillIcon}
          />
          <img
            src="./assets/node.png"
            alt="Node"
            className={styles.skillIcon}
          />
          <img
            src="./assets/mongodb.png"
            alt="MongoDB"
            className={styles.skillIcon}
          />
          <img
            src="./assets/express.png"
            alt="Express"
            className={styles.skillIcon}
          />
        </div>
        <div className={styles.skillsRow}>
          <img
            src="./assets/mysql.png"
            alt="MySQL"
            className={styles.skillIcon}
          />
          <img src="./assets/git.png" alt="Git" className={styles.skillIcon} />
          <img
            src="./assets/github.png"
            alt="GitHub"
            className={styles.skillIcon}
          />
          <img src="./assets/c++.png" alt="C++" className={styles.skillIcon} />
          <img
            src="./assets/java.png"
            alt="Java"
            className={styles.skillIcon}
          />
          <img
            src="./assets/redux.png"
            alt="Redux"
            className={styles.skillIcon}
          />
          <img
            src="./assets/postman.png"
            alt="Postman"
            className={styles.skillIcon}
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
