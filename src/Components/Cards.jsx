import React, { useEffect, useState } from 'react';

function Card() {
  const [data, setData] = useState([]);

  useEffect(() => {
    
    fetch('./src/api.json') 
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error('Error:', error));
  }, []);

  return (
    <div>
      
      {data.map((item) => (
        <div key={item.id} className="card">
          <img src={item.foto} alt="Imagen" />
          <div className="card-body">
            <h3>{item.titulo}</h3>
            <h4>{item.subtitulo}</h4>
            <p>{item.texto}</p>
            <p>Categoría: {item.categoria}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;

  