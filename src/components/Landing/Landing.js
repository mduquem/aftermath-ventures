import React from 'react';
import { Reveal, Animation } from 'react-genie';

import classes from './Landing.module.css';

const Landing = () => {
  return (
    <div className={classes.Landing}>
      <div className={classes.Lead}>
        <h1>
          Desarrolla tu futuro hoy<span>.</span>
        </h1>
        <h2>
          <Reveal>
            No importa si <em>sólo</em> tienes una idea, un prototipo o un
            negocio establecido, <strong>Aftermath Ventures</strong> te ayuda en
            cada etapa de tu emprendimiento.
          </Reveal>
        </h2>

        <a href="mailto:aftermathventures.col@gmail.com">
          <Reveal animation={Animation.BounceInLeft}>
            <button>ESCRÍBENOS</button>
          </Reveal>
        </a>
      </div>
      {/* AQUI TOCA PONER OTRO LLAMADO A LA ACCION DISTINTO Toca incluir opt in form y contact form */}
      {/* <div>
        <input placeholder="Ingresa tu correo" />
        <button>Enviar</button>
      </div> */}
    </div>
  );
};

export default Landing;
