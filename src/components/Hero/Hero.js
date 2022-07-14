import "../Hero/Hero.css";
import cartoon from "../../assets/images/cartoon-network.png";
import Dc from "../../assets/images/dc.png";
import HBo from "../../assets/images/hbo.png";
import maxOriginals from "../../assets/images/max_originals.png";
import wb from "../../assets/images/wb.png";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

const Hero = () => {
  const urlBackend = process.env.REACT_APP_URL;
  const [lastMovie, setLastMovie] = useState({});

  const getLastMovie = async() => {
    const resp = await fetch(`${urlBackend}/movies/last`)
    const json = await resp.json()
    setLastMovie(json.movie[0]);
  }

  useEffect( () => {
    getLastMovie();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="hero">
      <div className="fondo-blur">
        <img className="d-block w-100" src={lastMovie.fondo} alt={lastMovie.titulo}  />
      </div>
      <div className="contenedor">
        <div className="contenedorIcons">
          <di>
            <img src={HBo} alt="icono" className="hero-image" />
          </di>
          <di>
            <img src={Dc} alt="icono" className="hero-image" />
          </di>
          <di>
            <img src={wb} alt="icono" className="hero-image" />
          </di>
          <di>
            <img src={cartoon} alt="icono" className="hero-image" />
          </di>
          <di>
            <img src={maxOriginals} alt="icono" className="hero-image" />
          </di>
        </div>
        <h2 className="heroTitle">YA ERES FAN, CELÉBRALO!</h2>
        <div className="planOferta">
          <h3>PLAN DE</h3>
          <h4>3 MESES</h4>
          <p>X EL PRECIO DE 1</p>
        </div>
        <div className="contenedor-boton">
          <button className="boton-hero">
            <NavLink to="/register" className="boton-hero">
              APROVECHA AHORA
            </NavLink>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
