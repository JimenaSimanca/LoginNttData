import React, { useState, useEffect } from 'react';
import CardBlog from './CardBlog';
import '../Styles/style-home.css'

const Search = () => {
  const [inputValue, setInputValue] = useState('');
  const [resultados, setResultados] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('./src/api.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error('Error:', error));
  }, []);

  const handleInputChange = (e) => {
    const valor = e.target.value;
    setInputValue(valor);

    const resultadosFiltrados = data.filter(item =>
      item.categoria.toLowerCase().includes(valor.toLowerCase())
    );

    setResultados(resultadosFiltrados);
  };

  let cards;
  if (inputValue === '') {
   
    cards = null;
  } else {
   
    cards = resultados.map(item => (
      <CardBlog
        key={item.id}
        foto={item.foto}
        titulo={item.titulo}
        subtitulo={item.subtitulo}
        texto={item.texto}
        categoria={item.categoria}
      />
    ));
  }

  return (
    <div>
      <input className='search'
        type="text"
        placeholder="Buscar por categoría"
        value={inputValue}
        onChange={handleInputChange}
      />
      <div className='busqueda'>
        {cards}
      </div>
    </div>
  );
};

export default Search;