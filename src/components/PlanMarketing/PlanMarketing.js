import "../PlanMarketing/PlanMarketing.css";
import ben10 from "../../assets/images/ben10.png";
import looney from "../../assets/images/looney_toons-img.webp";

const PlanMarketing = () => {
  return (
    <div class="container-fluid">
      <div class="row d-flex justify-content-center my-5">
        <div class="col">
          <p>Personaliza tu experiencia creando hasta 5 perfiles distintos por
            cuenta</p>
        </div>
        <div class="col">
          <p>Descarga tus historias preferidas para disfrutar offline donde
            quieras</p>
        </div>
        <div class="col">
          <p>Crea perfiles para los pequeños con contenido de acuerdo a su edad</p>
        </div>
        <div class="col">
          <p>Agrega tus títulos favoritos para verlos cuando quieras</p>
        </div>
      </div>
      <div class="row d-flex justify-content-center mb-5">
        <div class="col-sm-6 col-md-5 col-12 col-lg-4">
          <img src={ben10} alt="ben-10" className="img" />
        </div>
        <div class="col-sm-6 col-md-2 col-12 col-lg-4">
          <h4>Grandes opciones de entretenimiento para toda la familia</h4>
        </div>
        <div class="col-sm-6 col-md-5 col-12 col-lg-4">
          <img src={looney} alt="looney-toons" className="img" />
        </div>
      </div>
{/* <div className="separador">
  <hr/>
</div> */}
    </div>    
  );
};

export default PlanMarketing;