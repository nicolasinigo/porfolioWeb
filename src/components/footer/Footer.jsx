import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <Container>
      {/* tu formulario aquí */}
      <div style={{ marginTop: "30px" }}>
        <h3>Redes Sociales</h3>
        <div style={{ fontSize: "2rem", display: "flex", gap: "15px" }}>
          <a
            href="https://www.linkedin.com/in/nicol%C3%A1s-alejandro-i%C3%B1igo-1a5b91239/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin color="#0A66C2" />
          </a>
          <a
            href="https://github.com/nicolasinigo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub color="#1DA1F2" />
          </a>
          <a
            href="https://www.instagram.com/nicoo_inigo/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram color="#E1306C" />
          </a>
          <a
            href="https://wa.me/543814142367"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp size={30} color="#25D366" />
          </a>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
