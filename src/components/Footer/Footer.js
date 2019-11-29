import React from "react";

import whatsapp from "../../assets/svg/whatsapp.svg";
import instagram from "../../assets/svg/instagram.svg";
import facebook from "../../assets/svg/facebook.svg";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.Footer}>
      <div>
        <h3>© 2019 Aftermath Ventures</h3>
        <h3>aftermathventures.col@gmail.com</h3>
        <h3>Whatsapp: +57 311 231-1571</h3>
        <h3>Medellín, Colombia</h3>
      </div>

      <ul className={classes.Redes}>
        <li>
          <a href="https://wa.me/573112311571">
            <img
              src={whatsapp}
              alt="Comunícate con nosotros por Whatsapp para desarrollar tu emprendimiento o tu página web"
            />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/aftermathventures/">
            <img
              src={instagram}
              alt="Síguenos en Instagram para acceder al mejor contenido de emprendimiento y tecnología en Colombia y Latinoamerica"
            />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/aftermathschool/">
            <img
              src={facebook}
              alt="Síguenos en Facebook para acceder al mejor contenido de emprendimiento y tecnología en Colombia y Latinoamerica"
            />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
