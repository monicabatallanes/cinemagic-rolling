import React from "react";
import { Carousel } from "react-bootstrap";
import "./carruselHome.css";

const CarruselHome = ({pelis, id}) => {
  console.log('pelis en carrousel: ', pelis);
  return (
    <div>
      <Carousel className="carrusel-contenedor">
      {
        pelis?.map( peli => 
          <Carousel.Item className="carruselItem" key={peli._id} id={peli._id}>
            <img className="img-carrusel" src={peli.fondo} alt={peli.titulo} />
          </Carousel.Item>
        )
      }
      </Carousel>
    </div>
  );
};

export default CarruselHome;