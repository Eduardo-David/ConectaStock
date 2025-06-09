import './Login.css';
import { useEffect, useState } from 'react';

export default function Login({text,svg}) {

    const [form, setForm]=useState({
        username:'',
        password:'',
        role: text.toLowerCase()
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(form =>({
            ...form,
            [name]: value
        }));  
    }
        
    return (
        <section className="login">
            <h1 className='encabezado-text'>{text}</h1>
            {svg}
            <form className="login-form">
                <label htmlFor="usuario">Usuario</label>
                <input type="text" id="email" name="username" required onChange={handleChange}/>
                
                <label htmlFor="password">Contraseña</label>
                <input type="password" id="password" name="password" required onChange={handleChange}/>
        
                <button type="submit">Iniciar Sesión</button>
                <div>
                    <p>¿No tienes cuenta? <a href="/register">Regístrate</a></p>
                </div>
                
            </form>
        </section>
    )
}