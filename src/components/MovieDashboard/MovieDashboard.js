import { useForm } from 'react-hook-form';

const MovieDashboard = (props) => {
  const urlBackend = process.env.REACT_APP_URL; 
  const {agregar, editar, objeto} = props;
  const cambiaEstadoEditar = props.cambiaEstadoEditar;
  const cambiaEstadoAgregar = props.cambiaEstadoAgregar;
  const titulo=agregar? ("Agregar Pelicula") : (editar? "Editar Pelicula": "E  R  R  O  R");
  const { register, handleSubmit, formState: { errors } } = useForm();

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
          cambiaEstadoAgregar(false);
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
            cambiaEstadoEditar(false);
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
      // const uid= objeto._id;
      // const resp = await fetch(`${urlBackend}/movies/delete/${uid}`)
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
        cambiaEstadoEditar(false);
      }
    } catch (err) {
      alert(err);
    }
  }

  return ( 
    <>
      <div className="col p-5 caja-login ">
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
              <option value="accion">Acci&oacute;n</option>
              <option value="aventura">Aventura</option>
              <option value="ciencia-ficcion">Ciencia Ficci&oacute;n</option>
              <option value="comedia">Comedia</option>
              <option value="documental">Documental</option>
              <option value="drama">Drama</option>
              <option value="fantasia">Fantas&iacute;a</option>
              <option value="musical">Musical</option>
              <option value="suspenso">Suspenso</option>
              <option value="terror">Terror</option>
              <option value="otro">other</option>
            </select>
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
    </>
  );
}

export default MovieDashboard;