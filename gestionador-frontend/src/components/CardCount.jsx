import './cardCount.css';
import {TiendaIcon, ProveedorIcon} from '../assets/icons.jsx';
import {useNavigate} from 'react-router-dom';

export function CardCount(){
    const navigate = useNavigate();
    return(
    
        <section className='flex items-center justify-center gap-10'>
            <button className='flex flex-col justify-center border-2 rounded-2xl bg-blue-700 h-50 w-50 items-center'
                onClick={()=>{navigate('/loginProveedor')}
            }>
                <h1 className='font-sans font-bold text-xl'>Proveedor</h1>
                <ProveedorIcon/>
            </button>
            <button className='flex flex-col justify-center border-2 rounded-2xl bg-blue-700 h-50 w-50 items-center'
                onClick={()=>{navigate('/loginTienda')}}
            >
                <h1 className='font-sans font-bold text-xl'>Tienda</h1>
                <TiendaIcon/>
            </button>
        </section>
    
    )
}