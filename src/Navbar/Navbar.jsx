import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectDarkMode, toggleDarkMode } from "../Features/ToggleModeSlice";
import Styles from "./Navbar.module.css";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const darkMode = useSelector(selectDarkMode);
  const dispatch = useDispatch();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleTheme = () => {
    dispatch(toggleDarkMode());
  };

  const handleClick = (index, event) => {
    event.preventDefault();
    setActiveLink(index);
    const sectionId = links[index].toLowerCase();
    const section = document.getElementById(sectionId);
    const yOffset = -100;
    const yPosition =
      section.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: yPosition, behavior: "smooth" });
  };

  const links = ["About", "Education", "Work", "Skills", "Projects"];

  useEffect(() => {
    const handleScroll = () => {
      const sectionOffsets = links.map((link) => {
        const section = document.getElementById(link.toLowerCase());
        return section ? section.offsetTop : 0;
      });

      const scrollPosition = window.scrollY + window.innerHeight / 2;
      const activeIndex = sectionOffsets.findIndex(
        (offset, index) =>
          scrollPosition >= offset &&
          (index === links.length - 1 ||
            scrollPosition < sectionOffsets[index + 1])
      );

      setActiveLink(activeIndex);
    };

    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [links]);

  return (
    <nav
      className={`${Styles.container} ${darkMode ? Styles.dark : Styles.light}`}
    >
      <div className={Styles.logo}>
        <img src="./assets/logo.png" alt="My Logo" />
      </div>
      <div
        className={`${Styles.link_container} ${menuOpen ? Styles.open : ""}`}
      >
        {links.map((link, index) => (
          <a
            key={index}
            href="#"
            className={index === activeLink ? Styles.activeLink : ""}
            onClick={(event) => handleClick(index, event)}
          >
            {link}
          </a>
        ))}
        <p className={Styles.divider}>|</p>
        <div className={Styles.mode} onClick={toggleTheme}>
          {darkMode ? (
            <img src="./assets/night-mode.png" alt="Dark mode" />
          ) : (
            <img src="./assets/brightness.png" alt="Light mode" />
          )}
        </div>
        <a
          href="https://drive.google.com/file/d/1ZSpmsl5n07LeBQMdRCak2ZDM72ZbamcE/view?usp=drive_link"
          target="_blank"
          rel="noreferrer"
        >
          Download CV
        </a>
      </div>
      <div className={Styles.smallScreen}>
        <div className={Styles.mobileMode} onClick={toggleTheme}>
          {darkMode ? (
            <img src="./assets/night-mode.png" alt="Dark mode" />
          ) : (
            <img src="./assets/brightness.png" alt="Light mode" />
          )}
        </div>
        <div className={Styles.mobileView} onClick={toggleMenu}>
          {menuOpen ? (
            <img src="./assets/cross.png" alt="Cross" />
          ) : (
            <img src="./assets/hamburger.png" alt="Hamburger" />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
