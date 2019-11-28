import React from "react";

import classes from "./DrawerToggle.module.css";

const DrawerToggle = props => {
  return (
    <div onClick={props.clicked} className={classes.DrawerToggle}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 27 15.75"
      >
        <g
          id="Icon_ionic-ios-menu"
          data-name="Icon ionic-ios-menu"
          transform="translate(-4.5 -10.125)"
        >
          <path
            id="Trazado_18"
            data-name="Trazado 18"
            d="M30.375,12.375H5.625A1.128,1.128,0,0,1,4.5,11.25h0a1.128,1.128,0,0,1,1.125-1.125h24.75A1.128,1.128,0,0,1,31.5,11.25h0A1.128,1.128,0,0,1,30.375,12.375Z"
            fill="#E95959"
          />
          <path
            id="Trazado_19"
            data-name="Trazado 19"
            d="M30.375,19.125H5.625A1.128,1.128,0,0,1,4.5,18h0a1.128,1.128,0,0,1,1.125-1.125h24.75A1.128,1.128,0,0,1,31.5,18h0A1.128,1.128,0,0,1,30.375,19.125Z"
            fill="#E95959"
          />
          <path
            id="Trazado_20"
            data-name="Trazado 20"
            d="M30.375,25.875H5.625A1.128,1.128,0,0,1,4.5,24.75h0a1.128,1.128,0,0,1,1.125-1.125h24.75A1.128,1.128,0,0,1,31.5,24.75h0A1.128,1.128,0,0,1,30.375,25.875Z"
            fill="#E95959"
          />
        </g>
      </svg>
    </div>
  );
};

export default DrawerToggle;
