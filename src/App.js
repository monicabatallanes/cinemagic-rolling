import { Route, Routes } from "react-router-dom";
import Detail from "./pages/Detail/Detail";
import Home from "./Pages/Home/Home";
import Landing from "./Pages/Landing/Landing";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Terms from "./Pages/Terms/Terms";
import Error from "./Pages/Error/Error";
import Admin from "./Pages/Admin/Admin";

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
    </>
  );
}

export default App;
