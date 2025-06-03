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
import data from "../../datos"


const Proyects = () => {
  return (
    <Container>
      <h3>DESARROLLO</h3>
      <hr />
      <Row>
        <Col><Cards imagen={adivinaNumero} data={data.proyectos.adivinaNumero} titulo={"Adivina el numero"}/></Col>
        <Col><Cards imagen={clima} data={data.proyectos.appClima} titulo={"App de Clima"}/></Col>
        <Col><Cards imagen={calculadora} data={data.proyectos.calculadora} titulo={"Calculadora"}/></Col>
      </Row>
      <br />
      <Row>
        <Col><Cards imagen={carrito} data={data.proyectos.carrito} titulo={"Carrito de Compras"}/></Col>
        <Col><Cards imagen={peliculas} data={data.proyectos.bucadorPeliculas} titulo={"App de Paliculas"}/></Col>
      </Row>
      <br />
      <h3>DATA</h3>
      <hr />
      <Row>
        <Col><Cards imagen={netflix} data={data.proyectos.netflix} titulo={"Netflix"}/></Col>
        <Col><Cards imagen={etl} data={data.proyectos.etl} titulo={"ETL"}/></Col>
      </Row>
      <br />
      <Row>
        <Col><Cards imagen={sales} data={data.proyectos.sales} titulo={"Salarios"}/></Col>
        <Col><Cards imagen={sleep} data={data.proyectos.sleep} titulo={"Sueño"}/></Col>
      </Row>
    </Container>
  )
}

export default Proyects
