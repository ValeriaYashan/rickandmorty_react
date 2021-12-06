import React from 'react'

export const Button = ({ evento }) => {
  return (
    <div className="boton">
      <button onClick={evento}>Clik</button>
    </div>
  )
}