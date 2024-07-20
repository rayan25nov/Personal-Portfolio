import React, { useState } from "react";
import Navbar from "./Navbar/Navbar";
import { useSelector } from "react-redux";
import { selectDarkMode } from "./Features/ToggleModeSlice";
import Styles from "./App.module.css";
import Home from "./Home/Home";
import About from "./About/About";
import Education from "./Education/Education";
import WorkExperience from "./Work/Work";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";

const App = () => {
  const darkMode = useSelector(selectDarkMode);
  return (
    <div
      className={`${Styles.container} ${darkMode ? Styles.dark : Styles.light}`}
    >
      <Navbar />
      <Home />
      <About />
      <Education />
      <WorkExperience />
      <Skills />
      <Projects />
    </div>
  );
};

export default App;
