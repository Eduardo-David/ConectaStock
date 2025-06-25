import { useEffect, useState } from 'react';
import { loginRequest } from '../api/auth';
import { useNavigate } from 'react-router-dom';
import Respuesta from '../components/Repuesta';

export default function Login({ text, svg }) {

    const navigate = useNavigate();
    const [valido, setValido] = useState(null);

    const [form, setForm] = useState({
        username: '',
        password: '',
        role: text
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(form);
            await loginRequest(form);
            setValido(true);
            setTimeout(() => {
                if (form.role === 'vendedor') {
                    navigate('/loginTienda/vendedorInterface');
                } else if (form.role === 'proveedor') {
                    navigate('/loginProveedor/proveedorInterface');
                }
            }, 2000);
        } catch (error) {
            setValido(false);
            console.error("Error during login:", error);
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(form => ({
            ...form,
            [name]: value
        }));
        setValido(null);
    }

    return (
        <main className="grid grid-cols-3 grid-rows-3 w-screen h-screen">
            <div className='col-start-2 row-start-1 self-start justify-self-center h-auto w-auto mt-2'>
                {valido !== null && <Respuesta valido={valido} className="relative top-2" />}
            </div>
            <form className="col-start-2 row-start-1 row-span-3  self-center justify-self-center flex flex-col bg-blue-600 border-2 rounded-3xl h-auto w-auto p-5 gap-4" onSubmit={handleSubmit}>
                <h1 className='row-start-1 col-start-1 font-sans font-bold text-2xl justify-self-center self-center h-auto w-auto'>{text}</h1>
                <div className='row-start-2 justify-self-center self-center h-auto w-auto'>
                    {svg}
                </div>
                <label htmlFor="username" className='h-auto w-auto'>Usuario</label>
                <input type="text" id="username" name="username" className='rounded-sm bg-white placeholder-gray-500 border-gray-300 focus:ring-gray-500 focus:border-gray-500  h-auto w-auto' required onChange={handleChange} />

                <label htmlFor="password" className='h-auto w-auto'>
                    Contraseña</label>
                <input type="password" id="password" name="password" className='rounded-sm bg-white placeholder-gray-500 border border-gray-300 focus:ring-gray-500 focus:border-gray-500 h-auto w-auto' required onChange={handleChange} />

                <button type="submit" className='bg-blue-400 rounded-sm w-auto font-bold h-auto'>Iniciar Sesión</button>
                <p>
                    ¿No tienes cuenta?
                    <a href="/register" className='font-bold underline'>
                        Regístrate
                    </a>
                </p>
            </form>
        </main>
    )
}