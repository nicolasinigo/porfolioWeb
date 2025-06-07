import React from "react";
import AboutMe from "./about/AboutMe";
import Contact from "./contact/Contact";
import Proyects from "./proyects/Proyects";
import Skills from "./skils/Skills";
import Study from "./studyExperience/Study";
import {Routes, Route } from "react-router-dom";

const Main = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<AboutMe/>}/>
        <Route path="/study" element={<Study/>}/>
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/proyects" element={<Proyects/>}/>
      </Routes>
    </>
  );
};

export default Main;
