import React from 'react'
import "../CSS/Header.css"

const Header = ({ datos }) => {
  return (
    <div className='header'>
      <h1>Porfolio {datos.apellido} {datos.nombre}</h1>
    </div>
  )
}

export default Header
