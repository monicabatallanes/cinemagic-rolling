import RegisterPanel from "../../components/RegisterPanel/RegisterPanel";
import LogoPanel from "../../components/Logo/Logo";
import LogoCmPanel from "../../components/LogoCm/LogoCm";

const Register = () => {
  return ( 
    <>
    <div className="container w-75 mt-5 border-0">
      <div className="row align-items-stretch">
        <div className=" logo-login col-lg-5 col-xl-6 border-0 d-none d-lg-block ">
          <LogoCmPanel />
        </div>
        <div className=" logo-login col-lg-5 col-xl-6 border-0 d-block d-lg-none">
          <LogoPanel />
        </div>
        <RegisterPanel />
      </div>
    </div>
  </>
  );
}

export default Register;