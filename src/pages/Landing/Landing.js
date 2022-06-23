import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";
import PlanMarketing from "../../components/PlanMarketing/PlanMarketing";

const Landing = () => {
  return ( 
    <div>
       <Navbar />
       <div>
         <Hero />
         <PlanMarketing /> 
       </div>
    </div>
  );
}

export default Landing;