import React from 'react';
import './Card.css';

export const Card = ({ personaje }) => {

  return (
    <div className="maincard">
      <div className="card">
        <img src={personaje.image} alt={personaje.name} />
        <h2>{personaje.name}</h2>
        <p>{personaje.species}</p>
      </div>
    </div>
  )
}

export default Card;