import React from "react";

import classes from "./NavigationItem.module.css";

const NavigationItem = props => {
  return (
    <li className={classes.NavigationItem}>
      <a
        onClick={props.clicked}
        className={props.active ? "active" : null}
        href={props.link}
      >
        {" "}
        <strong>
          <h3>{props.children}</h3>
        </strong>
      </a>
    </li>
  );
};

export default NavigationItem;
