import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import UpdateProfileforUser from "./pages/UpdateProfileforUser";
import LeadersDirectory from "./pages/LeadersDirectory";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

export default function App(){
  return (
    <>
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<Home />} />
    <Route path="/home" element={<Home />} />
    <Route path="/update" element={<UpdateProfileforUser />} />
    <Route path="/directory" element={<LeadersDirectory />} />
  </Routes>
  </BrowserRouter>
  </>
  );
}