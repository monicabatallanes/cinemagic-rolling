import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";

const Landing = () => {
  return ( 
    <div>
       <Navbar />
       <div>
         <Hero /> 
       </div>
    </div>
  );
}

export default Landing;