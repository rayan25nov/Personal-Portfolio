import React from "react";
import Styles from "./About.module.css";
import { useSelector } from "react-redux";
import { selectDarkMode } from "../Features/ToggleModeSlice";

const About = () => {
  const darkMode = useSelector(selectDarkMode);
  return (
    <div
      className={`${Styles.container} ${darkMode ? Styles.dark : Styles.light}`}
      id="about"
    >
      <div className={Styles.about}>
        <button>About me</button>
      </div>
      <div className={Styles.about_container}>
        <div className={Styles.left}>
          <div className={Styles.profile}>
            <img src="./assets/profile4.jpg" alt="Profile Image" />
          </div>
        </div>
        <div className={Styles.right}>
          <h2>Interested in who I am? Here's a glimpse:</h2>
          <p>
            I'm a passionate, self-taught designer specializing in full stack
            development with React.js and Node.js. I am highly enthusiastic
            about bringing both the technical and visual aspects of digital
            products to life. User experience, pixel-perfect design, and writing
            clear, readable, high-performance code are my priorities.
          </p>
          <br />
          <p>
            I began my web development journey in 2021, and since then, I've
            continually grown and evolved as a developer, embracing new
            challenges and learning the latest technologies along the way. Now,
            I'm building cutting-edge web applications using modern technologies
            such as React.js, Javascript, Node.js, CSS, and much more.
          </p>
          <br />
          <p>
            I am very much a forward thinker and enjoy working on projects
            end-to-end, from ideation all the way to development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
