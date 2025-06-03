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
        <Col><Cards imagen={adivinaNumero} data={data.proyectos.adivinaNumero} titulo={"Adivina el numero"} link="https://adivinaelnumero-ni.netlify.app/"/></Col>
        <Col><Cards imagen={clima} data={data.proyectos.appClima} titulo={"App de Clima"} link="https://buscadorpeliculasreact-ni.netlify.app/"/></Col>
        <Col><Cards imagen={calculadora} data={data.proyectos.calculadora} titulo={"Calculadora"} link="https://calculadora-ni.netlify.app/"/></Col>
      </Row>
      <br />
      <Row>
        <Col><Cards imagen={carrito} data={data.proyectos.carrito} titulo={"Carrito de Compras"} link="https://carritocomprasreact-ni.netlify.app/"/></Col>
        <Col><Cards imagen={peliculas} data={data.proyectos.bucadorPeliculas} titulo={"App de Paliculas"} link="https://buscadorpeliculasreact-ni.netlify.app/"/></Col>
      </Row>
      <br />
      <h3>DATA</h3>
      <hr />
      <Row>
        <Col><Cards imagen={netflix} data={data.proyectos.netflix} titulo={"Netflix"} link="https://github.com/nicolasinigo/AnalisisDatosNetlfix"/></Col>
        <Col><Cards imagen={etl} data={data.proyectos.etl} titulo={"ETL"} link="https://github.com/nicolasinigo/limpiezaTransformacion"/></Col>
      </Row>
      <br />
      <Row>
        <Col><Cards imagen={sales} data={data.proyectos.sales} titulo={"Salarios"} link="https://github.com/nicolasinigo/analisisDatoSales"/></Col>
        <Col><Cards imagen={sleep} data={data.proyectos.sleep} titulo={"Sueño"} link="https://github.com/nicolasinigo/AnalisisDatos"/></Col>
      </Row>
    </Container>
  )
}

export default Proyects
