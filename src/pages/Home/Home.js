import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";
import PelisGrilla from "../../components/PelisGrilla/PelisGrilla";
import Footer from "../../components/Footer/Footer";
import "./home.css"


const Home = () => {
  
  
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
        <footer>
          <Footer/>
        </footer>
        </>
       
    )
} 

export default Home;
