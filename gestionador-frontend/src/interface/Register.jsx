import { useEffect, useState } from 'react';
import './Register.css';

export default function Register() {

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
        <section className="register">
            <h1 className='encabezado-register'>Registro</h1>
            <form className="register-form">
                <label htmlFor="usuarioname">nombre de usuario</label>
                <input type="text" id="username" name='name' required onChange={handleChange}/>
                
                <label htmlFor="password">Contraseña</label>
                <input type="password" id="password" name='password' required onChange={handleChange}/>
        
                <label htmlFor="ci">Carnet de identidad</label>
                <input type="text" id="ci" name='name-ci' required onChange={handleChange}/>

                <label htmlFor="telefono">Numero de telefono</label>
                <input type="test" id="telefono" name='telefono' required onChange={handleChange}/>

                <label for="role-select">Tipo de usuario:</label>
                    <select name="role" id="role-select" onChange={handleChange}>
                    <option value="">--Seleccione un rol--</option>
                    <option value="vendedo">Vendedor</option>
                    <option value="proveedor">Proveedor</option>
                    </select>

                <button type="submit">Crear cuenta</button>

            </form>
        </section>
    )
}