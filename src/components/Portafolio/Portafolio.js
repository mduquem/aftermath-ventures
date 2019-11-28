import React from "react";
import classes from "./Portafolio.module.css";
import Project from "./Project/Project";

const Portafolio = () => {
  return (
    <div className={classes.Portafolio}>
      <h1>Portafolio</h1>
      <ul>
        <li>
          <Project />
        </li>
        <li>
          <Project />
        </li>
        <li>
          <Project />
        </li>
      </ul>
    </div>
  );
};

export default Portafolio;
