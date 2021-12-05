import React from 'react';
import './Card.css';

export const Card = (data) => {

  const { name, image, quote } = data.data;
  
  //const { name, image, quote } = data.data;

  return (
    <div className="card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{quote}</p>
    </div>
  )
}