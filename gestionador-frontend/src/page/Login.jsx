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
        <section className="relative flex flex-col items-center justify-center bg-blue-600 w-70 h-100 border-2 rounded-3xl">
            <h1 className='absolute font-sans font-bold text-2xl top-5'>{text}</h1>
            {svg}
            <form className="grid grid-cols-1 gap-2">
                <label htmlFor="usuario">Usuario</label>
                <input type="text" id="email" name="username" className='rounded-sm bg-white placeholder-gray-500 border border-gray-300 focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5' required onChange={handleChange}/>
                
                <label htmlFor="password">Contraseña</label>
                <input type="password" id="password" name="password" className='rounded-sm bg-white placeholder-gray-500 border border-gray-300 focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5' required onChange={handleChange}/>
        
                <button type="submit" className='bg-blue-800 rounded-sm w-30'>Iniciar Sesión</button>
                    <p>¿No tienes cuenta? <a href="/register" className='font-bold underline'>Regístrate</a></p>
            </form>
        </section>
    )
}