import React from 'react'
import './Buscar.css'

export const Buscar = ({ buscar, setbuscar }) => {

  const input = ({ target }) => {
    setbuscar(target.value)
  }
  return (
    <div className="buscar">
      <input className="buscar1" type='text' name='buscar' placeholder='Nombre del personaje' onChange={input} value={buscar} />
    </div>
  )
}

export default Buscar;