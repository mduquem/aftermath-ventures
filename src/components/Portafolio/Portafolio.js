import React from "react";
import { Reveal } from "react-genie";

import classes from "./Portafolio.module.css";
import Project from "./Project/Project";

import domicilios from "../../assets/img/domicilios.png";
import aftermath from "../../assets/img/aftermath.png";
import migrato from "../../assets/img/migrato.png";

const Portafolio = () => {
  return (
    <div className={classes.Portafolio}>
      <h1>Portafolio</h1>
      <ul className={classes.List}>
        <li>
          <Reveal>
            <Project
              img={domicilios}
              link="https://domiciliosaudiovisuales.com"
            />
          </Reveal>
        </li>
        <li>
          <Reveal>
            <Project img={aftermath} link="https://aftermathschool.co" />
          </Reveal>
        </li>
        <li>
          <Reveal>
            <Project img={migrato} link="https://migrato.co" />
          </Reveal>
        </li>
      </ul>
    </div>
  );
};

export default Portafolio;
