import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import '../Styles/style-home.css';

function CardBlog({ foto, titulo, subtitulo, texto, categoria }) {
  return (
    <Card style={{ background: '#262626', color: '#f2f2f2', border: '1px solid #2b2b2b' }} className='card' sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image={foto} />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {titulo}
        </Typography>
        <Typography variant='body1'>{subtitulo}</Typography>
        <Typography variant='body1'>{texto}</Typography>
        <Typography variant='body1'>{categoria}</Typography>
      </CardContent>
    </Card>
  );
}

export default CardBlog;