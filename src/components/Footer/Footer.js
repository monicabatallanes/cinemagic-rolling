import React from "react";
import "../Footer/Footer.css";
import Logo from "../../assets/images/cinemagic-logo.svg";

const Footer = () => {
  return (
    <div className="contenedor-footer">
      <div>
        <a href="/#">
          <img src={Logo} alt="logo" className="logo-footer" />
        </a>
      </div>
      <ul className="iconos-footer">
        <li className="lista-footer">
          <a href="https://www.instagram.com/">
            <i className="bi bi-instagram"></i>
          </a>
        </li>
        <li className="lista-footer">
          <a href="https://www.facebook.com/">
            <i className="bi bi-facebook"></i>
          </a>
        </li>
        <li className="lista-footer">
          <a href="https://www.whatsapp.com/?lang=es">
            <i className="bi bi-whatsapp"></i>
          </a>
        </li>
        <li className="lista-footer">
          <a href="https://www.twitter.com/">
            <i className="bi bi-twitter"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
