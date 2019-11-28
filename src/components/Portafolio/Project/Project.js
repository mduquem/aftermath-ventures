import React from "react";


import classes from "./Project.module.css";

const Project = props => {
  return (
    <div className={classes.Project}>
<img src={props.img} alt="Desarrolla tu projecto con Aftermath Ventures y entra en la ola del crecimiento exponencial" />
    </div>
   )
};

export default Project;
