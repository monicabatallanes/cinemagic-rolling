import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import MenuNavegacion from "../../components/MenuNavegacion/MenuNavegacion";
import Carrusel from "../../components/Carrusel/Carrusel";
import PelisGrilla from "../../components/PelisGrilla/PelisGrilla";
import "./home.css"


const Home = () => {
  
  /* const userJson = localStorage.getItem('cinemagicUser');
  if(userJson !== null){
    const userObj = JSON.parse(userJson); 
    console.log(userObj)
    console.log('usuario: ', userObj.user)
    console.log('token: ', userObj.token)
  } */
  const [ pelis, setPelis] = useState([])
  
  const getPeli = async() => {
    
    const res = await axios.get('https://imdb-api.com/en/API/MostPopularMovies/k_vb7atl1v')
    console.log(res.data.items)

    const pelisFiltradas = res.data.items.filter(peli => peli.rank <= 24)
    setPelis(pelisFiltradas)

  } 
  console.log(pelis)
  
  useEffect(() => {
      getPeli();
  }, [])

  
    return(
        <>
        <header>
          <MenuNavegacion/>
        </header>

        <main>
          <section>
            <Carrusel/>
            
          </section>
          <section>
            <h2 className="titulo-home text-center m-2 text-white">Recomendados</h2>
            <ul className="grilla">
              {
                pelis.map(peli => <PelisGrilla imagen={peli.image} titulo={peli.title} key={peli.id} id={peli.id} /> )
              }
            </ul>
          </section>
        </main>
        </>
       
    )
} 

export default Home;
