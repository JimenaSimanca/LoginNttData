import React from 'react'
import Card from './Cards'

function Home({ user, setUser }) {


    const handleLogout = () => {
        setUser([])
    }
    return (
        <div>
            <main>
                <h1>Bienvenido</h1>
                <h2>{user}</h2>
            </main>
            <div>
              <Card/>
            </div>
            <button onClick={handleLogout}>Cerrar Sesión</button>
        </div>
    )
};

export default Home