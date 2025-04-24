import React from "react";
import { useState } from "react";
import "../CSS/Main.css";

const Main = ({ datos }) => {
  const [numero, setNumero] = useState(150);

  const handleClick = () => {
    if(numero<300){
      setNumero(numero + 10);
    }
  };

  const handleClick2 =()=>{
    if(numero>150)
    setNumero(numero - 10)
  }

  return (
    <div className="main">
      <div className="carta">
        <img className="foto" style={{width: numero}} src="src\assets\yo.png" alt="foto" />
        <br />
        <div className="contador">
          <button type="button" onClick={handleClick}>
            Aumentar
          </button>
          <h5>{numero}</h5>
          <button type="button" onClick={handleClick2}>
            Restar
          </button>
        </div>
        <div className="mainDatos">
          <h3>
            {datos.nombre} {datos.apellido}
          </h3>
          <ul>
            <li>Edad: {datos.edad}</li>
            <li>Legajo: {datos.legajo}</li>
            <li>Carrera: {datos.carrera}</li>
          </ul>
        </div>
      </div>
      <br />
      <div>
        <h4>Tecnologias:</h4>
        <div className="listas">
          <ul>
            <li>{datos.desarrollo[0]}</li>
            <li>{datos.desarrollo[1]}</li>
            <li>{datos.lenguajes[0]}</li>
            <li>{datos.desarrolloWeb[1]}</li>
            <li>{datos.lenguajes[1]}</li>
            <li>{datos.biblioteca}</li>
          </ul>
          <ul>
            <li>{datos.baseDatos}</li>
            <li>{datos.entornos[0]}</li>
            <li>{datos.entornos[1]}</li>
            <li>{datos.controlVersiones[0]}</li>
            <li>{datos.controlVersiones[1]}</li>
          </ul>
        </div>
      </div>
      <div>
        <h4>Resumen:</h4>
        <p>
          Hola mi nombre es {datos.nombre} {datos.apellido}, tengo {datos.edad}{" "}
          años, soy estudiante de la {datos.carrera} en la UTN-FRT. Actualmente
          estoy estudiando programación y he adquirido conocimientos en diversos
          lenguajes y herramientas del entorno de desarrollo. Manejo{" "}
          {datos.lenguajes[0]}, {datos.lenguajes[1]}, {datos.desarrollo[0]},{" "}
          {datos.desarrollo[1]} y bibliotecas como {datos.biblioteca}. También
          trabajo con entornos como {datos.entornos[0]} y {datos.entornos[1]}, y
          tengo experiencia en bases de datos utilizando {datos.baseDatos}. En
          el desarrollo web, utilizo {datos.desarrolloWeb[0]} y{" "}
          {datos.desarrolloWeb[1]} para crear interfaces dinámicas y
          responsivas. Además, gestiono el control de versiones con{" "}
          {datos.controlVersiones[0]} y {datos.controlVersiones[1]}, lo que me
          permite trabajar de manera organizada y colaborativa en proyectos de
          desarrollo.
        </p>
      </div>
    </div>
  );
};

export default Main;
