import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import './App.css';
import Navbar from './Components/Navbar';
import AddNote from './Routes/AddNote';
import MyNotes from './Routes/MyNotes';
import Login from './Routes/Login';
import Home from './Components/Home';
import { UserProvider } from './Context/UserProvider'; 


function App() {
  return (
    <UserProvider>
      <Navbar />
      <div>
        <div className='Content'>
          <Routes> 
            <Route path='/' element={<Login />} />
            <Route path='/MyNotes' element={<MyNotes />} />
            <Route path='Routes/AddNote' element={<AddNote />} />
            <Route path='/Home' element={<Home />} />
          </Routes>
        </div>
      </div>
    </UserProvider>
  );
}

export default App;
