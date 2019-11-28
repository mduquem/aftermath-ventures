import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";

import classes from "./NavigationItems.module.css";

const NavigationItems = props => {
  return (
    <div className={classes.NavigationItems}>
      <ul>
        <NavigationItem clicked={props.clicked} link="#Portafolio">
          Portafolio
        </NavigationItem>
        <NavigationItem clicked={props.clicked} link="#Servicios">
          Servicios
        </NavigationItem>
        <NavigationItem clicked={props.clicked} link="#Contacto">
          Contacto
        </NavigationItem>
      </ul>
    </div>
  );
};

export default NavigationItems;
