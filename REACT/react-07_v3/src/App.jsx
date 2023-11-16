import { useState, useRef } from 'react'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import navLinkAñoMedicion from "./medicionesAñosMesesCursosDivisiones.json";
import { NavegaciónAñoMedición_v6 } from '../src/componentes/componentes_navegación_año_meses/NavegaciónAñoMedición_v6';
import { NavegaciónCursoDivisión } from '../src/componentes/componentes_navegación_curso_división/NavegaciónCursoDivisión';
import { DataProvider } from './componentes/componentes_contenedor_datos/DataProvider';

function App() {

    const [dataSeleccionadaPorCurso, cambiarDataSeleccionadaPorCurso] = useState(); // ???
    const [division_id, setDivision_id] = useState(); // ???

    const [cursosYDivisiones, setCursosYDivisiones] = useState();
    const gettCursosYDivisiones = (datosDeNavegaciónAñoMedición_v6) => {
        setCursosYDivisiones(datosDeNavegaciónAñoMedición_v6)
    }
    const onBuscarDatosSelecionadaPorCurso = (dataSeleccionada, divisionID, objetoDatosPorDivisión) => {
        cambiarDataSeleccionadaPorCurso(dataSeleccionada) // ----> le pasa al DP el enlace a buscar ... ojo ese es el enlace , no los datos del layout !!
        setDivision_id(divisionID)
    }

    return (
        <>
            <div className="container-xxl p-0 ">

                <div className="row text-center">
                    <div className="col-sm-12 themed-grid-col p-0">
                        Datos institucionales
                    </div>
                </div>

                <div className="row text-center">
                    <div className="col-sm-2 themed-grid-col p-0">
                        Ciclo lectivo y mes medido
                        <NavegaciónAñoMedición_v6
                            navLinkAñoMedicion={navLinkAñoMedicion}
                            gettCursosYDivisiones={gettCursosYDivisiones}
                        />
                    </div>
                    <div className="col-sm-10 themed-grid-col p-0">
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

                <div className="row text-center ">
                    <div className="col-sm-12 themed-grid-col p-0 contenido-scrollable layout-style" >
                        {
                            dataSeleccionadaPorCurso &&
                            <DataProvider
                                navLinkAñoMedicion={navLinkAñoMedicion}
                                division_id={division_id}
                                dataSeleccionadaPorCurso={dataSeleccionadaPorCurso}
                            />
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default App