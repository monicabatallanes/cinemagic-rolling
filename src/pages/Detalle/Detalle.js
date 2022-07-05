
import React from "react";
import { useEffect, useState } from "react";
import "./detalle.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

const Detalle = () => {
  const [detalle, setDetalle ] = useState([]) 
  const getDetail = () => {
    const detailMovie= localStorage.getItem("infoMovie")
    const objDetail= JSON.parse(detailMovie)
    setDetalle(objDetail)
  }
  useEffect(() => {
    getDetail();
  }, [detalle.id])

  return (
    <div className="d-flex flex-column min-vh-100"> 
      <header>
        <Navbar/>
      </header>
      <section className="detail-container">
        <div className="col d-flex justify-content-center">
          <img className="movie-image" src={detalle.image} alt={detalle.title} />
        </div>
        <div className="col">
          <p className="titulo-detail">{detalle.title}</p>
          <p className="resumen text-white"><strong>Resumen: </strong>{detalle.plot} </p>
          <p className="text-white"><strong>Género: </strong>{detalle.genres}</p>
          <p className="text-white"><strong>Actores: </strong>{detalle.stars}</p>
          <p className="text-white"><strong>Directores: </strong>{detalle.directors}</p>
        </div>
      </section>
      <section className="d-none d-md-block">
        <p className="titulo-detail d-flex justify-content-center">Reparto de la película</p>
        <div className="grilla mt-3">
          {
            detalle.actorList?.map((actor) => <div ><img className="img-grid" src={actor.image} alt={actor.id}/> <p className='text-center mt-1 mb-2'>{actor.name} </p></div>)
          }
        </div>
      </section>
      <section>
        <div className="d-flex justify-content-center m-4">
          <Link to={"/home"}>
          <Button variant="outline-danger ">Volver</Button>
          </Link>
        </div>
      </section>  
    </div>
  );
};

export default Detalle;