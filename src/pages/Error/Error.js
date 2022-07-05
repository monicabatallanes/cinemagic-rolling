import React from "react";
import error404 from "../../assets/images/image-error404.jpg"
import "./error.css";

const Error = () => {
  return (
    <div className="d-flex flex-column min-vh-100">      
      <div className="container">
        <img className="img-error w-100" src={error404} alt="imagen-error-404" />
        <h6 className="text-white text-center m-2">
          La página solicitada no está disponible
        </h6>
        <div className="button d-flex justify-content-center">
          <button className="btn btn-danger m-2 p-1"><a href="/home" className="btn text-white"> Volver </a> </button>
        </div>
      </div>
    </div>

  );
};

export default Error;