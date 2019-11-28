import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.Footer}>
      <h2>© 2019 Aftermath Ventures</h2>
      <h2>Medellín, Colombia</h2>
      <ul>
        <li>Whatsapp</li>
        <li>Facebook</li>
        <li>Instagram</li>
        <li>Youtube</li>
      </ul>
    </div>
  );
};

export default Footer;
