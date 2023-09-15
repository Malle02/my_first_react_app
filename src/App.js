import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Bts_sio from "./pages/Bts_sio";
import Contact from "./pages/Contact";



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route
          path="/"
          element={<Home to="/" replace />}
        />
        <Route path="/" element={<Home />} />
        <Route path="/bts_sio" element={<Bts_sio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
