import React from 'react';
import { AnimatedTitle, Reveal, Animation } from 'react-genie';
import linkedin from '../../assets/svg/linkedin.svg';

import classes from './Contacto.module.css';

const Contacto = () => {
  return (
    <div className={classes.Contacto}>
      <h1>
        <AnimatedTitle>
          ¿Qué esperas para entrar en la era digital?
        </AnimatedTitle>
      </h1>
      <div className="mb-5">
        <a href="https://www.linkedin.com/company/aftermathventures">
          <img className="mb-3" src={linkedin} alt="" />
        </a>
        <h3>desarrollo@aftermathventures.com</h3>
        <h3>Whatsapp: +57 310 827-4440</h3>
        <h3>
          Todos los derechos reservados © {new Date().getFullYear()} Aftermath
          Ventures.
        </h3>
      </div>

      {/* <a href="mailto:desarrollo@aftermathventures.com">
        <Reveal animation={Animation.BounceInRight}>
          {' '}
          <button>ESCRÍBENOS</button>
        </Reveal>
      </a> */}
    </div>
  );
};

export default Contacto;
