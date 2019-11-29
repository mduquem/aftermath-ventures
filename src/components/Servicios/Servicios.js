import React from "react";

import classes from "./Servicios.module.css";
import iconoUno from "../../assets/svg/icon1.svg";
import iconoDos from "../../assets/svg/icon2.svg";
import iconoTres from "../../assets/svg/icon3.svg";

const Servicios = () => {
  return (
    <div className={classes.Servicios}>
      <div className={classes.Servicio}>
        <h1>
          0<span>/ </span>Empieza desde cero<span>.</span>
        </h1>

        <h2>
          Sabemos que todo emprendimiento empieza con recursos limitados. Es por
          esto que en <strong>Aftermath Ventures </strong> te ayudamos a crear
          soluciones desde cero.
        </h2>

        <div className={classes.Icono}>
          <img
            src={iconoUno}
            alt="Empieza desde cero con tu emprendimiento o idea de negocio"
          />
        </div>
      </div>
      <div className={classes.Servicio}>
        <h1>
          1<span>/</span> Conecta con tus clientes<span>.</span>
        </h1>

        <h2>
          Tu marca es el conjunto de sensaciones que despiertas en tu cliente.
          No por nada es una de las características más importantes que tu
          negocio debe desarrollar.
        </h2>
        <div className={classes.Icono}>
          <img
            src={iconoDos}
            alt="Conecta con tus clientes con una marca poderosa e innovadora"
          />
        </div>
      </div>
      <div className={classes.Servicio}>
        <h1>
          2<span>/ </span>Desarrolla tu futuro<span>.</span>
        </h1>
        <h2>
          El siguiente paso es el desarrollo y la implementación de tu MVP.
          Luego, debes recibir de tu cliente la valiosa retroalimentación que
          necesitas para la siguiente iteración de tu modelo de negocio.
        </h2>
        <div className={classes.Icono}>
          <img
            src={iconoTres}
            alt="Desarrolla tu futuro al tener tu negocio en la web y accede a clientes en todo el mundo"
          />
        </div>
      </div>
    </div>
  );
};

export default Servicios;
