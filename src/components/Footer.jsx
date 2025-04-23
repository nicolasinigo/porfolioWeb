import React from "react";
import "../CSS/Footer.css";

const Footer = ({ datos }) => {
  return (
    <div className="footer">
      <h3>Contacto:</h3>
      <div className="footerData">
        <h5>Gmail</h5>
        <h5>GitHub</h5>
        <h5>Linkedin</h5>
        <h5>Instagram</h5>
        <h5>Facebook</h5>
      </div>
    </div>
  );
};

export default Footer;
