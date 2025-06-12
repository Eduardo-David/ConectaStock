import {ChekBad, ChekSmall} from '../assets/icons.jsx';

function Respuesta({valido, className}){
    if(valido === true){
        return(
            <section className="relative flex justify-center items-center bg-green-400 h-10 w-30 border-2 rounded-sm ${className}">
                <ChekSmall/>   
            </section>
        );
    }
    if(valido === false){
        return(
            <section className="relative flex justify-center items-center bg-red-800 h-10 w-30 border-2 rounded-sm ${className}">
                <ChekBad/>
            </section>
        );
    }
    return(null);
}


export default Respuesta;