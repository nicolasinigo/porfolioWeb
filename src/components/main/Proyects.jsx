import React from 'react'
import Cards from '../card/Cards'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import adivinaNumero from "../../../public/adivinaNumero.png"
import clima from "../../../public/AppClima.png"
import calculadora from "../../../public/calculadora.png"
import carrito from "../../../public/carritoCompras.png"
import peliculas from "../../../public/buscadorPeliculas.png"
import netflix from "../../../public/netflix.png"
import etl from "../../../public/etl.png"
import sales from "../../../public/sales.png"
import sleep from "../../../public/sleep.png"


const Proyects = () => {
  return (
    <Container>
      <h3>Desarrollo</h3>
      <hr />
      <Row>
        <Col><Cards imagen={adivinaNumero}/></Col>
        <Col><Cards imagen={clima}/></Col>
        <Col><Cards imagen={calculadora}/></Col>
      </Row>
      <br />
      <Row>
        <Col><Cards imagen={carrito} /></Col>
        <Col><Cards imagen={peliculas}/></Col>
      </Row>
      <br />
      <h3>Data</h3>
      <hr />
      <Row>
        <Col><Cards imagen={netflix}/></Col>
        <Col><Cards imagen={etl}/></Col>
      </Row>
      <br />
      <Row>
        <Col><Cards imagen={sales}/></Col>
        <Col><Cards imagen={sleep}/></Col>
      </Row>
    </Container>
  )
}

export default Proyects
