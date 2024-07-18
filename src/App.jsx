import React, { useState } from "react";
import Navbar from "./Navbar/Navbar";
import { useSelector } from "react-redux";
import { selectDarkMode } from "./Features/ToggleModeSlice";
import Styles from "./App.module.css";
import Home from "./Home/Home";
import About from "./About/About";

const App = () => {
  const darkMode = useSelector(selectDarkMode);
  return (
    <div
      className={`${Styles.container} ${darkMode ? Styles.dark : Styles.light}`}
    >
      <Navbar />
      <Home />
      <About />
    </div>
  );
};

export default App;
