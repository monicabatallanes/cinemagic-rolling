import Carrusel from "../../components/Carrusel/Carrusel";
import DispositivosAdaptables from "../../components/DispositivosAdaptables/DispositivosAdaptables";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import MenuNavegacion from "../../components/MenuNavegacion/MenuNavegacion";
import PlanMarketing from "../../components/PlanMarketing/PlanMarketing";
import Slider from "../../components/Slider/Slider";



const Landing = () => {
  return (
    <div>
      <header>
        <MenuNavegacion />
        <Hero />
      </header>
      <main>
        <section>
          <Carrusel />
          <PlanMarketing />
        </section>
        <section>
          <h3 className="text-center">Estrenos que se convertirán en nuevos favoritos.</h3>
          <Slider
            video={"https://youtu.be/0kna4HKOi5E"}
            titulo={"El Padre De La Novia"}
            descripcion={
              "Disfruta del amor, la comida, la música y las risas de esta historia de una familia de fuertes que es capaz de adaptarse a lo imposible por amor."
            }
          />
          <Slider
            video={"https://youtu.be/-wHuLZ9ssg0"}
            titulo={"Animales Fantásticos los Secretos de Dumbledore"}
            descripcion={
              "Dumbledore sabe que el poderoso mago oscuro Gellert Grindelwald se está moviendo para tomar el control del mundo mágico, ¿lo logrará?"
            }
          />
        </section>
        <section>
          <DispositivosAdaptables />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Landing;