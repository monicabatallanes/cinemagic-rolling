import React from "react";
import { Carousel } from "react-bootstrap";
import "./carruselHome.css";

const CarruselHome = ({pelis, id}) => {
  return (
    <div>
      <Carousel className="carrusel-contenedor-home">
      {
        pelis?.map( peli => 
          <Carousel.Item className="carruselItem-home" key={peli._id} id={peli._id}>
            <img className="img-carrusel-home" src={peli.fondo} alt={peli.titulo} />
          </Carousel.Item>
        )
      }
      </Carousel>
    </div>
  );
};

export default CarruselHome;