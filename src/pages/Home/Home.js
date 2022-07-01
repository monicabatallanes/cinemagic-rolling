import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";
import PelisGrilla from "../../components/PelisGrilla/PelisGrilla";
import "./home.css"


const Home = () => {
  
  
  const [ pelis, setPelis] = useState([])
  
  const getPeli = async() => {
    
    const res = await axios.get('https://imdb-api.com/en/API/MostPopularMovies/k_q9mj0i81')
    console.log('respuesta api: ', res.data.items)

    const pelisFiltradas = res.data.items.filter(peli => peli.rank <= 24)
    setPelis(pelisFiltradas)

  } 
  console.log('pelis filtradas: ',pelis)
  
  useEffect(() => {
      getPeli();
  }, [])

  
    return(
        <div class="d-flex flex-column min-vh-100">
        <header>
          <Navbar/>
        </header>

        <main>
          <section>
           
            
          </section>
          <section>
            <h2 className="titulo-home text-center m-2 text-white">Películas</h2>
            <ul className="grilla">
              {
                pelis.map(peli => <PelisGrilla imagen={peli.image} titulo={peli.title} key={peli.id} id={peli.id} /> )
              }
            </ul>
          </section>
        </main>
        </div>
       
    )
} 

export default Home;