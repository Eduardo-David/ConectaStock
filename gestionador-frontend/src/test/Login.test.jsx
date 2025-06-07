import { describe, test, expect, it, afterEach } from "vitest";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { useState } from 'react';
import {ProveedorIcon } from '../assets/icons.jsx';

const Login = ()=>{
        const [form, setForm]=useState({
            username:'',
            password:'',
            role: 'proveedor'
        })
    
        const handleChange = (e) => {
            const { name, value } = e.target;
            setForm(form =>({
                ...form,
                [name]: value
            }));  
        }

    return(
         <section className="login">
            <h1 className='encabezado-text'>Proveedor</h1>
            <ProveedorIcon/>
            <form className="login-form">
                <label htmlFor="usuario">Usuario</label>
                <input type="text" id="usuario" name="username" value={form.username} required onChange={handleChange}/>
                
                <label htmlFor="password">Contraseña</label>
                <input type="password" id="password" name="password" value={form.password} required onChange={handleChange}/>
        
                <button type="submit">Iniciar Sesión</button>
            </form>
        </section>       
    );
}

describe("Login Component", () => {

    afterEach(cleanup);

    it('el campo username del estado form deberia cambiar',()=>{
        render(<Login/>);
        const input = screen.getByLabelText("Usuario");
        
        fireEvent.change(input, { target: { value: 'eduardo' } });
        expect(input.value).toBe('eduardo');
    });

    it('el campo password del estado form deberia cambiar',()=>{
        render(<Login/>);
        const input = screen.getByLabelText("Contraseña");
        fireEvent.change(input, { target: { value: '123456' } });
        expect(input.value).toBe('123456');
    });
});