import "./header.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { useEffect } from "react";

const Header = () => {

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center">
        <h1>Web Developer</h1>
        <Button variant="outline-dark">
          boton
        </Button>
      </div>
      <Navbar
        className="navbar-bordered d-flex justify-content-between align-items-center"
      >
        <Navbar.Brand href="/">Welcome</Navbar.Brand>
        <Nav>
          <Nav.Link href="/aboutMe">About Me</Nav.Link>
          <Nav.Link href="/contact">Contact Me</Nav.Link>
          <Nav.Link href="/proyects">Proyects</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Header;
