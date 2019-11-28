import React from "react";

import classes from "./Toolbar.module.css";

import NavigationItems from "../NavigationItems/NavigationItems";
import Logo from "./Logo/Logo";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";
import Aftermath from "./Aftermath/Aftermath";

const Toolbar = props => {
  return (
    <header className={classes.Toolbar}>
      <Logo />

      <Aftermath />

      <DrawerToggle clicked={props.setShowDrawer} />

      <nav className={classes.DesktopOnly}>
        <NavigationItems clicked={props.clicked} active={props.active} />
      </nav>
    </header>
  );
};

export default Toolbar;
