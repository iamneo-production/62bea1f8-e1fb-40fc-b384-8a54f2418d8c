import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import UpdateProfileforUser from "./pages/UpdateProfileforUser";

export default function App(){
  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/update" element={<UpdateProfileforUser />} />
  </Routes>
  </BrowserRouter>
  
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

export default function App(){
  return (
    <>
  <BrowserRouter>
  <Routes>
    <Route path="/home" element={<Home />} />
    <Route path="/update" element={<UpdateProfileforUser />} />
  </Routes>
  </BrowserRouter>
  </>
  );
}