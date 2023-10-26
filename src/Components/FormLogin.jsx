import React, { useContext } from 'react';
import { useState } from 'react';
import { useUser } from '../Context/UserProvider';

function FormLogin() {
    const { setUser } = useUser(); 

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (name === "" || password === "") {
            setError(true);
            
        }
       
        setError(false);
        setUser([name]);
        
    }
   
    return (
        <section>
            <h1>Login</h1>
            <form className='form' onSubmit={handleSubmit}>
                <input
                    placeholder='User'
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                />
                <input
                    placeholder='Password'
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                />
                <button>Iniciar Sesión</button>
            </form>
            {error && <p>Todos los campos son obligatorios</p>}
        </section>
    );
}

export default FormLogin;