import LoginPanel from "../../components/LoginPanel/LoginPanel";
import LogoPanel from "../../components/Logo/Logo";
import LogoCmPanel from "../../components/LogoCm/LogoCm";
import Footer from "../../components/Footer/Footer";

const Login = () => {
  return ( 
    <div>
      <main>
        <section>
          <div className="d-flex flex-column min-vh-100">
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
          </div>
        </section>
      </main>
      <footer className="mt-auto">
        <Footer />
      </footer> 
    </div>
  );
}

export default Login;