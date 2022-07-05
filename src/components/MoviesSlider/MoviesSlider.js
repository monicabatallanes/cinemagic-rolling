import React from "react";
import "../MoviesSlider/moviesSlider.css";
import { useNavigate } from "react-router-dom";

const MoviesSlider = ({peli}) => {
  const navigate = useNavigate();
  const toDetail=()=>{
    navigate('/detail',{state:{peli:peli}});
  }
  
  return ( 
    <div>
      <a onClick={()=>{toDetail()}}>
        <div className="pelis-slider card-box1">
          <img className="img-slider " src={peli.fondo} alt={peli.titulo}/>
          <div className="card-img-overlay">
            <h5 className="card-box2">{peli.titulo}</h5>
          </div>
        </div>
      </a>
    </div>
  );
}

export default MoviesSlider;