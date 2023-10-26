import React from 'react'
import { useState, useEffect } from 'react' 
import '../Styles/style-home.css'
import CardBlog from '../Components/CardBlog'


const MisNotas = () => {

  const [data, setData] = useState([]);

useEffect(() => {
  fetch('./src/api.json')
    .then((response) => response.json())
    .then((json) => setData(json))
    .catch((error) => console.error('Error:', error));
}, []);

  return (
    <div className='grid'>
    {data.map((item) => (
      <CardBlog
        key={item.id}
        foto={item.foto}
        titulo={item.titulo}
        subtitulo={item.subtitulo}
        texto={item.texto}
        categoria={item.categoria}
      />
    ))}
  </div>
  )
}

export default MisNotas