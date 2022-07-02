import "../DispositivosAdaptables/DispositivosAdaptables.css"
import computer from "../../assets/images/computer.png"
import console from "../../assets/images/console.webp"
import tablet from "../../assets/images/tablet.png"
import tv from "../../assets/images/tv.png"

const DispositivosAdaptables = () => {
  return (
    <div className="contenedor-adaptable container-fluid">
      <h3>Disponible en tus dispositivos favoritos</h3>
      <div className="contenedor-dispositivo row">
        <div className="dispositivo col-sm-6 col-md-4 col-12 col-lg-4">
          <img src={tv} alt="Smart TV" className="dispositivo-img" />
          <h4>Smart TV</h4>
          <p>Samsung</p>
          <p>LG</p>
          <p>Roku</p>
          <p>Android TV</p>
          <p>Apple TV</p>
        </div>
        <div className="dispositivo col-sm-6 col-md-4 col-12 col-lg-4">
          <img src={computer} alt="Computadora" className="dispositivo-img" />
          <h4>Computadora</h4>
          <p>Chrome OS</p>
          <p>MacOS</p>
          <p>Windows PC</p>
        </div>
        <div className="dispositivo col-sm-6 col-md-4 col-12 col-lg-4">
          <img src={console} alt="Consola" className="dispositivo-img" />
          <h4>Consola de videojuegos</h4>
          <p>PS5</p>
          <p>PS4</p>
          <p>Xbox One</p>
          <p>Xbox Series XIS</p>
        </div>
        <div className="dispositivo col-sm-6 col-md-4 col-12 col-lg-4">
          <img
            src={tablet}
            alt="Smartphone y Tablet"
            className="dispositivo-img"
          />
          <h4>Smartphone y Tablet</h4>
          <p>Android Phone y Tablet</p>
          <p>iPhone y iPad</p>
        </div>
      </div>
    </div>
  );
};

export default DispositivosAdaptables;