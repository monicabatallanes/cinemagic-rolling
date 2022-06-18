import LoginPanel from "../../components/LoginPanel/LoginPanel";
import LogoPanel from "../../components/Logo/Logo";
import LogoCmPanel from "../../components/LogoCm/LogoCm";
const Login = () => {
  return ( 
    <>
      <div className="container w-75 mt-5 border-0">
        <div className="row align-items-stretch">
          <div className=" logo-login col-lg-5 col-xl-6 border-0 d-none d-lg-block mt-5">
            <LogoCmPanel />
          </div>
          <div className=" logo-login col-lg-5 col-xl-6 border-0 d-block d-lg-none mb-5 d-flex justify-content-center">
            <LogoPanel />
          </div>
          <LoginPanel />
        </div>
      </div>
    </>
  );
}

export default Login;