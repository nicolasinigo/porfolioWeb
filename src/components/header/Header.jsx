import "./header.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { useContextOscuro } from "../../context/contextModoOscuro";

const Header = () => {
  const { context, setContext } = useContextOscuro();

  const handleThema = () => {
    const newThema = context === "light" ? "dark" : "light";

    setContext(newThema);
  };

  const opposite = context === "light" ? "dark" : "light";

  return (
    <div>
      <div className="container border-bottom border-body" data-bs-theme={context}>
        <div className="d-flex justify-content-between align-items-center">
          <h1>Web Developer</h1>
          <Button onClick={handleThema} variant={`outline-${opposite}`}>
            Cambiar a {context === "light" ? "oscuro" : "claro"}
          </Button>
        </div>
        <Navbar className="navbar-bordered d-flex justify-content-between align-items-center">
          <Navbar.Brand href="/">Welcome</Navbar.Brand>
          <Nav>
            <Nav.Link href="/">About Me</Nav.Link>
            <Nav.Link href="/skills">Skills</Nav.Link>
            <Nav.Link href="/contact">Contact Me</Nav.Link>
            <Nav.Link href="/proyects">Proyects</Nav.Link>
          </Nav>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
