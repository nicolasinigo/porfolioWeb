import "./header.css"
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

const Header = ({color, setColor }) => {

  const handleColor=()=>{
    setColor(!color);
  }

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center">
        <h1>Web Developer</h1>
        <Button onClick={handleColor} variant="outline-dark">{color === true ? "Normal" : "Nocturno"}</Button>
      </div>
      <Navbar className=" navbar-bordered d-flex justify-content-between align-items-center" style={{border:color===true ?"rgb(27, 27, 23)":"white",color:color===false ?"rgb(27, 27, 23)":"white"}}>
          <Navbar.Brand href="/">Welcome</Navbar.Brand>
          <Nav>
            <Nav.Link href="/aboutMe">About Me</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/proyects">Proyects</Nav.Link>
          </Nav>
      </Navbar>
    </div>
  );
};

export default Header;
