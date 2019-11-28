import React from "react";

import classes from "./Logo.module.css";
import logo from "../../../../assets/svg/logo.svg";

const Logo = props => {
  return (
    <div className={classes.Logo}>
      <a href="/">
        <img
          src={logo}
          alt="Aftermath Ventures - Desarrollamos tu emprendimiento"
        />
      </a>
    </div>
  );
};

export default Logo;
