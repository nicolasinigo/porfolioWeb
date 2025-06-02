import React from "react";
import datos from "../../datos";
import Card from "react-bootstrap/Card";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const AboutMe = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Card style={{ width: "35rem", height: "20rem" }}>
              <Card.Body>
                <Card.Title>
                  {datos.nombre} {datos.apellido}
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {datos.titulo}
                </Card.Subtitle>
                <Card.Text>
                  Desarrollador, analista de datos, estudiante universitario y
                  autodidacta.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col bg="primary">
          <h1>FOTO</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutMe;
