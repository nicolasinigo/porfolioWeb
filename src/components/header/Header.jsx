import "./header.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

const Header = ({ color, setColor }) => {
  const handleColor = () => {
    setColor(!color);
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center">
        <h1 className={color ? "text-dark-mode" : "text-light-mode"}>Web Developer</h1>
        <Button onClick={handleColor} variant="outline-dark">
          {color ? "Normal" : "Nocturno"}
        </Button>
      </div>
      <Navbar
        className="navbar-bordered d-flex justify-content-between align-items-center"
      >
        <Navbar.Brand className={color ? "text-dark-mode" : "text-light-mode"} href="/">Welcome</Navbar.Brand>
        <Nav  className={color ? "text-dark-mode" : "text-light-mode"}>
          <Nav.Link className={color ? "text-dark-mode" : "text-light-mode"} href="/aboutMe">About Me</Nav.Link>
          <Nav.Link className={color ? "text-dark-mode" : "text-light-mode"} href="/contact">Contact</Nav.Link>
          <Nav.Link className={color ? "text-dark-mode" : "text-light-mode"} href="/proyects">Proyects</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Header;
