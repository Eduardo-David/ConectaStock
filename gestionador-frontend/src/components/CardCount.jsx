import './cardCount.css';
import {TiendaIcon, ProveedorIcon} from '../assets/icons.jsx';
import {useNavigate} from 'react-router-dom';

export function CardCount(){
    const navigate = useNavigate();
    return(
    
        <header className='cardCount-header'>
            <button className='cardProveedor'
                onClick={()=>{navigate('/loginProveedor')}
            }>
                <h1>Proveedor</h1>
                <ProveedorIcon/>
            </button>
            <button className='cardTienda'
                onClick={()=>{navigate('/loginTienda')}}
            >
                <h1>Tienda</h1>
                <TiendaIcon/>
            </button>
        </header>
    
    )
}