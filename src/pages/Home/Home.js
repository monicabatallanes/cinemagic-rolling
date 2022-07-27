import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";
import CarouselSlider from "../../components/CarouselSlider/CarouselSlider";
import "./home.css";
import GenresData from "../../Genres.json";
import Footer from "../../components/Footer/Footer";
import Swal from "sweetalert2";

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
        Swal.fire({
          title: 'CineMagic',
          text: res.data.mensaje,
          icon: "success",
          showConfirmButton: false,
          timer: 2000
        }).then(function() {
          localStorage.clear();
          window.location.href="/login";
        })
      } else {
        setPelis(res.data.movies)
      }
    }
  }

  useEffect(() => {
    getPeli();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return(
    <div className="d-flex flex-column min-vh-100">
      <header>
        <Navbar mostrarMenu={mostrarMenu} />
      </header>
      <main>
        <section>
          {
            GenresData.map(genero => pelis?.filter(peli => peli.genero === genero.name).length >1 ? (<CarouselSlider pelis={pelis.filter(peli => peli.genero === genero.name)} key={genero.id} genero={genero.nombre} />) : (<br key={genero.id} />) )
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