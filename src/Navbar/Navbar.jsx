import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectDarkMode, toggleDarkMode } from "../Features/ToggleModeSlice";
import Styles from "./Navbar.module.css";

const Navbar = () => {
  // Initialize activeLink to 0 so that "Home" is active by default
  const [activeLink, setActiveLink] = useState(0);

  const darkMode = useSelector(selectDarkMode);
  const dispatch = useDispatch();

  const toggleTheme = () => {
    dispatch(toggleDarkMode());
  };

  const handleClick = (index) => {
    setActiveLink(index);
  };

  const links = ["About", "Work", "Skills", "Projects"];

  return (
    <div
      className={`${Styles.container} ${darkMode ? Styles.dark : Styles.light}`}
    >
      <div className={Styles.logo}>
        <img src="./assets/logo.png" alt="My Logo" />
      </div>
      {/* Render links based on the links array */}
      <div className={Styles.link_container}>
        {links.map((link, index) => (
          <a
            key={index}
            href="#"
            className={index === activeLink ? Styles.activeLink : ""}
            onClick={() => handleClick(index)}
          >
            {link}
          </a>
        ))}
        <p className={Styles.divider}>|</p>
        <div className={Styles.mode} onClick={toggleTheme}>
          {darkMode ? (
            <img src="./assets/night-mode.png" alt="Dark mode" />
          ) : (
            <img src="./assets/brightness.png" alt="light mode" />
          )}
        </div>
        {/* Add a link for downloading CV */}
        <a
          href="https://drive.google.com/file/d/1ZSpmsl5n07LeBQMdRCak2ZDM72ZbamcE/view?usp=drive_link"
          target="_blank"
          rel="noreferrer"
        >
          Download CV
        </a>
      </div>
      {/* Render the hamburger menu icon */}
    </div>
  );
};

export default Navbar;
