import { useEffect, useState } from "react";
import MovieDashboard from "../../components/MovieDashboard/MovieDashboard";
import MovieListPanel from "../../components/MovieListPanel/MovieListPanel";

const Admin = () => {
  const urlBackend = process.env.REACT_APP_URL; 
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [dataObj, setdataObj] = useState("");
  const [peliculasRegistradas, setPeliculasRegistradas] = useState([]);
  const getPeliculasRegistradas = async() => {
    const resp = await fetch(`${urlBackend}/movies/list`)
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

  return ( 
    <div class="d-flex flex-column min-vh-100">
      <div className="container text-light">
        <h1 className="d-inline mr-2">Bienvenido Administrador</h1>
        
        <div className="mb-1">
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
    </div>
  );
}

export default Admin;