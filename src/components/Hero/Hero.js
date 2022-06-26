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
    console.log('last movie: ', json.movie)
    console.log('last movie titulo: ', json.movie[0].titulo)
    setLastMovie(json.movie[0]);
  }

  useEffect( () => {
    getLastMovie();
  }, [])

  return (
    <div className="hero">
      <div className="fondo-blur">
        <img className="d-block w-100" src={lastMovie.fondo}  />
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
          <button className="boton-login">
            <NavLink to="/register" className="boton-login">
              APROVECHA AHORA
            </NavLink>
          </button>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Hero;
