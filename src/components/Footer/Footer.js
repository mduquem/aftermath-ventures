import React from "react";

import whatsapp from "../../assets/svg/whatsapp.svg";
import instagram from "../../assets/svg/instagram.svg";
import facebook from "../../assets/svg/facebook.svg";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.Footer}>
      <h3>© 2019 Aftermath Ventures</h3>
      <h3>aftermathventures@gmail.com</h3>
      <h3>Whatsapp: +57 311 2311571</h3>
      <h3>Medellín, Colombia</h3>

      <ul className={classes.Redes}>
        <li>
          <img
            src={whatsapp}
            alt="Comunícate con nosotros por Whatsapp para desarrollar tu emprendimiento o tu página web"
          />
        </li>
        <li>
          {" "}
          <img
            src={instagram}
            alt="Síguenos en Instagram para acceder al mejor contenido de emprendimiento y tecnología en Colombia y Latinoamerica"
          />
        </li>
        <li>
          {" "}
          <img
            src={facebook}
            alt="Síguenos en Facebook para acceder al mejor contenido de emprendimiento y tecnología en Colombia y Latinoamerica"
          />
        </li>
      </ul>
    </div>
  );
};

export default Footer;
