import "../PlanMarketing/PlanMarketing.css";
import ben10 from "../../assets/images/ben10.png";
import looney from "../../assets/images/looney_toons-img.webp";

const PlanMarketing = () => {
  return (
    <div className="contenedorPlan">
      <div className="fila1">
        <div>
          <p>
            Personaliza tu experiencia creando hasta 5 perfiles distintos por
            cuenta
          </p>
        </div>
        <div>
          <p>
            Descarga tus historias preferidas para disfrutar offline donde
            quieras
          </p>
        </div>
        <div>
          <p>
            Crea perfiles para los pequeños con contenido de acuerdo a su edad
          </p>
        </div>
        <div>
          <p>Agrega tus títulos favoritos para verlos cuando quieras</p>
        </div>
      </div>
      <div className="fila2">
        <img src={ben10} alt="ben-10" className="img" />
        <h4>Grandes opciones de entretenimiento para toda la familia</h4>
        <img src={looney} alt="looney-toons" className="img" />
      </div>
    </div>
  );
};

export default PlanMarketing;
