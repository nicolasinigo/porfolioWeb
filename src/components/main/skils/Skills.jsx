import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import ListGroup from "react-bootstrap/ListGroup";
import Col from "react-bootstrap/Col";
import { useContextOscuro } from "../../../context/contextModoOscuro";

const Skills = () => {

    const { context, setContext } = useContextOscuro();
    const textColor = context === "dark" ? "#ffffff" : "#000000";
    const bgColor = context === "dark" ? "#000000" : "#ffffff";

  return (
    <div>
      <Container>
        <h4>Skills</h4>
        <Row>
          <Col>
            <ListGroup>
              <ListGroup.Item as="li" variant="warning" data-bs-theme={context}>
                Desarrollo
              </ListGroup.Item>
              <ListGroup.Item as="li" style={{ color: textColor , backgroundColor: bgColor}}>Javascript</ListGroup.Item>
              <ListGroup.Item as="li" style={{ color: textColor , backgroundColor: bgColor}}>React</ListGroup.Item>
              <ListGroup.Item as="li" style={{ color: textColor , backgroundColor: bgColor}}>HTML</ListGroup.Item>
              <ListGroup.Item as="li" style={{ color: textColor , backgroundColor: bgColor}}>CSS</ListGroup.Item>
              <ListGroup.Item as="li" style={{ color: textColor , backgroundColor: bgColor}}>Visual Studio Code</ListGroup.Item>
              <ListGroup.Item as="li" style={{ color: textColor , backgroundColor: bgColor}}>Git/GitHub</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col>
            <ListGroup>
              <ListGroup.Item as="li" variant="danger"data-bs-theme={context}>
                Analisis de Datos
              </ListGroup.Item>
              <ListGroup.Item as="li" style={{ color: textColor , backgroundColor: bgColor}}>Python (Pandas, Pyspark)</ListGroup.Item>
              <ListGroup.Item as="li" style={{ color: textColor , backgroundColor: bgColor}}>SQL</ListGroup.Item>
              <ListGroup.Item as="li" style={{ color: textColor , backgroundColor: bgColor}}>MySQL</ListGroup.Item>
              <ListGroup.Item as="li" style={{ color: textColor , backgroundColor: bgColor}}>Power Bi</ListGroup.Item>
              <ListGroup.Item as="li" style={{ color: textColor , backgroundColor: bgColor}}>Jupyter</ListGroup.Item>
              <ListGroup.Item as="li" style={{ color: textColor , backgroundColor: bgColor}}>AWS</ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <ListGroup>
              <ListGroup.Item as="li" variant="success" data-bs-theme={context}>
                Habilidades Blandas
              </ListGroup.Item>
              <ListGroup.Item as="li" style={{ color: textColor , backgroundColor: bgColor}}>Trabajo en equipo</ListGroup.Item>
              <ListGroup.Item as="li" style={{ color: textColor , backgroundColor: bgColor}}>Comunicacion efectiva</ListGroup.Item>
              <ListGroup.Item as="li" style={{ color: textColor , backgroundColor: bgColor}}>habilidad para resolver problemas</ListGroup.Item>
              <ListGroup.Item as="li" style={{ color: textColor , backgroundColor: bgColor}}>Adaptabilidad</ListGroup.Item>
              <ListGroup.Item as="li" style={{ color: textColor , backgroundColor: bgColor}}>Creatividad</ListGroup.Item>
              <ListGroup.Item as="li" style={{ color: textColor , backgroundColor: bgColor}}>Apredizaje continuo</ListGroup.Item>
              <ListGroup.Item as="li" style={{ color: textColor , backgroundColor: bgColor}}>Pensamiento critico</ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Skills;
