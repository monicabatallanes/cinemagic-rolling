import React from "react";
import "../MenuNavegacion/MenuNavegacion.css";
import style from "../Navbar/Navbar.module.css";
import Logo from "../../assets/images/cinemagic-logo.svg"
import { NavLink } from "react-router-dom";

const MenuNavegacion = ({ imageSrc }) => {
  return (
    <nav className="navbar navbar-expand-sm justify-content-between navbar-dark fixed-top">
      <div className="menu-header">
        <a className="navbar-brand" href="/">
          <img src={Logo} className={style.titleNabvar} />
        </a>
      </div>
      <div className="justify-content-end d-flex  d-sm-none">
        <div className="nav-item">
          <NavLink to="/register" className="boton-suscribite" >
            Suscríbite
        </NavLink>
        </div>
        <div className="nav-item">
          <NavLink to="/login" className={style.botonNav} >
            Ingresa
          </NavLink>
        </div>
      </div>
      <div className="justify-content-end d-none d-sm-flex">
        <div className="nav-item">
          <NavLink to="/register" className="boton-suscribite" >
            Suscríbite ahora
        </NavLink>
        </div>
        <div className="nav-item">
          <NavLink to="/login" className={style.botonNav} >
            Ingresa
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default MenuNavegacion;