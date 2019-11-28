import React from "react";
import iphone from "../../../assets/img/iphone.png";
import mac from "../../../assets/img/mac.png";

import classes from "./Project.module.css";

const Project = () => {
  return (
    <div className={classes.Project}>
      <div className={classes.Mac}>
        <img
          src={mac}
          alt="Projecto de Domicilios Audiovisuales Desktop Version"
        />
      </div>
      <div className={classes.Iphone}>
        <img
          src={iphone}
          alt="Projecto de Domicilios Audivisuales Mobile Version"
        />
      </div>
      <div className={classes.Logo}>Logo</div>
    </div>
  );
};

export default Project;
