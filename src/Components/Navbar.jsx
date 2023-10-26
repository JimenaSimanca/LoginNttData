import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
        <Link to="/" className='logo'><h1>Wizard Blog</h1></Link>
        <ul className='menu'>
            <li><Link className='menu-link' to='/'>Home</Link></li>
            <li><Link to="./Routes/MyNotes">Mis Notas</Link></li>
            <li><Link to="./Routes/AddNote">Agregar Notas</Link></li>
            <li><Link to="./Routes/Logout">Salir</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar