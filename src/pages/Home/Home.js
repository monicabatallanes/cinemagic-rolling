import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";
import CarouselSlider from "../../components/CarouselSlider/CarouselSlider";
import "./home.css";
import GenresData from "../../Genres.json";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  const urlBackend = process.env.REACT_APP_URL; 
  const [ pelis, setPelis] = useState([])
  const mostrarMenu=true;
  const getPeli = async() => {
    const userJson = localStorage.getItem('cinemagicUser');
    let token;
    if(userJson !== null){
      const userObj = JSON.parse(userJson); 
      token = userObj.token;
    }
    const headersConfig = {
      headers: { Authorization: `${token}` }
    };
    const bodyParameters = {
      elementos: 10
    };
    const res = await axios.post(`${urlBackend}/movies/latest-by-genre`, bodyParameters, headersConfig)
    if(res.status === 200){
      if(res.data.estado === 401){
        alert(res.data.mensaje);
        localStorage.clear();
        window.location.href="/login";
      } else {
        setPelis(res.data.movies)
      }
    }
  }

  useEffect(() => {
    getPeli();
  }, [])

  return(
    <div className="d-flex flex-column min-vh-100">
      <header>
        <Navbar mostrarMenu={mostrarMenu} />
      </header>
      <main>
        <section>
        <div id="padre">
          <img className="d-block img-fondo" src={pelis[0]?.fondo} alt={pelis[0]?.titulo} />
          <div className="card-body">
            <h5 className="card-title">{pelis[0]?.titulo}</h5>
            <h2 className="card-subtitle">{pelis[0]?.genero}</h2>
            <p className="card-text">{pelis[0]?.sinopsis}</p>
          </div>
        </div>
        </section>
        <section>
          {
            GenresData.map(genero => pelis?.filter(peli => peli.genero === genero.name).length >5 ? (<CarouselSlider pelis={pelis.filter(peli => peli.genero === genero.name)} key={genero.id} genero={genero.nombre} />) : (<br key={genero.id} />) )
          }
        </section>
      </main>
      <footer className="mt-auto">
        <Footer />
      </footer> 
    </div>
  )
} 

export default Home;