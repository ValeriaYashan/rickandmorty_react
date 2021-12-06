//import React, { useState } from 'react';
import { Card } from '../../UI/Card/Card';
import { Button } from '../../UI/Button/Button';


const URL = 'https://rickandmortyapi.com/api/character';


export const LayoutMain = () => {
  const ApiFetch = () => {
    fetch(URL)
      .then(response => response.json())
      .then(data => (data[0]))
  }


  return (
    <main>
      <Button evento={ApiFetch} />
    </main>
  )
}
export const createcar = (data) => {

  const guardar_car = document.createElement('div')
  const img_car = document.createElement('img')
  const nombre_car = document.createElement('h2')
  const especies = document.createElement('p')

  img_car.setAttribute('id', data.id)
  img_car.setAttribute('scr', data.image)
  img_car.setAttribute('alt', data.name)
  nombre_car.textContent = data.name
  especies.textContent = data.species

  guardar_car.appendChild(nombre_car)
  guardar_car.appendChild(img_car)
  guardar_car.appendChild(especies)

  return (
    <main>
      <Card data={guardar_car} />
    </main>
  )
}