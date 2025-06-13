import { useEffect, useState } from 'react';
import { loginRequest } from '../api/auth';
import { useNavigate } from 'react-router-dom';
import Respuesta from '../components/Repuesta';

export default function Login({text,svg}) {

    const navigate = useNavigate();
    const [valido, setValido] = useState(null);

    const [form, setForm]=useState({
        username:'',
        password:'',
        role: text
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            await loginRequest(form);
            setValido(true);
            setTimeout(()=>{
            if (form.role === 'Vendedor') {
                navigate('/loginTienda/vendedorInterface');
            } else if (form.role === 'Proveedor') {
                navigate('/loginProveedor/proveedorInterface');
            }},2000);
        }catch (error) {
            setValido(false);
            console.error("Error during login:", error);
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(form =>({
            ...form,
            [name]: value
        }));
        setValido(null);  
    }
        
    return (
        <main className="relative flex flex-col items-center justify-center bg-blue-600 w-70 h-100 border-2 rounded-3xl">
            <h1 className='absolute font-sans font-bold text-2xl top-5'>{text}</h1>
            {svg}
            <form className="grid grid-cols-1 gap-2" onSubmit={handleSubmit}>
                <label htmlFor="usuario">Usuario</label>
                <input type="text" id="email" name="username" className='rounded-sm bg-white placeholder-gray-500 border border-gray-300 focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5' required onChange={handleChange}/>
                
                <label htmlFor="password">Contraseña</label>
                <input type="password" id="password" name="password" className='rounded-sm bg-white placeholder-gray-500 border border-gray-300 focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5' required onChange={handleChange}/>
        
                <button type="submit" className='bg-blue-400 rounded-sm w-30 font-bold'>Iniciar Sesión</button>
                    <p>¿No tienes cuenta? <a href="/register" className='font-bold underline'>Regístrate</a></p>
            </form>
            {valido !== null && <Respuesta valido={valido} className="relative top-2"/>}
        </main>
    )
}