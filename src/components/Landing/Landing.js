import React from "react";
import classes from "./Landing.module.css";

const Landing = () => {
  return (
    <div className={classes.Landing}>
      <h1>
        Desarrolla tu futuro hoy<span>.</span>
      </h1>

      <h2>
        No importa si <em>sólo</em> tienes una idea, un prototipo o un negocio
        establecido, <strong>Aftermath Ventures</strong> te ayuda en cada etapa
        de tu emprendimiento.
      </h2>

      <button>EMPIEZA HOY</button>
    </div>
  );
};

export default Landing;
