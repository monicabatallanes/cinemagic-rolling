import React from "react";
import axios from "axios";
import "../PelisGrilla/pelisgrilla.css";


const PelisGrilla = ({imagen, titulo, id}) => {
  console.log('prop titulo recibido: ', titulo);

    const handleClick = async(id) => {
      const resp = await axios.get(`https://imdb-api.com/en/API/Title/k_q9mj0i81/${id}`)
      console.log(resp.data)
      
      const newJson = JSON.stringify(resp.data)
      localStorage.setItem("infoMovie" , newJson)
  
      window.location.href = "/detail"
    
    }
  
      return (
      
          <li className="pelis">
              <img className="img-grid" src={imagen} alt={titulo}/>
              <button onClick={()=> handleClick(id)} className="handleclickButton text-white">{titulo}</button>
          </li>
      );
  };
  
  export default PelisGrilla;