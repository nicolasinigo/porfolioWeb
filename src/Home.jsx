import React, { useState } from 'react'
import Header from './components/header/Header'
import  Main from './components/main/Main'
import Footer from './components/footer/Footer'
import "./home.css"

const Home = () => {
  const [color, setColor]= useState(true)
  return (
    <div className={color ? "text-dark-mode" : "text-light-mode"} style={{backgroundColor: color?"rgb(27, 27, 23)":"white"}}>
        <Header color={color} setColor={setColor}></Header>
        <Main color={color}></Main>
        <Footer color={color}></Footer>
    </div>
  )
}

export default Home
