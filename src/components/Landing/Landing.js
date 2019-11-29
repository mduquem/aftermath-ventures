import React from "react";

import classes from "./Landing.module.css";

const Landing = () => {
  return (
    <div className={classes.Landing}>
      <div className={classes.Lead}>
        {" "}
        <h1>
          Desarrolla tu futuro hoy<span>.</span>
        </h1>
        <h2>
          No importa si <em>sólo</em> tienes una idea, un prototipo o un negocio
          establecido, <strong>Aftermath Ventures</strong> te ayuda en cada
          etapa de tu emprendimiento.
        </h2>
        <a href="https://wa.me/573112311571">
          <button>EMPIEZA HOY</button>
        </a>
      </div>
    </div>
  );
};

export default Landing;
