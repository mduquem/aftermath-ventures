import React from 'react';

import whatsapp from '../../assets/svg/whatsapp.svg';
import instagram from '../../assets/svg/instagram.svg';
import facebook from '../../assets/svg/facebook.svg';
import linkedin from '../../assets/svg/linkedin.svg';

import classes from './Footer.module.css';

const Footer = () => {
  return (
    <div className={classes.Footer}>
      <div>
        <h3>desarrollo@aftermathventures.com</h3>
        <h3>Whatsapp: +57 310 827-4440</h3>
        <h3>
          Todos los derechos reservados © {new Date().getFullYear()} Aftermath
          Ventures.
        </h3>
      </div>

      <ul className={classes.Redes}>
        {/* <li>
          <a href="https://www.linkedin.com/company/aftermathventures">
            <img src={facebook} alt="" />
          </a>
        </li> */}
        <li>
          <a href="https://www.linkedin.com/company/aftermathventures">
            <img src={linkedin} alt="" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
