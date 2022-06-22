import React from "react";
import { Carousel } from "react-bootstrap";


const Carrusel = () => {
    
    return (
        
          <Carousel variant="dark">
            <Carousel.Item>
              <img className="d-block w-100" src="https://picsum.photos/200/200?random=1" alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src="https://picsum.photos/200/200?random=2" alt="Second slide"/>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src="https://picsum.photos/200/200?random=3" alt="Third slide"/>
            </Carousel.Item>
          </Carousel> 
        
    );
};

export default Carrusel;