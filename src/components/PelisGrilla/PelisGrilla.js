import React from "react";
import "../PelisGrilla/pelisgrilla.css";
import { useNavigate } from "react-router-dom";

const PelisGrilla = ({peli, id, handle}) => {
  const navigate = useNavigate();
  const toDetail=()=>{
    navigate('/detail',{state:{peli:peli, handle:handle}});
  }

  return (
    <li className="pelis">
        <img className="img-grid" src={peli.poster} alt={peli.titulo}/>
        <button onClick={()=> toDetail(id)} className="handleclickButton text-white boton-grid">{peli.titulo}</button>
    </li>
  );
};

export default PelisGrilla;