import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import UpdateProfileforUser from "./pages/UpdateProfileforUser";
import UpdateProfileforTechLead from "./pages/UpdateProfileforTechLead";
import LeadersDirectory from "./pages/LeadersDirectory";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

export default function App(){
  return (
    <>
  <BrowserRouter>
  <Routes>
    <Route path="/home" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/update" element={<UpdateProfileforUser />} />
    <Route path="/directory" element={<LeadersDirectory />} />
    <Route path="/updateTech" element={<UpdateProfileforTechLead />} />
  </Routes>
  </BrowserRouter>
  </>
  );
}