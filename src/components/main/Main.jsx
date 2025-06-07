import React from "react";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Proyects from "./Proyects";
import Skills from "../skils/Skills";
import {Routes, Route } from "react-router-dom";

const Main = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<AboutMe/>}/>
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/proyects" element={<Proyects/>}/>
      </Routes>
    </>
  );
};

export default Main;
