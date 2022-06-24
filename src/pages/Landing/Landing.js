import DispositivosAdaptables from "../../components/DispositivosAdaptables/DispositivosAdaptables";
import Hero from "../../components/Hero/Hero";
import MenuNavegacion from "../../components/MenuNavegacion/MenuNavegacion";
import PlanMarketing from "../../components/PlanMarketing/PlanMarketing";

const Landing = () => {
  return ( 
    <div>
      <header>
        <MenuNavegacion />
        <Hero />
      </header>
      <main>
        <section>
          <PlanMarketing />
        </section>
        <section>
          <DispositivosAdaptables />
        </section>  
      </main>
    </div>
  );
}

export default Landing;