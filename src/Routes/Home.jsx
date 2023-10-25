import '../Styles/Home.css'
import React from 'react'
import { useContext,useState } from 'react'
import ThemeContext from '../Components/utils/Context'
import { Link } from 'react-router-dom'
import Grid from '@mui/material/Grid';


const Home = () => {

  const context = useContext(ThemeContext);


  return (
    <>
   

      <main className="main">
          <div id="title">
            <h1>Un espacio no apto para Muggles</h1>
            <h4>Descubre los secretos mejor guardados del mundo mágico</h4>
          </div>
          <div>
            <Search/>
          </div>
      </main>
      <section>
        <div className="category">
          <h1>Casas de Hogwarts</h1>
          <h4 className="size">Todo sobre las casas del colegio más famoso de Magia y Hechicería</h4>
        </div>
        
      <div className='category-section'>
        
        <Grid container justifyContent="space-evenly" alignItems="center">
            
        </Grid> 
      </div>


        </section>

        <section className="categories">
          <div className="category">
          <h1>Temas de interés</h1>
          <h4 className="service-size">Si eres un Muggles, ¡Esto te interesa!</h4>
          </div>
          <div className='service-section' >
          <Grid container spacing={4}>
              {context.experiences.map((experience) => (
                <Experience
                  key={experience.experienceId}
                  experienceId={experience.experienceId}
                  experienceName={experience.experienceName}
                  description={experience.description}
                  image={experience.experienceImageList[0]?.image?.urlImage} // Accessing the 'urlImage' property
                />
              ))}
             </Grid> 
        
            </div>
        </section>
        <section className="categories">
          <div className="category">
          <h1>Noticias</h1>
          <h4 className="service-size">Entérate de todo lo que ocurre en el mundo mágico</h4>
          </div>
          <div className='service-section' >
          <Grid container spacing={4}>
              {context.experiences.map((experience) => (
                <Experience
                  key={experience.experienceId}
                  experienceId={experience.experienceId}
                  experienceName={experience.experienceName}
                  description={experience.description}
                  image={experience.experienceImageList[0]?.image?.urlImage} // Accessing the 'urlImage' property
                />
              ))}
             </Grid> 
        
            </div>
        </section>
    </>
  )
}

export default Home