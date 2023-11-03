import { useState } from 'react'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './grid.css';
import './meses.css';
//import './styles.css';

import navLinkAñoMedicion from "./medicionesAñosMesesCursosDivisiones.json";
import { NavegaciónAñoMedición_v6 } from './componentes_navegación_año_meses/NavegaciónAñoMedición_v6';
import { NavegaciónCursoDivisión } from './componentes_navegación_curso_división/NavegaciónCursoDivisión';
import { DataProvider } from './componentes_contenedor_datos/DataProvider';

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
        console.log('data seleccionada ------ >', dataSeleccionada)
        cambiarDataSeleccionadaPorCurso(dataSeleccionada)
    }

    return (
        <>

            <div className="container-xxl p-0 ">

                <div class="row text-center">
                    <div class="col-sm-12 themed-grid-col p-0">
                        Datos institucionales
                    </div>
                </div>

                <div class="row text-center">
                    <div class="col-sm-2 themed-grid-col p-0">
                        Ciclo lectivo y mes medido
                        <NavegaciónAñoMedición_v6
                            navLinkAñoMedicion={navLinkAñoMedicion}
                            gettCursosYDivisiones={gettCursosYDivisiones}
                        />
                    </div>
                    <div class="col-sm-10 themed-grid-col p-0">
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
                    <div class="col-sm-12 themed-grid-col p-0">
                        fila de herramientas
                    </div>
                </div>

                <div class="row text-center">
                    <div class="col-sm-12 themed-grid-col p-0">
                        contenedor de datos
                        {
                            dataSeleccionadaPorCurso &&
                            <DataProvider
                                dataSeleccionadaPorCurso={dataSeleccionadaPorCurso}
                            />
                        }

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