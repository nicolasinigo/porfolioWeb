import React from "react";
import datos from "../../../datos";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import foto from "../../../imagenes/fotoMia.jpg";
import ListGroup from "react-bootstrap/ListGroup";
import { useContextOscuro } from "../../../context/contextModoOscuro";

const AboutMe = () => {
  const { context, setContext } = useContextOscuro();
  const textColor = context === "dark" ? "#ffffff" : "#000000";
  const bgColor = context === "dark" ? "#000000" : "#ffffff";

  return (
    <div className={context}>
      <Container>
        <Row className="align-items-stretch">
          <Col md={6}>
            <Card className="h-100">
              <Card.Body
                style={{
                  color: textColor,
                  backgroundColor: bgColor,
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                  border: "3px solid rgb(212, 227, 6)",
                }}
              >
                <Card.Title>
                  {datos.nombre} {datos.apellido}
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted" data-bs-theme={context}>
                  {datos.titulo}
                </Card.Subtitle>
                <Card.Text>
                  Comencé en el desarrollo web hace 3 años de forma autodidacta,
                  practicando con diseños de páginas y desarrollando habilidades
                  como la autogestión y el aprendizaje continuo. Luego, completé
                  un curso de Desarrollador Fullstack en la UTNFRT, donde
                  fortalecí el trabajo en equipo, liderazgo y adaptación a
                  distintos roles. Actualmente estudio programación en la misma
                  universidad. Me motiva seguir aprendiendo y me destaco por mi
                  compromiso, responsabilidad, pensamiento creativo y capacidad
                  para resolver problemas.
                </Card.Text>
                <Card.Subtitle className="mb-2 text-muted" data-bs-theme={context}>
                  Hoobis:
                </Card.Subtitle>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item style={{ color: textColor , backgroundColor: bgColor}}>{datos.hobbis.boxeo}</ListGroup.Item>
                  <ListGroup.Item style={{ color: textColor , backgroundColor: bgColor}}>{datos.hobbis.gym}</ListGroup.Item>
                  <ListGroup.Item style={{ color: textColor , backgroundColor: bgColor}}>{datos.hobbis.trekking}</ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <div className="h-100">
              <Image
                src={foto}
                style={{
                  borderRadius: "5px",
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutMe;
