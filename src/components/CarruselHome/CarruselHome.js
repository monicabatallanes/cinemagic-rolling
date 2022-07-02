import React from "react";
import { Carousel } from "react-bootstrap";
import "../Carrusel/Carrusel.css"
import carrusel1 from "../../assets/images/carrusel1.png";
import carrusel3 from "../../assets/images/carrusel2.jpg";
import carrusel5 from "../../assets/images/carrusel3.jpg";
import carrusel7 from "../../assets/images/carrusel4.jpg";

const CarruselHome = ({ imagen, id}) => {
    return (
        <div>
            <Carousel className="carrusel-contenedor">
          <Carousel.Item className="carruselItem">
            <img className="img-carrusel" src={carrusel1} alt={id} />
          </Carousel.Item>
          <Carousel.Item className="carruselItem">
            <img className="img-carrusel" src={carrusel3} alt={id} />
          </Carousel.Item>
          <Carousel.Item className="carruselItem">
            <img className="img-carrusel" src={carrusel5} alt={id} />
          </Carousel.Item>
          <Carousel.Item className="carruselItem">
            <img className="img-carrusel" src={carrusel7} alt={id} />
          </Carousel.Item>
        </Carousel>
        </div>
    );
};

export default CarruselHome;