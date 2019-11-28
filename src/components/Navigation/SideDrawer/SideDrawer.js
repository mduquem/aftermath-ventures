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
      <div className={classes.Mandala}>
        <a onClick={props.clicked} href="#Landing">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 48 48"
          >
            <g className={classes.cls_2} transform="matrix(1, 0, 0, 1, 0, 0)">
              <path
                id="Icon_material-camera-2"
                data-name="Icon material-camera"
                fill="#FF4F56"
                d="M14.1,15.75,21.255,3.36A15.458,15.458,0,0,0,18,3,14.976,14.976,0,0,0,8.52,6.375L14.01,15.9ZM32.31,13.5a15.037,15.037,0,0,0-9-9.51L17.82,13.5H32.31ZM32.7,15H21.465l.435.75,7.14,12.375A14.866,14.866,0,0,0,33,18,15.186,15.186,0,0,0,32.7,15ZM12.81,18,6.96,7.875A14.936,14.936,0,0,0,3,18a15.186,15.186,0,0,0,.3,3H14.535L12.81,18ZM3.69,22.5a15.037,15.037,0,0,0,9,9.51l5.49-9.51H3.69Zm16.905,0-5.85,10.14A15.458,15.458,0,0,0,18,33a14.976,14.976,0,0,0,9.48-3.375L21.99,20.1l-1.4,2.4Z"
                transform="translate(6 3)"
              />
            </g>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default SideDrawer;
