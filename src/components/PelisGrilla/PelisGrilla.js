import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./pelisgrilla.css";


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
              <Link to={"/detail" }>
                <img className="img-grid" src={imagen} alt={titulo}/>
                <button onClick={()=> handleClick(id)} className="handleclickButton text-white">{titulo}</button>
              </Link>
            </li>
          
    );
  }
  
  export default PelisGrilla;