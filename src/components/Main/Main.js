import React from 'react';
import Landing from '../Landing/Landing';
import Portafolio from '../Portafolio/Portafolio';
import Servicios from '../Servicios/Servicios';
import Contacto from '../Contacto/Contacto';

const Main = () => {
  return (
    <div>
      <section id="Landing">
        <Landing />
      </section>
      <section id="Portafolio">
        <Portafolio />
      </section>
      <section id="Servicios">
        <Servicios />
      </section>
      <section id="Contacto">
        <Contacto />
      </section>
    </div>
  );
};

export default Main;
