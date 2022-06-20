import { useForm } from 'react-hook-form';

const RegisterPanel = () => {
  const urlBackend = process.env.REACT_APP_URL; 
  const { register, handleSubmit, formState: { errors }, getValues } = useForm();
  const onSubmit = async(data) => {
    const resp = await fetch(`${urlBackend}/users/register`, {
      method:'POST',
      body: JSON.stringify(data),
      headers:{
        "Content-Type": "application/json"
      }
    })
    const json = await resp.json()
    alert(json.mensaje);
    if(resp.ok){
      window.location.href="/login"
    }
  }

  return ( 
    <div className="col p-5 caja-login ">
      <h2 className="fw-bold text-center pt-2 mb-4 ">Reg&iacute;strate</h2>
      <form className="row" onSubmit={handleSubmit(onSubmit)}>
        <div className="has-validation mb-4">
          <input 
            type="email" 
            name="email" 
            className="form-control entrada-login" 
            id="email" 
            placeholder="Correo"
            {...register("email", { 
              required: "Debe ingresar un correo.",
              pattern:  {
                value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: "Ingresa un correo válido."
              }
            })} 
          />
          {errors.email && <p className="error-icon">{errors.email.message}</p>}
        </div>
        <div className="has-validation mb-4">
          <input 
            type="text" 
            name="nombre" 
            className="form-control entrada-login" 
            id="nombre" 
            placeholder="Nombre completo" 
            {...register("nombre", {
              required: " Ingresa tu nombre completo.",
              minLength: {
                value: 2,
                message: "El mínimo requerido de caracteres es 2."
              }
            })}
          />
          {errors.nombre && <p className="error-icon">{errors.nombre.message}</p>}
        </div>
        <div className="has-validation mb-4"> 
          <input 
            type="text" 
            name="usuario" 
            className="form-control entrada-login" 
            id="usuario" 
            placeholder="Nombre de usuario" 
            {...register("usuario", {
              required: "Debe ingresar el usuario.",
              minLength: {
                value: 2,
                message: "El mínimo requerido de caracteres es 2."
              },
              maxLength: {
                value: 10,
                message: "El máximo permitido es de 10 caracteres."
              }
            })} 
          />
          {errors.usuario && <p className="error-icon">{errors.usuario.message}</p>}
        </div>
        <div className="has-validation mb-4">
          <input 
            type="password" 
            name="pass" 
            className="form-control entrada-login" 
            id="pass" 
            placeholder="Contrase&ntilde;a"
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
        </div>
        <div className="has-validation mb-4">
          <input 
            type="password" 
            name="controlPass" 
            className="form-control entrada-login" 
            id="controlPass" 
            placeholder="Repetir contrase&ntilde;a"
            {...register("controlPassword", { 
              required: "Debe ingresar una contraseña.",
              pattern: {
                value: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
                message: "Ingresa una contraseña válida."
              },
              validate: (value) => {
                const { password } = getValues();
                return password === value || "Las contraseñas ingresadas no coinciden.";
              }
              })
            } 
          />
          {errors.controlPassword && <p className="error-icon">{errors.controlPassword.message}</p>}
        </div>
        <div className="col-12 mb-4">
          <div className="form-check">
            <input className="form-check-input check-login" type="checkbox" value="" id="invalidCheck" required />
            <label className="form-check-label" htmlFor="invalidCheck">
              <span className="mensaje-login">Acepto los</span> <a href="/terms" target="_blank" className="link-login">T&eacute;rminos y condiciones</a>
            </label>
          </div>
        </div>
        <div className="d-grid gap-2 col-9 col-xs-6 6 mx-auto">
          <button type="submit" className="btn boton-login" >Suscr&iacute;bete</button>
        </div>
        <div className="my-3">
          <span>Si ya tienes cuenta puedes ingresar desde <a href="/login" className="link-login">aqu&iacute;</a></span>
        </div>
      </form>
    </div>
  );
}

export default RegisterPanel;