
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import { useContextOscuro } from "../../../context/contextModoOscuro";

const Study = () => {

    const {context, setContext}=useContextOscuro()
    const textColor = context === "dark" ? "#ffffff" : "#000000";
    const bgColor = context === "dark" ? "#000000" : "#ffffff";

  return (
    <Container  data-bs-theme={context}>
      <h4>Trabajos</h4>
      <Card className={`bg-info py-4`} >
        <Card.Header style={{ color: textColor , backgroundColor: bgColor}}>Ministerio de Producción:</Card.Header>
        <Card.Header style={{ color: textColor , backgroundColor: bgColor}}>Data Administrator</Card.Header>
        <Card.Body style={{ color: textColor , backgroundColor: bgColor}}>
          <blockquote className="blockquote mb-0">
            <p>
              Gestión y optimización de sistemas de información en Google Sheets
              y Drive. Implementación de funciones avanzadas para el control de
              datos: buscadores dinámicos, contadores automáticos, filtros
              inteligentes y alertas visuales por vencimiento. Estandarización
              de la documentación y estructura de archivos para mejorar el
              acceso, trazabilidad y mantenimiento de la información.
            </p>
            <footer className="blockquote-footer">
              Actualmente
            </footer>
          </blockquote>
        </Card.Body>
      </Card>
      <hr />
      <h4>Estudios</h4>
      <Card>
      <Card.Header className="text-bg-success" style={{ color: textColor , backgroundColor: bgColor}}> Universidad tecnológica nacional, Tucuman, Argentina</Card.Header>
      <Card.Body style={{ color: textColor , backgroundColor: bgColor}}>
        <blockquote className="blockquote mb-0">
          <p>
               Tecnicatura Universitaria en Programación                           
          </p>
          <footer className="blockquote-footer">
            Cursando Último Año
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
    <Card>
      <Card.Header className="text-bg-success" style={{ color: textColor , backgroundColor: bgColor}}>Universidad tecnológica nacional, Tucuman, Argentina</Card.Header>
      <Card.Body style={{ color: textColor , backgroundColor: bgColor}}>
        <blockquote className="blockquote mb-0">
          <p>
            Fullstack Developer
          </p>
          <footer className="blockquote-footer">
            2022-2023
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
    <Card>
      <Card.Header className="text-bg-success" style={{ color: textColor , backgroundColor: bgColor}}>Universidad tecnológica nacional, Tucuman, Argentina</Card.Header>
      <Card.Body style={{ color: textColor , backgroundColor: bgColor}}>
        <blockquote className="blockquote mb-0">
          <p>
            Ingeniería en Sistemas -  segundo año 
          </p>
          <footer className="blockquote-footer">
            pendiente
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
    <Card>
      <Card.Header className="text-bg-success" style={{ color: textColor , backgroundColor: bgColor}}>Aticana, Tucuman, Argentina</Card.Header>
      <Card.Body style={{ color: textColor , backgroundColor: bgColor}}>
        <blockquote className="blockquote mb-0">
          <p>
            English B2    
          </p>
          <footer className="blockquote-footer">
            2018-2019 
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
    </Container>
  );
};

export default Study;
