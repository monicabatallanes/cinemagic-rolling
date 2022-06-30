import React from "react";
import "../MenuNavegacion/MenuNavegacion.css";
import style from "../Navbar/Navbar.module.css";
import Logo from "../../assets/images/cinemagic-logo.svg"
import { NavLink } from "react-router-dom";

const MenuNavegacion = ({ imageSrc }) => {
  return (
    <nav className="navbar">
      <img src={Logo} alt="logo" className={style.titleNabvar} />
      <div className={style.botonContainer}>
        <NavLink to="/register" className="boton-suscribite">
          Suscríbite ahora
        </NavLink>
        <NavLink to="/login" className={style.botonNav}>
          Iniciar sesión
        </NavLink>
      </div>
    </nav>
  );
};

export default MenuNavegacion;
