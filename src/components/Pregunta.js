import React,{Fragment,useState} from 'react';
import Error from './Error';

function Pregunta (props){

    //definir state

    const {guardarpresupuesto,guardarpreguntapresupuesto,guardarrestante}=props;
    

    const [cantidad,guardarcantidad]=useState(0);
    const [error,guardarerror]=useState(false);
    
    
    //validar presupuesto
    const agregarpresupuesto= e =>{

        e.preventDefault();


        //validar


        if(cantidad <= 0 || isNaN (cantidad))
        {
            guardarerror(true);
            return;
        }

        //si se pasa la validacion
        guardarerror(false);
        guardarpresupuesto(cantidad);
        guardarrestante(cantidad);
        guardarpreguntapresupuesto(false);

    }
    

    
    return(
        <Fragment>
        <h2>Coloca tu presupuesto</h2>

        {error ?  <Error mensaje='El Presupuesto es incorrecto'/>   : null}

        <form
            onSubmit={agregarpresupuesto}
        >
            <input type="number"
                    className="u-full-widht"
                    placeholder="Agrega tu Presupuesto"
                     onChange={e=>guardarcantidad(parseInt( e.target.value,10))}
                    />
            <input type="submit" className="button-primary u-full-width" value="Definir Presupuesto"/>
        </form>
        </Fragment>
    )
    
}
export default Pregunta;