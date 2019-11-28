import React from "react";

import NavigationItems from "../NavigationItems/NavigationItems";
import Logo from "../Toolbar/Logo/Logo";

import classes from "./SideDrawer.module.css";

const SideDrawer = props => {
  return (
    <div className={classes.SideDrawer}>
      <div className={classes.Logo}>
        <Logo />
      </div>

      <nav className={classes.NavItems}>
        <NavigationItems clicked={props.clicked} active={props.active} />
      </nav>
    </div>
  );
};

export default SideDrawer;
