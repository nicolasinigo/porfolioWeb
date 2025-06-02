import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <div className="row container">
      <h1 className="col">Web Developer</h1>
      <Navbar>
        <Container>
          <Navbar.Brand href="#home">Welcome</Navbar.Brand>
          <Nav>
            <Nav.Link href="#home">About Me</Nav.Link>
            <Nav.Link href="#features">Contact</Nav.Link>
            <Nav.Link href="#pricing">Proyects</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
