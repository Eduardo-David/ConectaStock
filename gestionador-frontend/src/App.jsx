import './App.css';
import { CardCount } from './components/CardCount.jsx';
import {Route, Routes} from 'react-router-dom'
import Login from './interface/Login.jsx';
import { TiendaIcon, ProveedorIcon } from './assets/icons.jsx';


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