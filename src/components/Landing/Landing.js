import React from 'react';
import { Reveal, Animation } from 'react-genie';

import classes from './Landing.module.css';
import emailSvg from '../../assets/svg/email.svg';

const Landing = () => {
  const successfulResult = (
    <div>
      <h3>Te escribiremos pronto</h3>
    </div>
  );
  const failedResult = (
    <div>
      <h3>
        Ocurrió un error. Intenta comunicarte a desarrollo@aftermathventures.com
      </h3>
    </div>
  );
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

        <div className={classes.FormGroup}>
          <div className="input-group ">
            <div className="input-group-prepend">
              <img
                className={['input-group-text', classes.InputGroupText].join(
                  ' '
                )}
                src={emailSvg}
                alt="email icon"
              />
            </div>
            <input
              type="email"
              placeholder="Ingresa tu correo "
              className={['form-control', classes.FormControl].join(' ')}
            />
          </div>
          <a href="mailto:aftermathventures.col@gmail.com">
            <Reveal animation={Animation.BounceInLeft}>
              <button>Nosotros te escribimos</button>
            </Reveal>
          </a>
        </div>
      </div>
      {/* AQUI TOCA PONER OTRO LLAMADO A LA ACCION DISTINTO Toca incluir opt in form y contact form */}
    </div>
  );
};

export default Landing;
