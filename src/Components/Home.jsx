import React, { useEffect, useState } from 'react';
import CardBlog from './CardBlog';
import '../Styles/style-home.css';

function Home({ user, setUser }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('./src/api.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error('Error:', error));
  }, []);

  const handleLogout = () => {
    setUser([]);
  };

  return (
    <div>
      <main className='main'>
        <h1>Bienvenido</h1>
        <h1>{user}</h1>
      </main>
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
      <button onClick={handleLogout}>Cerrar Sesión</button>
    </div>
  );
}

export default Home;

