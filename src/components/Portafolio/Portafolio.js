import React from "react";
import classes from "./Portafolio.module.css";
import Project from "./Project/Project";

import domicilios from "../../assets/img/domicilios.png";
import aftermath from "../../assets/img/aftermath.png";
import migrato from "../../assets/img/migrato.png";



const Portafolio = () => {
  return (
    <div className={classes.Portafolio}>
      <h1>Portafolio</h1>
      <ul>
        <li>
          <Project img={domicilios} />
        </li>
        <li>
          <Project img={aftermath} />
        </li>
        <li>
          <Project img={migrato} />
        </li>
      </ul>
    </div>
  );
};

export default Portafolio;
