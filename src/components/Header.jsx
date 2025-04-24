import React from "react";
import "../CSS/Header.css";

const Header = ({ datos, color, setColor }) => {
  const handleClick = () => {
    setColor(!color);
  };

  return (
    <div className="header">
      <h1>
        Porfolio {datos.apellido} {datos.nombre}
      </h1>
      <button
        className="cambio"
        style={{ background: color === true ? "black" : "white", color: color===true?"white":"black" }}
        type="button"
        onClick={handleClick}
      >
        {color === true ? "Normal" : "Nocturno"}
      </button>
    </div>
  );
};

export default Header;
