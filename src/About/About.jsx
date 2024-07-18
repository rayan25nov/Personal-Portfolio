import React from "react";
import Styles from "./About.module.css";

const About = () => {
  return (
    <div className={Styles.container}>
      <button>About me</button>
      <div className={Styles.left}>
        <div className={Styles.profile}>
          <img src="./assets/profile4.jpg" alt="Profile Image" />
        </div>
      </div>
      <div className={Styles.right}>
        <h2>Interested in who I am? Here's a glimpse:</h2>
        <p>
          I'm a passionate, self-taught designer specializing in full stack
          development with React.js and Node.js. I am highly enthusiastic about
          bringing both the technical and visual aspects of digital products to
          life. User experience, pixel-perfect design, and writing clear,
          readable, high-performance code are my priorities. I began my web
          development journey in 2021, and since then, I've continually grown
          and evolved as a developer, embracing new challenges and learning the
          latest technologies along the way. Now, I'm building cutting-edge web
          applications using modern technologies such as React.js, Javascript,
          Node.js, CSS, and much more. I am very much a forward thinker and
          enjoy working on projects end-to-end, from ideation all the way to
          development.
        </p>
      </div>
    </div>
  );
};

export default About;
