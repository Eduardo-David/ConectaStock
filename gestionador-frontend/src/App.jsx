import './App.css';
import { CardCount } from './components/CardCount.jsx';
import {Route, Routes} from 'react-router-dom'
import Login from './page/Login.jsx';
import { TiendaIcon, ProveedorIcon } from './assets/icons.jsx';
import Register from './page/Register.jsx';


export  function App() {
    return(
    <>
        <Routes>
            <Route    
                 path="/" element={
                <section className='app'>
                    <CardCount />
                </section>
                } 
            />

            <Route
                path='/register' element={
                    <Register/>
                }
            />

            <Route 
                path="/loginProveedor" element={
                    <Login text='Proveedor' svg={<ProveedorIcon/>} />
                }/>

            <Route 
                path='/loginTienda' element={
                    <Login text='Tienda' svg={<TiendaIcon/>} />
                }
            />
        </Routes>
    </>     
    )
}