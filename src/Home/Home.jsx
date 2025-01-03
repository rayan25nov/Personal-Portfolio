import React from "react";
import { useSelector } from "react-redux";
import { selectDarkMode } from "../Features/ToggleModeSlice";
import Styles from "./Home.module.css";

const Home = () => {
  const darkMode = useSelector(selectDarkMode);
  return (
    <div
      className={`${Styles.container} ${darkMode ? Styles.dark : Styles.light}`}
    >
      <div className={Styles.right}>
        <div className={Styles.profile}>
          <img src="./assets/profile.png" alt="Profile" />
        </div>
      </div>
      <div className={Styles.left}>
        <h1 className={Styles.heading}>Hi, I am Rayan 👋</h1>
        <div className={Styles.description}>
          <h3>
            As a full stack developer specializing in the MERN Stack, I am
            dedicated to crafting and occasionally designing exceptional digital
            experiences that are fast, accessible, visually appealing, and
            responsive. Despite having over 3 years of experience in developing
            web applications, my passion for it remains as strong as ever.
          </h3>
        </div>
        <div className={Styles.location}>
          <img src="./assets/location.png" alt="location" />
          <p>Kolkata, West Bengal, India</p>
        </div>
        <div className={Styles.social}>
          <a href="https://github.com/rayan25nov" target="_blank">
            <img src="./assets/github2.png" alt="github" />
          </a>
          <a
            href="https://www.linkedin.com/in/rayan-ahmad-25nov/"
            target="_blank"
          >
            <img src="./assets/linkedin.png" alt="linkedin" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
