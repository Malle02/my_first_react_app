import React from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
import {  Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Bts_sio from "./pages/Bts_sio";
import Contact from "./pages/Contact";
import Navigation from "./componants/Navigation";



const App = () => {
  return (
    
    // <BrowserRouter>
    <div className="APP">
    <Navigation/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bts_sio" element={<Bts_sio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </div>
    // </BrowserRouter>
  );
};

export default App;
