import React from "react";
import { useEffect, useState } from "react";
import "./detail.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import {useLocation} from 'react-router-dom';
import ReactPlayer from "react-player";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

const Detail = () => {
  const [detalle, setDetalle ] = useState([]) 
  const [handle, setHandle ] = useState("") 
  const location = useLocation();
  let navigate = useNavigate();

  const getDetail = () => {
    const objDetail = location.state.peli;
    setDetalle(objDetail)
    setHandle(location.state.handle)
  }

  useEffect(() => {
      getDetail();
  }, [])

  return (
    <div className="d-flex flex-column min-vh-100"> 
      <header>
        <Navbar/>
      </header>
      <main>
        <section className="detail-container ">
          <div className="col d-flex justify-content-center">
            <img className="movie-image" src={detalle.poster} alt={detalle.titulo} />
          </div>
          <div className="col">
            <p className="titulo-detail">{detalle.titulo}</p>
            <p className="resumen text-white"><strong>Resumen: </strong>{detalle.sinopsis} </p>
            <p className="text-white"><strong>Género: </strong>{detalle.genero}</p>
            <div className="slider-video">
              <ReactPlayer
                className="slider-video"
                url={detalle.trailer}
                width="100%"
                height="100%"
              />
            </div>
          </div>
        </section>
        <section>
          <div className="d-flex justify-content-center m-4">
            {
              handle? 
                (
                  <Button className="boton-hero"  onClick={() => navigate('/movies-by-genre'+handle)}>Volver a {handle}</Button>
                ):(
                  <Link to={"/home"}>
                    <Button className="boton-hero" >Volver</Button>
                  </Link>
                )
            }
          </div>
        </section>
      </main>
      <footer className="mt-auto">
        <Footer />
      </footer> 
    </div>
  );
};

export default Detail;