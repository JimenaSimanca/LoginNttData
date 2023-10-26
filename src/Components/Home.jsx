import React from 'react'
import CardBlog from './CardBlog'
import '../Styles/style-home.css'


function Home({ user, setUser }) {
    const handleLogout = () => {
        setUser([])
    }

    return (
        <div>
            <main className='main'>
                <h1>Bienvenido</h1>
                <h1>{user}</h1>
            </main>
            <div className='grid'>
              <CardBlog/>
            </div>
             <button onClick={handleLogout}>Cerrar Sesión</button> 
        </div>
    )
};

export default Home

