import React from 'react';
import { AnimatedTitle, Reveal, Animation } from 'react-genie';

import classes from './Contacto.module.css';

const Contacto = () => {
  return (
    <div className={classes.Contacto}>
      <h1>
        <AnimatedTitle>
          ¿Qué esperas para entrar en la era digital?
        </AnimatedTitle>
      </h1>
      <a href="mailto:aftermathventures.col@gmail.com">
        <Reveal animation={Animation.BounceInRight}>
          {' '}
          <button>ESCRÍBENOS</button>
        </Reveal>
      </a>
    </div>
  );
};

export default Contacto;
