import React from "react";
import Navbar from "./hero/Navbar";
import Styles from "./App.module.css";

const App = () => {
  return (
    <div className={Styles.wrapper}>
      <Navbar />
    </div>
  );
};

export default App;
