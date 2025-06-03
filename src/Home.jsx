import React, { useState } from 'react'
import Header from './components/header/Header'
import  Main from './components/main/Main'
import Footer from './components/footer/Footer'

const Home = () => {
  const [color, setColor]= useState(true)
  return (
    <div style={{backgroundColor: color===true ?"rgb(27, 27, 23)":"white"}}>
        <Header color={color} setColor={setColor}></Header>
        <Main></Main>
        <Footer></Footer>
    </div>
  )
}

export default Home
