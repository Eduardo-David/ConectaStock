import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {registerRequest} from '../api/auth.js';
import Respuesta from '../components/Repuesta.jsx';

export default function Register() {

    const navigate = useNavigate();
    const [valido, setValido] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();// Evitar el comportamiento por defecto del formulario
        try {
            console.log(form);
            await registerRequest(form); // formData es tu objeto con los datos del formulario
            setValido(true); // Registro exitoso
            setTimeout(() => {
                navigate('/');
            },2000);
        } catch (error) {
        setValido(false); // Registro fallido
        }
    }


    const [form, setForm]=useState({
        name:'',
        password:'',
        role: '',
        ci:'',
        telefono:''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(form =>({
            ...form,
            [name]: value
        }));  
        setValido(null); // Reiniciar el estado de valido al cambiar el formulario
    }

    return (
        <main className="grid grid-cols-3 grid-rows-3 h-screen w-screen">
            <button className='col-start-1 row-start-1 bg-blue-700 font-sans justify-self-start self-start ml-5 mt-5
            h-auto max-w-min w-full p-3 border-2 rounded-2xl font-bold text-2xl' onClick={
                () => navigate('/')
            }>⬅Volver</button>
            <div className='col-start-2 row-start-1 self-start justify-self-center h-auto w-auto mt-2'>
             {valido !== null && <Respuesta valido={valido} className="relative top-2"/>}
            </div>
            <form className="grid grid-cols-1 col-start-2 row-start-2 gap-2 max-w-md w-full px-5 py-10 h-auto bg-blue-600 justify-self-center self-center items-center  border-2 rounded-xl" onSubmit={handleSubmit}>
                <h1 className='relative font-bold text-4xl left-1'>Registro</h1>
                <label htmlFor="username" className='font-sans text-lg'>☛nombre de usuario</label>
                <input type="text" id="username" name='name' className='rounded-sm bg-blue-400
                border-2' required onChange={handleChange}/>
                
                <label htmlFor="password" className='font-sans text-lg'>☛Contraseña</label>
                <input type="password" id="password" name='password'className='rounded-sm bg-blue-400
                border-2' required onChange={handleChange}/>
        
                <label htmlFor="ci" className='font-sans text-lg'>☛Carnet de identidad</label>
                <input type="text" id="ci" name='ci'className='rounded-sm bg-blue-400
                border-2' required onChange={handleChange}/>

                <label htmlFor="telefono" className='font-sans text-lg'>☛Numero de telefono</label>
                <input type="test" id="telefono" name='telefono' className='rounded-sm bg-blue-400
                border-2' required onChange={handleChange}/>

                <label for="role-select" className='font-sans text-lg'>☛Tipo de usuario:</label>
                    <select name="role" id="role-select" className="bg-blue-200 border-2" onChange={handleChange}>
                    <option value="">--Seleccione un rol--</option>
                    <option value="vendedor">Vendedor</option>
                    <option value="proveedor">Proveedor</option>
                    </select>
                <button type="submit" className='font-sans font-bold border-2 relative  bg-blue-200 w-30 rounded-sm h-10'>
                    Crear cuenta
                </button>
            </form>
        </main>
    )
}