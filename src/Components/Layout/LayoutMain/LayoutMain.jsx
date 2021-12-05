import React, { useState } from 'react';
import { Card } from '../../UI/Card/Card';
import { Button } from '../../UI/Button/Button';
import imgHomero from '../../../Images/fondo.jpeg'


export const LayoutMain = () => {

  const [data, setData] = useState({name: "Api",image:imgHomero,quote:"Andrea Mira"});

  const URL = 'https://rickandmortyapi.com/api/character';

  const FetchApi=()=> {    
    fetch(URL)
    .then(response =>response.json())
    .then(data =>setData(data[0]))
  }

  return (
    <main>
      <Card data={data} />    
      <Button event={FetchApi} />
    </main>
  )
}