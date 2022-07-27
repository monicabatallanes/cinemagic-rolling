import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const LoginPanel = () => {
  const urlBackend = process.env.REACT_APP_URL; 
  const admUser = process.env.REACT_APP_ADM_USER; 
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = async(data) => {
    const resp = await fetch(`${urlBackend}/users/login`, {
      method:'POST',
      body: JSON.stringify(data),
      headers:{
        "Content-Type": "application/json"
      }
    })
    const json = await resp.json()
    Swal.fire({
      title: 'CineMagic',
      text: json.mensaje,
      icon: "success",
      showConfirmButton: false,
      timer: 2000
    }).then(function() {
      if(json.token){
        const userObj = {
          user: json.nombreUsuario,
          token: json.token
        }
        const userJson = JSON.stringify(userObj);
        localStorage.setItem('cinemagicUser', userJson);
        if(userObj.user === admUser){
          window.location.href="/admin";
        } else {
          window.location.href="/home";
        }
      }
    })
  }

  return ( 
    <div className="col p-5 caja-login ">
      <h2 className="fw-bold text-center pt-2 mb-4 ">Inicio de sesi&oacute;n</h2>
      <form className="row" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-1">
          <label htmlFor="email" className="form-label">Correo</label><br />
          <input 
            type="email" 
            name="email" 
            className="form-control entrada-login" 
            id="email" 
            {...register("email", { 
              required: "Debe ingresar un correo.",
              pattern:  {
                value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: "Ingresa un correo válido."
              }
              })
            } 
          />
          {errors.email && <p className="error-icon">{errors.email.message}</p>}
          <br />
        </div>
        <div className="mb-2">
          <label htmlFor="password" className="form-label">Contrase&ntilde;a</label><br />
          <input 
            type="password" 
            name="pass" 
            className="form-control entrada-login" 
            id="pass" 
            {...register("password", { 
              required: "Debe ingresar una contraseña.",
              pattern: {
                value: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
                message: "Ingresa una contraseña válida."
              } 
              })
            } 
          />
          {errors.password && <p className="error-icon">{errors.password.message}</p>}
          <br />
        </div>
        <div className="d-grid gap-2 col-9 col-xs-6 6 mx-auto">
          <button type="submit" className="btn boton-login" >Ingresa</button>
        </div>
        <div className="my-3">
          <span>No estas registrado? <a href="/register" className="link-login">Suscr&iacute;bete aqu&iacute;</a></span>
        </div>
      </form>
    </div>
  );
}

export default LoginPanel;