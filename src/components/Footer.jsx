import React from "react";
import { useState } from "react";
import "../CSS/Footer.css";

const Footer = ({ datos }) => {
  let initialValue = {
    nombre: "",
    comentario: "",
  };

  const [user, setUser] = useState(initialValue);
  const [usuarios, setUsuarios] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser({ ...user, [name]: value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    if (!user.nombre.trim() || !user.comentario.trim()) {
      alert("Por favor, completá ambos campos.");
      return;
    }

    setUsuarios([ ...usuarios, user ]);
    setUser(initialValue);
  };

  return (
    <div className="footer">
      <h3>Contacto:</h3>
      <div className="footerData">
        <a className="enlace" href="mailto:ninigo93@gmail.com" target="_blank" rel="noopener noreferrer">
          Gmail
        </a>
        <a className="enlace" href="https://github.com/nicolasinigo" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a className="enlace" href="https://www.linkedin.com/in/nicol%C3%A1s-alejandro-i%C3%B1igo-1a5b91239" target="_blank" rel="noopener noreferrer">
          Linkedin
        </a>
        <a className="enlace" href="https://www.instagram.com/nicoo_inigo" target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
      </div>
      <br />
      <h3>Comentario:</h3>
      <form className="formulario" onSubmit={handleSubmit}>
        <label htmlFor="nombre">nombre:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          placeholder="nombre"
          value={user.nombre}
          onChange={handleChange}
        />
        <br />
        <textarea
          id="nombre"
          name="comentario"
          placeholder="deja tu comentario"
          value={user.comentario}
          onChange={handleChange}
        ></textarea>
        <br />
        <input type="submit" value="enviar" />
      </form>
      <ul>
        {usuarios.map((item, index) => (
          <li key={index}>
            <h5>{item.nombre}:</h5>
            <p>{item.comentario}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
