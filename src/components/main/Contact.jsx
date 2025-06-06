import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/Row";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_pxw6lde", "template_96jdkca", form.current, {
        publicKey: "sb7wI-U7Co_SZkLB0",
      })
      .then(
        () => {
          alert("Mensaje enviado con éxito!");
          form.current.reset(); // limpia el formulario
        },
        (error) => {
          console.error("Error al enviar:", error.text);
          alert("Hubo un error al enviar el mensaje.");
        }
      );
  };

  return (
    <Container>
      <Row>
        <Col>
          <Form ref={form} onSubmit={sendEmail}>
            <Form.Group
              style={{ padding: "5px", border: "3px solid rgb(212, 227, 6)" }}
              className="mb-3 container"
              controlId="formBasicEmail"
            >
              <Form.Label>Nombre Completo</Form.Label>
              <Form.Control
                type="text"
                placeholder="ingrese el nombre completo"
                name="from_name"
                required
              />
            </Form.Group>

            <Form.Group
              style={{ padding: "5px", border: "3px solid rgb(212, 227, 6)" }}
              className="mb-3 container"
              controlId="formBasicNombre"
            >
              <Form.Label>Gmail</Form.Label>
              <Form.Control
                type="email"
                placeholder="ingrese Gmail"
                name="from_email"
                required
              />
            </Form.Group>
            <Form.Group
              style={{ padding: "5px", border: "3px solid rgb(212, 227, 6)" }}
              className="mb-3 container"
              controlId="formBasicGmail"
            >
              <Form.Label>Asunto</Form.Label>
              <Form.Control
                type="text"
                placeholder="asunto"
                name="subject"
                required
              />
            </Form.Group>
            <Form.Group
              style={{ padding: "5px", border: "3px solid rgb(212, 227, 6)" }}
              className="mb-3 container"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Mensaje</Form.Label>
              <Form.Control
                style={{ border: "3px solid rgb(212, 227, 6)" }}
                as="textarea"
                rows={3}
                name="message"
                required
              />
              <Form.Group
                className="mb-3 conatainer"
                controlId="formBasicCheckbox"
              >
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
            </Form.Group>
            <Button variant="primary" type="submit">
              Enviar
            </Button>
          </Form>
        </Col>
        <Col>
          <div>
            <h3>Contacta Conmigo</h3>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
