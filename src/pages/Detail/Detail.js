import React from "react";
import { useEffect, useState } from "react";
import "./detail.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";


const Detail = () => {

  const [detalle, setDetalle ] = useState([]) 
  const getDetail = () => {
      const detailMovie= localStorage.getItem("infoMovie")
      const objDetail= JSON.parse(detailMovie)
      setDetalle(objDetail)
      
  }
  console.log(detalle)
  useEffect(() => {
      getDetail();
  }, [detalle.id])
  


  return (
      <> 
      <header>
          <Navbar/>
      </header>
      <section className="detail-container">
          <div className="col d-flex justify-content-center">
              <img className="movie-image" src={detalle.image} alt={detalle.title} />
          </div>
          <div className="col">
              <p className="text-white"><strong>Titulo: </strong> {detalle.title}</p>
              <p className="text-white"><strong>Resumen: </strong>{detalle.plot} </p>
              <p className="text-white"><strong>Genero: </strong>{detalle.genres}</p>
              <p className="text-white"><strong>Actores: </strong>{detalle.stars}</p>
              <p className="text-white"><strong>Directores: </strong>{detalle.directors}</p>
          </div>
      </section>
       <section>
         <div className="d-flex justify-content-center m-4">
            <Link to={"/home"}>
            <Button variant="outline-danger ">Volver</Button>
            </Link>
         </div>
        </section>  
         

      </>
      
  );
};

export default Detail;