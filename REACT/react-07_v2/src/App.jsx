import { useState } from 'react'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './grid.css';
import './meses.css';
//import './styles.css';

import navLinkAñoMedicion from "./medicionesAñosMesesCursosDivisiones.json";
import { NavegaciónAñoMedición_v6 } from './componentes_navegación_año_meses/NavegaciónAñoMedición_v6';
import { NavegaciónCursoDivisión } from './componentes_navegación_curso_división/NavegaciónCursoDivisión';
import { NavegaciónCursoDivisión_v2 } from './componentes_navegación_curso_división/NavegaciónCursoDivisión_v2';
import { DataContainer } from './componentes_contenedor_datos/DataContainer';

function App() {

    const [dataSeleccionadaPorCurso, cambiarDataSeleccionadaPorCurso] = useState(); // ???
    const [cursosYDivisiones, setCursosYDivisiones] = useState();
    const gettCursosYDivisiones = (datosDeNavegaciónAñoMedición_v6) => {
        //console.log('gettCursosYDivisiones : ', datosDeNavegaciónAñoMedición_v6);
        setCursosYDivisiones(datosDeNavegaciónAñoMedición_v6)
    }

    // debo leer por primera vez acá los datos de los cursos y divisiones también ?? para eso uso el :
    /*
    {
                                    cursosYDivisiones &&
                                    <NavegaciónCursoDivisión
                                        cursosYDivisiones={cursosYDivisiones}
                                    />
                                }
    */
    const onBuscarDatosSelecionadaPorCurso = (dataSeleccionada) => {
        console.log('data seleccionada ------ >' , dataSeleccionada)
    }

    return (
        <>

            <div className="container">

                <div class="row text-center">
                    <div class="col-sm-4 themed-grid-col">
                        Ciclo lectivo y mes medido
                        <NavegaciónAñoMedición_v6
                            navLinkAñoMedicion={navLinkAñoMedicion}
                            gettCursosYDivisiones={gettCursosYDivisiones}
                        />
                    </div>
                    <div class="col-sm-8 themed-grid-col">
                        Cursos y divisiones
                        {
                            cursosYDivisiones &&
                            <NavegaciónCursoDivisión
                                cursosYDivisiones={cursosYDivisiones}
                                onBuscarDatosSelecionadaPorCurso={onBuscarDatosSelecionadaPorCurso}
                            />
                        }
                    </div>
                </div>

                <div class="row text-center">
                    <div class="col-sm-12 themed-grid-col">
                        fila de herramientas
                    </div>
                </div>

                <div class="row text-center">
                    <div class="col-sm-12 themed-grid-col">
                        contenedor de datos
                        <DataContainer
                        />
                    </div>
                </div>

            </div>
            {
                // desactivo todos los meses que no ha sido seleccionados ...               
                //onBuscarDatosSelecionadaPorCurso(dataSeleccionadaPorCurso)                
            }
        </>
    )
}

export default App