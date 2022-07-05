import { useForm } from 'react-hook-form';
import { useState } from "react";
import "../MovieDashboard/movieDashboard.css"
import iconSearch from '../../assets/images/search.svg';
import iconClose from '../../assets/images/close.svg';
import GenresData from "../../Genres.json";

const MovieDashboard = (props) => {
  const urlBackend = process.env.REACT_APP_URL; 
  const {agregar, editar, objeto} = props;
  const cambiaEstadoEditar = props.cambiaEstadoEditar;
  const cambiaEstadoAgregar = props.cambiaEstadoAgregar;
  const titulo=agregar? ("Agregar Pelicula") : (editar? "Editar Pelicula": "E  R  R  O  R");
  const { reset, register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async(data) => {
    const userJson = localStorage.getItem('cinemagicUser');
    if(userJson !== null){
      const userObj = JSON.parse(userJson); 
      data.accessToken = userObj.token;
    }
    try{
      if(agregar){
        const resp = await fetch(`${urlBackend}/movies/add`, {
          method:'POST',
          body: JSON.stringify(data),
          headers:{
            "Content-Type": "application/json"
          }
        })
        const json = await resp.json()
        if(resp.ok){
          alert(json.mensaje);
          if(json.estado === 401){
            localStorage.clear();
            window.location.href="/login";
          } else {
            cambiaEstadoAgregar(false);
          }
        }
      } else {
        if(editar){
          data.uid= objeto._id;
          const resp = await fetch(`${urlBackend}/movies/edit`, {
            method:'PUT',
            body: JSON.stringify(data),
            headers:{
              "Content-Type": "application/json"
            }
          })
          const json = await resp.json()
          if(resp.ok){
            alert(json.mensaje);
            if(json.estado === 401){
              localStorage.clear();
              window.location.href="/login";
            } else {
              cambiaEstadoEditar(false);
            }
          }
        }
      }
    } catch (err) {
      alert(err);
    }
  } 

  const deleteData = async() => {
    const uid= objeto._id;
    const data = {
      uid : uid,
    }
    const userJson = localStorage.getItem('cinemagicUser');
    if(userJson !== null){
      const userObj = JSON.parse(userJson); 
      data.accessToken = userObj.token;
    }
    try {
      const confirm = window.confirm("Estas seguro que quieres borrar la pelicula?");
      if (!confirm) {
        return;
      }
      const resp = await fetch(`${urlBackend}/movies/delete`, {
        method:'DELETE',
        body: JSON.stringify(data),
        headers:{
          "Content-Type": "application/json"
        }
      })
      const json = await resp.json()
      if(resp.ok){
        alert(json.mensaje);
        if(json.estado === 401){
          localStorage.clear();
          window.location.href="/login";
        } else {
          cambiaEstadoEditar(false);
        }
      }
    } catch (err) {
      alert(err);
    }
  }

  const [movies, setMovies] = useState([]);
  const [text, setText] = useState("");
  const [id, setId] = useState(0);
  const [suggestions, setSuggestions] = useState([]);
  const urlImagenes = "https://image.tmdb.org/t/p/original";

  const loadMovies = async (data) => {
    const resp = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=4d364ad85512cc46ece523adfe038aba&query=${data}&page=1`)
    const json = await resp.json()
    setMovies(json.results);
  }

  const loadSelectedMovie = async (data) => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${data}?api_key=4d364ad85512cc46ece523adfe038aba&language=en-US`)
    const resultJson = await response.json()
    let defaultValues = {};
    defaultValues.titulo = resultJson.original_title;
    defaultValues.sinopsis = resultJson.overview;
    defaultValues.lanzamiento = resultJson.release_date;
    defaultValues.poster = urlImagenes + resultJson.poster_path;
    defaultValues.fondo = urlImagenes + resultJson.backdrop_path;
    defaultValues.trailer = "";
    defaultValues.genero = resultJson.genres[0].name;
    reset({ ...defaultValues });
  }

  const onChangeHandler = (text) => {
    let matches = [];
    if (text.length > 3) {
      loadMovies(text);
      matches = movies.filter((peli) => {
        const regex = new RegExp(`${text}`, "gi");
        return peli.original_title.match(regex);
      });
    }
    setSuggestions(matches);
    setText(text);
  };

  const onSuggestHandler = (text, id) => {
    setText(text);
    setId(id);
    setSuggestions([]);
  };

  const clearInput = () => {
    setSuggestions([]);
    setText("");
  };

  const fillFields = () => {
    if (text.length > 3) {
      loadSelectedMovie(id);
    }
  };

  return ( 

    <div className="container w-75 mt-4 border-0">
      {
        agregar? (
          <div className='row justify-content-center'>
          <div className="container search   col ">
            <div className="searchInputs ">
              <input
                type="text"
                className="form-control entrada-login" 
                onChange={(e) => onChangeHandler(e.target.value)}
                value={text}
                placeholder="Buscar pelicula"
                onBlur={() => {
                  setTimeout(() => {
                    setSuggestions([]);
                  }, 100);
                }}
              />
              <div className="searchIcon">
                {suggestions.length === 0 ? (
                  <button className="boton-search-close">
                    <img src={iconSearch} onClick={fillFields} />
                  </button>
                ) : (
                  <button className="boton-search-close" id="clearBtn" onClick={clearInput}>
                    <img src={iconClose} />
                  </button>
                )}
              </div>
            </div>
            {suggestions &&
              suggestions.map((suggestion, i) => (
                <div
                  key={i}
                  className="suggestions "
                  onClick={() => onSuggestHandler(suggestion.original_title, suggestion.id)}
                >
                  {suggestion.original_title}
                </div>
              ))}
          </div>
          </div>
        ) : (
          <br></br>
        )
      }
      <div className='row justify-content-center'>
      <div className="col p-5 caja-login mt-2 ">
        <h2 className="fw-bold text-center pt-2 mb-4 ">{titulo}</h2>
        <form className="row" onSubmit={handleSubmit(onSubmit)}>
          <div className="has-validation mb-4">
            <input 
              type="text" 
              name="titulo" 
              className="form-control entrada-login" 
              id="titulo" 
              placeholder="Título original" 
              defaultValue={agregar? "" : objeto.titulo}
              {...register("titulo", {
                required: " Ingresa el titulo original.",
                minLength: {
                  value: 2,
                  message: "El mínimo requerido de caracteres es 2."
                }
              })}
            />
            {errors.titulo && <p className="error-icon">{errors.titulo.message}</p>}
          </div>
          <div className="has-validation mb-4">
            <textarea
              name="sinopsis" 
              cols="40" 
              rows="5"
              className="form-control entrada-login" 
              id="sinopsis" 
              placeholder="Sinopsis" 
              defaultValue={agregar? "" : objeto.sinopsis}
              {...register("sinopsis", {
                required: " Ingresa la sinopsis.",
                minLength: {
                  value: 2,
                  message: "El mínimo requerido de caracteres es 2."
                }
              })}
            >
            </textarea>
            {errors.sinopsis && <p className="error-icon">{errors.sinopsis.message}</p>}
          </div>
          <div className="has-validation mb-4">
            <input 
              type="date" 
              name="lanzamiento" 
              className="form-control entrada-login" 
              id="lanzamiento" 
              placeholder="Lanzamiento"
              defaultValue={agregar? "" : objeto.lanzamiento.split('T')[0]}
              {...register("lanzamiento")}
            />
            {errors.lanzamiento && <p className="error-icon">{errors.lanzamiento.message}</p>}
          </div>
          <div className="has-validation mb-4">
            <input 
              type="url" 
              name="poster" 
              className="form-control entrada-login" 
              id="poster" 
              placeholder="Enlace del póster" 
              defaultValue={agregar? "" : objeto.poster}
              {...register("poster", {
                required: " Ingresa el enlace del póster.",
                minLength: {
                  value: 2,
                  message: "El mínimo requerido de caracteres es 2."
                }
              })}
            />
            {errors.poster && <p className="error-icon">{errors.poster.message}</p>}
          </div>
          <div className="has-validation mb-4">
            <input 
              type="url" 
              name="fondo" 
              className="form-control entrada-login" 
              id="fondo" 
              placeholder="Enlace del fondo de pantalla" 
              defaultValue={agregar? "" : objeto.fondo}
              {...register("fondo", {
                required: " Ingresa el enlace del fondo de pantalla.",
                minLength: {
                  value: 2,
                  message: "El mínimo requerido de caracteres es 2."
                }
              })}
            />
            {errors.fondo && <p className="error-icon">{errors.fondo.message}</p>}
          </div>
          <div className="has-validation mb-4">
            <select 
              className="selector-panel" 
              id="genero" 
              defaultValue={agregar? "" : objeto.genero} 
              {...register("genero")}>
              {
                GenresData.map(genero => <option value={genero.name} key={genero.id}>{genero.nombre}</option>)
              }
            </select>
          </div>
          <div className="has-validation mb-4">
            <input 
              type="url" 
              name="trailer" 
              className="form-control entrada-login" 
              id="trailer" 
              placeholder="Enlace del trailer" 
              defaultValue={agregar? "" : objeto.trailer}
              {...register("trailer", {
                required: " Ingresa el enlace del trailer.",
                minLength: {
                  value: 2,
                  message: "El mínimo requerido de caracteres es 2."
                }
              })}
            />
            {errors.trailer && <p className="error-icon">{errors.trailer.message}</p>}
          </div>
          <div className="d-grid gap-2 col-6 col-xs-6 6 mx-auto mb-3">
            { agregar? (
              <button type="submit" className="btn boton-login" >Guardar</button>
              ) : (
                <div className="d-grid gap-2 col-12">
                  <button type="submit" className="btn boton-login" >Actualizar</button>
                </div>
              ) 
            }
          </div>
        </form>
        <div className="d-grid gap-2 col-6 col-xs-6 6 mx-auto">
          <button
            onClick={() => deleteData()}
            className="btn boton-login mx-1"
          >
            Eliminar
          </button>
        </div>
      </div>
      </div>  
    </div>

  );
}

export default MovieDashboard;