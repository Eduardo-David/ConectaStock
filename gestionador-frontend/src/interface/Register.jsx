import { useEffect, useState } from 'react';
import './Register.css';
import { useNavigate } from 'react-router-dom';

export default function Register() {

    const navigate = useNavigate();

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
    }
        
    return (
        <section className="relative flex flex-col items-center justify-center bg-blue-600 w-90 h-130 border-2 rounded-3xl">
            <h1 className='font-bold text-4xl mb-7'>Registro</h1>
            <form className="flex flex-col gap-3  w-80">
                <label htmlFor="usuarioname" className='font-sans text-lg'>☛nombre de usuario</label>
                <input type="text" id="username" name='name' className='rounded-sm bg-blue-400
                border-2' required onChange={handleChange}/>
                
                <label htmlFor="password" className='font-sans text-lg'>☛Contraseña</label>
                <input type="password" id="password" name='password'className='rounded-sm bg-blue-400
                border-2' required onChange={handleChange}/>
        
                <label htmlFor="ci" className='font-sans text-lg'>☛Carnet de identidad</label>
                <input type="text" id="ci" name='name-ci'className='rounded-sm bg-blue-400
                border-2' required onChange={handleChange}/>

                <label htmlFor="telefono" className='font-sans text-lg'>☛Numero de telefono</label>
                <input type="test" id="telefono" name='telefono' className='rounded-sm bg-blue-400
                border-2' required onChange={handleChange}/>

                <label for="role-select" className='font-sans text-lg'>☛Tipo de usuario:</label>
                    <select name="role" id="role-select" className="bg-blue-200 border-2" onChange={handleChange}>
                    <option value="">--Seleccione un rol--</option>
                    <option value="vendedo">Vendedor</option>
                    <option value="proveedor">Proveedor</option>
                    </select>

                <button type="submit" className='font-sans font-bold border-2 relative  bg-blue-200 w-30 rounded-sm h-10' onClick={()=>{navigate('/')}}>Crear cuenta</button>

            </form>
        </section>
    )
}