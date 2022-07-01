import { Route, Routes } from "react-router-dom";
import Detail from "./pages/Detail/Detail";
import Home from "./pages/Home/Home";
import Landing from "./pages/Landing/Landing";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Terms from "./pages/Terms/Terms";
import Error from "./pages/Error/Error";
import Admin from "./pages/Admin/Admin";
import Footer from "./components/Footer/Footer";


const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/terms' element={<Terms />} />
        <Route path='/home' element={<Home />} />
        <Route path='/detail' element={<Detail />} />
        <Route path='/*' element={<Error />} />
        <Route path='/admin' element={<Admin />} />
      </Routes>
      <footer className="mt-auto">
        <Footer />
      </footer>
    </>
  );
}

export default App;
