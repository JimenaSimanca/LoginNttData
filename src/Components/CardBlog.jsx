import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import '../Styles/style-home.css'

function CardBlog() {
  const [data, setData] = useState([]);

  useEffect(() => {
    
    fetch('./src/api.json') 
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error('Error:', error));
  }, []);

  return (
    <div style={{display:'flex', margin:'30px'}}>
      
      {data.map((item) => (


<Card style={{background: '#262626', color: '#f2f2f2', border:'1px solid #2b2b2b'}} className='card'

key={item.id} sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={item.foto}
         />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {item.titulo}
        </Typography>
        <Typography variant="body1" >
        {item.subtitulo}
        </Typography>
        <Typography variant="body1">
        {item.texto}
        </Typography>
        <Typography variant="body1">
        {item.categoria}
        </Typography>
      </CardContent>

    </Card>

      
      ))}
    </div>
  );
}

export default CardBlog;