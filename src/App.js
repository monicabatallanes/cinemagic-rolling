import { Route, Routes } from "react-router-dom";
import Detail from "./pages/Detail/Detail";
import Home from "./pages/Home/Home";
import Landing from "./pages/Landing/Landing";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Terms from "./pages/Terms/Terms";
import Error from "./pages/Error/Error";
import Admin from "./pages/Admin/Admin";
import MoviesByGenre from "./pages/MoviesByGenre/MoviesByGenre";
import { useState, useEffect } from "react";

const App = () => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const userJson = localStorage.getItem('cinemagicUser');
    if(userJson !== null){
      const userObj = JSON.parse(userJson); 
      setToken(userObj.token);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/terms' element={<Terms />} />
        <Route path='/home' element={ token? <Home  /> : <Login /> } />
        <Route path='/movies-by-genre:handle' element={ token?<MoviesByGenre /> : <Login /> } />
        <Route path='/detail' element={token? <Detail /> : <Login /> } />
        <Route path='/*' element={<Error />} />
        <Route path='/admin' element={token? <Admin /> : <Login /> } />
      </Routes>
    </>
  );
}

export default App;
