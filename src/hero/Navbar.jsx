import React, { useState } from "react";
import Styles from "./Navbar.module.css";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(null);

  const handleClick = (index) => {
    setActiveLink(index);
  };

  const links = ["Work", "About", "Blog", "Contact"];

  return (
    <div className={Styles.container}>
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
    </div>
  );
};

export default Navbar;

