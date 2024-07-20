import React from "react";
import Styles from "./Education.module.css";
import { useSelector } from "react-redux";
import { selectDarkMode } from "../Features/ToggleModeSlice";

const educationData = [
  {
    institution: "University of Kalyani",
    degree: "Bachelor of Technology in Information Technology",
    duration: "2020 - 2024",
    description:
      "Graduated with honors, focusing on full stack development and software engineering principles.",
  },
  {
    institution: "K.N Memorial School",
    degree: "High School",
    duration: "2018 - 2020",
    description:
      "Excelled in science and mathematics, with a keen interest in computer science.",
  },
];

const EducationDetails = () => {
  const darkMode = useSelector(selectDarkMode);
  return (
    <div
      className={`${Styles.container} ${darkMode ? Styles.dark : Styles.light}`}
      id="education"
    >
      <h2 className={Styles.title}>Education</h2>
      {educationData.map((education, index) => (
        <div key={index} className={Styles.educationItem}>
          <h3 className={Styles.institution}>{education.institution}</h3>
          <p className={Styles.degree}>{education.degree}</p>
          <p className={Styles.duration}>{education.duration}</p>
          <p className={Styles.description}>{education.description}</p>
        </div>
      ))}
    </div>
  );
};

export default EducationDetails;
