import React,{useState} from 'react';
import Error from './Error';
import shortidi from 'shortid';

function Formulario(props){


    const  {guardargasto,guardarcreargasto}=props;

    
    //state

    const[nombregasto,guardarnombregasto]=useState('');
    const[cantidadgasto,guardarcantidadgasto]=useState(0);
    const[error,guardarerror]=useState(false);
    
    //se agrega el gasto
    const agregargasto=e=>{
        e.preventDefault();




        //validar 
        if(cantidadgasto <= 0 || isNaN (cantidadgasto) || nombregasto==='')
        {
            guardarerror(true);
            return;
        }

        

        //construir objeto de gasto

        const gasto ={
            nombregasto,
            cantidadgasto,
            id:shortidi.generate()
        }

        //pasar al componente principal
        guardargasto(gasto);
        guardarcreargasto(true);
        //eliminar alerta
        guardarerror(false);
        //resetear el form
        guardarnombregasto('');
        guardarcantidadgasto(0);

    }


    return(
        <form
        onSubmit={agregargasto}
        >
            <h2>Agrega tus datos aqui</h2>

            {error ?  <Error mensaje='Ambos Campos son Obligatorios||Presupuesto Incorrecto'/>   : null}
           
            <div className="campo">
                <label>Nombre del Gasto</label>
                <input 
                    type="text"
                    className="u-full-width"
                    placeholder="Ejemplo : Transporte"
                    onChange={e=>guardarnombregasto(e.target.value)}
                    value={nombregasto}/>
            </div>
            <div className="campo">
                <label>Cantidad del Gasto</label>
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Ejemplo : 300"
                    onChange={e=>guardarcantidadgasto(parseInt(e.target.value,10))}
                    value={cantidadgasto}/>
            </div>
            <input type="submit" className="button-primary u-full-width" value="Agregar Gasto"></input>
        </form>

    )
}

export default Formulario;