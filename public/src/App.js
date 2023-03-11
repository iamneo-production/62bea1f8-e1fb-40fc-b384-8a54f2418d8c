import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
<<<<<<< HEAD
import Profile from "./pages/Profile";
=======
import UpdateProfileforUser from "./pages/UpdateProfileforUser";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
>>>>>>> 40ff0ddbcb90a3bbae98a93d3c09d60de2296e42

export default function App(){
  return (
    <>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/update" element={<UpdateProfileforUser />} />
    <Route path="/profile" element={<Profile />} />
  </Routes>
  </BrowserRouter>
  </>
  );
}