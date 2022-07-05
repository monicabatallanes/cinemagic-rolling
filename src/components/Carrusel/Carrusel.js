import React from "react";
import { Carousel } from "react-bootstrap";
import "../Carrusel/Carrusel.css"
import carrusel1 from "../../assets/images/carrusel1.png";
import carrusel2 from "../../assets/images/carrusel2.jpg";
import carrusel3 from "../../assets/images/carrusel3.jpg";
import carrusel4 from "../../assets/images/carrusel4.jpg";
import carrusel5 from "../../assets/images/carrusel5.jpg";
import carrusel6 from "../../assets/images/carrusel6.jpg";
import carrusel7 from "../../assets/images/carrusel7.jpg";
import carrusel8 from "../../assets/images/carrusel8.webp";

const Carrusel = ({imagen, id}) => {
  return (
    <div className="carrusel">
      <Carousel className="carrusel-contenedor">
        <Carousel.Item className="carruselItem">
          <img className="img-carrusel" src={carrusel1} alt={id} />
        </Carousel.Item>
        <Carousel.Item className="carruselItem">
          <img className="img-carrusel" src={carrusel2} alt={id} />
        </Carousel.Item>
        <Carousel.Item className="carruselItem">
          <img className="img-carrusel" src={carrusel3} alt={id} />
        </Carousel.Item>
        <Carousel.Item className="carruselItem">
          <img className="img-carrusel" src={carrusel7} alt={id} />
        </Carousel.Item>
      </Carousel>
      <Carousel className="carrusel-contenedor">
        <Carousel.Item className="carruselItem">
          <img className="img-carrusel" src={carrusel4} alt={id} />
        </Carousel.Item>
        <Carousel.Item className="carruselItem">
          <img className="img-carrusel" src={carrusel5} alt={id} />
        </Carousel.Item>
        <Carousel.Item className="carruselItem">
          <img className="img-carrusel" src={carrusel6} alt={id} />
        </Carousel.Item>
        <Carousel.Item className="carruselItem">
          <img className="img-carrusel" src={carrusel8} alt={id} />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Carrusel;