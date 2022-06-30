import React from "react";
import axios from "axios";
import "../PelisGrilla/pelisgrilla.css";


const PelisGrilla = ({imagen, titulo, id}) => {
  

    const handleClick = async(id) => {
      const resp = await axios.get(`https://imdb-api.com/en/API/Title/k_vb7atl1v/${id}`)
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