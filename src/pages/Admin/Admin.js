import { useEffect, useState } from "react";
import MovieDashboard from "../../components/MovieDashboard/MovieDashboard";
import MovieListPanel from "../../components/MovieListPanel/MovieListPanel";
import Navbar from "../../components/Navbar/Navbar";
import "./admin.css"
import Footer from "../../components/Footer/Footer";

const Admin = () => {
  const urlBackend = process.env.REACT_APP_URL; 
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [dataObj, setdataObj] = useState("");
  const [peliculasRegistradas, setPeliculasRegistradas] = useState([]);

  const getPeliculasRegistradas = async() => {
    const userJson = localStorage.getItem('cinemagicUser');
    let data;
    if(userJson !== null){
      const userObj = JSON.parse(userJson); 
      data = {
        accessToken : userObj.token
      }
    }
    const resp = await fetch(`${urlBackend}/movies/list`, {
      method:'POST',
      body: JSON.stringify(data),
      headers:{
        "Content-Type": "application/json"
      }
    })
    const json = await resp.json()
    setPeliculasRegistradas(json.movies);
  }

  useEffect( () => {
    getPeliculasRegistradas();
  }, [])

  useEffect(() => {
    getPeliculasRegistradas();
  },[isAdding])
  
  useEffect(() => {
    getPeliculasRegistradas();
  },[isEditing])

  const mostrarMenu=false;

  return ( 
    <div className="d-flex flex-column min-vh-100">
      <header>
        <Navbar mostrarMenu={mostrarMenu} />
      </header>
      <main>
        <section>
          <div className="container text-light">
            <h1 className="d-inline mr-2 d-flex justify-content-center">Bienvenido Administrador</h1>
            <div className="mb-1 d-flex justify-content-center">
              {
                isAdding? (
                  <button 
                    className="btn boton-login" 
                    onClick={() => setIsAdding(false)}
                  >
                    Volver
                  </button>
                ) : (
                  <div>
                  {
                    isEditing? (
                      <button 
                        className="btn boton-login"
                        onClick={() => setIsEditing(false)}
                      >
                        Volver
                      </button>
                    ):(
                      <button 
                        className="btn boton-login"
                        onClick={() => setIsAdding(true)}
                      >
                        Agregar
                      </button>
                    )
                  }
                  </div>
                )
              }
            </div>
            {
              (!isAdding && !isEditing)? (
                <MovieListPanel peliculas={peliculasRegistradas} cambiaEstadoEditar={setIsEditing} cambiaEstadoObjeto={setdataObj} />
              ):(
                <MovieDashboard editar={isEditing}  agregar={isAdding} objeto={dataObj} cambiaEstadoEditar={setIsEditing} cambiaEstadoAgregar={setIsAdding}  />
              )
            }
          </div>
        </section>
      </main>
      <footer className="mt-auto">
        <Footer />
      </footer> 

    </div>
  );
}

export default Admin;