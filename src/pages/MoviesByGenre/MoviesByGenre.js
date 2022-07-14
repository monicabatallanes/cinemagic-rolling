import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";
import PelisGrilla from "../../components/PelisGrilla/PelisGrilla";
import "./moviesByGenre.css"
import CarruselHome from "../../components/CarruselHome/CarruselHome";
import Footer from "../../components/Footer/Footer";
import { useParams } from "react-router-dom";

const MoviesByGenre = () => {
  const urlBackend = process.env.REACT_APP_URL; 
  const [ pelis, setPelis] = useState([])
  const mostrarMenu=true;
  const {handle} = useParams();

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
      genero: handle,
      elementos: 50
    };

    const res = await axios.post(`${urlBackend}/movies/movies-by-genre`, bodyParameters, headersConfig)
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
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [handle])

  return ( 
    <div className="d-flex flex-column min-vh-100">
      <header>
        <Navbar mostrarMenu={mostrarMenu} />
      </header>
      <main>
        <section className="mt-3">
          <CarruselHome pelis={pelis} />
        </section>
        <section>
          <h2 className="titulo-home text-center m-2 text-white">{handle}</h2>
          <ul className="grilla">
            {
              pelis.map(peli => <PelisGrilla peli={peli} key={peli._id} id={peli._id} handle={handle} /> )
            }
          </ul>
        </section>
      </main>
      <footer className="mt-auto">
        <Footer />
      </footer> 
    </div>
  );
}

export default MoviesByGenre;