import React from "react";
import datos from "../../datos";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import foto from "../../../public/fotoMia.jpg";
import ListGroup from 'react-bootstrap/ListGroup';

const AboutMe = () => {
  return (
    <div>
      <Container>
        <Row className="align-items-stretch" style={{ height: "600px" }}>
          <Col md={6} className="d-flex">
            <Card className="w-100">
              <Card.Body>
                <Card.Title>
                  {datos.nombre} {datos.apellido}
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
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
                <Card.Subtitle className="mb-2 text-muted">
                  Hoobis:
                </Card.Subtitle>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>{datos.hobbis.boxeo}</ListGroup.Item>
                  <ListGroup.Item>{datos.hobbis.gym}</ListGroup.Item>
                  <ListGroup.Item>{datos.hobbis.trekking}</ListGroup.Item>
                </ListGroup>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
          <div className="h-100">
            <Image src={foto} style={{ height: "100%", width: "100%", objectFit: "cover" }}/>
          </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutMe;
