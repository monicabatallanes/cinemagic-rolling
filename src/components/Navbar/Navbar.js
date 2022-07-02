import style from "../Navbar/Navbar.module.css";
import menuNavbar from "../../assets/images/list_options_menu.png";
import logo from "../../assets/images/cinemagic-logo.svg";
import { NavLink } from "react-router-dom";

const Navbar = () => {

  const logOut = () => {
    localStorage.clear();
  }

  return (
    <div className={style.contenedorNav}>
      <nav className="navbar navbar-light fixed-top">
        <div className="container-fluid d-flex flex-row-reverse">
          <div className={style.botonContainer}>
            <NavLink to="/login" className={style.botonNav} onClick={logOut}>
              Cerrar sesión
            </NavLink>
          </div>
          <div>
            <img src={logo} alt="logo" className={style.titleNabvar}></img>
          </div>
          <button
            className="navbar-toggler"
            id={style.menu}
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <img src={menuNavbar} className={style.imgMenu} alt="logo"></img>
          </button>
          <div
            className="offcanvas offcanvas-start bg-black"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className={style.headerNav}>
              <h5 className="InicioNav">Inicio</h5>
              <button
                type="button"
                className="btn-close btn-close-white text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className={style.listado}>
              <div className="offcanvas-body">
                <div className={style.buscadorContainer}>
                  <form>
                    <input
                      className={style.buscadorNavbar}
                      type="search"
                      placeholder="¿Que está buscando?"
                    />
                    <button className="btn btn-outline-primary" type="submit">
                      Buscar
                    </button>
                  </form>
                </div>
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li>
                    <NavLink to="/home" className={style.navItem}>
                      Películas
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/login" className={style.navItem}>
                      Recién añadidos
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/login" className={style.navItem}>
                      Próximamente
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/login" className={style.navItem}>
                      En tendencia
                    </NavLink>
                  </li>
                  <hr />
                  <li>
                    <NavLink to="/login" className={style.navItem}>
                      Acción
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/login" className={style.navItem}>
                      Comedia
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/login" className={style.navItem}>
                      Drama
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/login" className={style.navItem}>
                      Fantasía y Ciencia Ficción
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/login" className={style.navItem}>
                      Terror y Suspenso
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/login" className={style.navItem}>
                      Infantil y Familiar
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
