import React,{useState,useEffect} from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import Listado from './components/Listado'
import ControlPresupuesto from './components/ControlPresupuesto'

function App() {
  //State

  const [presupuesto,guardarpresupuesto]=useState(0);
  const [restante,guardarrestante]=useState(0);
  const [preguntapresupuesto,guardarpreguntapresupuesto]=useState(true);
  const [gasto,guardargasto]=useState({});
  const [gastos,guardargastos]=useState([]);

  const [creargasto,guardarcreargasto]=useState(false);


  useEffect(()=>{
   if(creargasto){
    const listadogasto=[...gastos,gasto];
    guardargastos(listadogasto);



    //restar

    const presupuestorestante= restante-gasto.cantidadgasto;
    guardarrestante(presupuestorestante);




    //Una vez que se agrega lo ponemos como false


    guardarcreargasto(false);

   }
  },[creargasto,gastos,gasto,restante])


  return (
    <div className="App container">
      <header>
        <h1>Gasto Semanal</h1>
        <div className="contenido-principal contenido">
           {(preguntapresupuesto) ?  
                
                    <Pregunta
                      guardarpresupuesto={guardarpresupuesto}
                      guardarpreguntapresupuesto={guardarpreguntapresupuesto}
                      guardarrestante={guardarrestante}
                    /> 
            
            : 
            (
              <div className="row">
                  <div className="one-half column">
                      <Formulario
                      
                      guardargasto={guardargasto}
                      guardarcreargasto={guardarcreargasto}

                      />
                  </div>
                  <div className="one-half column">
                      <Listado
                        gastos={gastos}
                      />
                      <ControlPresupuesto
                        presupuesto={presupuesto}
                        restante={restante}
                      />
                  </div>
              </div>
            )}
        </div>
      </header>
    </div>
  );
}

export default App;
