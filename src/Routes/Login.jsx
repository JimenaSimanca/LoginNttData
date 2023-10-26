import React from 'react';
import FormLogin from '../Components/FormLogin';
import Home from '../Components/Home';
import { useUser } from '../Context/UserProvider'; 

function Login() {
  const { user, setUser } = useUser();
    
    return (
        <div className='App'>
          { 
          !user.length > 0 
      ? <FormLogin setUser={setUser}/>
        : <Home user={user} setUser={setUser}/>  }
        </div>
    );
    
};

export default Login

