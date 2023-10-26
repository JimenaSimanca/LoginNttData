import React from 'react'
import { Link } from 'react-router-dom'
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import '../Styles/style-home.css'


const Navbar = () => {
  return (

    <nav className="navbar">
      <Toolbar >
        <IconButton >
          <SearchIcon />
          <Link className='menu-link' to='/Search'>Search</Link>
        </IconButton>
        <Link className='menu-link' to='/Home'>Home</Link>
        <Link className='menu-link' to='/MyNotes'>My Notes</Link>
        <Button variant="outlined" size="small" >
          <Link className='menu-link' to='Routes/AddNote'>Add Notes</Link>
        </Button>
      </Toolbar>
    </nav>
  )
}

export default Navbar