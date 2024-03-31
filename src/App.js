import React from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
import {  Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Btssio from "./pages/Bts_sio";
import Contact from "./pages/Contact";
import VeillesTecno from "./pages/VeilleTechnologique";




const App = () => {
  return (
    
    // <BrowserRouter>
    <div className="APP home-container">
  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bts_sio" element={<Btssio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/veilstecno" element={<VeillesTecno />} />
       
      </Routes>

    
      </div>
    // </BrowserRouter>
  );
};

export default App;
