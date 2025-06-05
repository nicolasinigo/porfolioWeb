import React from "react";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Proyects from "./Proyects";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Main = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AboutMe/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/proyects" element={<Proyects/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
};

export default Main;
