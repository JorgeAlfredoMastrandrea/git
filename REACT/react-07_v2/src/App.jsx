import { useState } from 'react'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './grid.css';
import './meses.css';

import navLinkAñoMedicion from "./medicionesAñosMesesCursosDivisiones.json";
import { NavegaciónAñoMedición_v6 } from './componentes_navegación_año_meses/NavegaciónAñoMedición_v6';
import { NavegaciónCursoDivisión } from './comṕonentes_navegación_curso_división/NavegaciónCursoDivisión';


function App() {

    const [cursosYDivisiones , setCursosYDivisiones] = useState();    
    const gettCursosYDivisiones = (datosDeNavegaciónAñoMedición_v6) => {
        //console.log('gettCursosYDivisiones : ', datosDeNavegaciónAñoMedición_v6);
        setCursosYDivisiones(datosDeNavegaciónAñoMedición_v6)
    }

    return (
        <>

            <div className="d-flex flex-nowrap ">
                <div className="vh-100 row  text-center ">
                    <div id="contenedor-principal">

                        <div id="fila-fecha-cursos-divisiones" className="row">
                            <div className="col-sm-12 col-lg-2 themed-grid-col p-0">
                                Ciclo lectivo y mes medido
                                <NavegaciónAñoMedición_v6
                                    navLinkAñoMedicion={navLinkAñoMedicion}
                                    gettCursosYDivisiones={gettCursosYDivisiones}
                                />
                            </div>

                            <div className="col-sm-12 col-lg-10 themed-grid-col p-0">
                                Cursos y divisiones
                                <NavegaciónCursoDivisión
                                    cursosYDivisiones={cursosYDivisiones}
                                />
                            </div>
                        </div>


                        <div id="fila-herramientas" className="row">
                            <div className="themed-grid-col p-0">
                                fila de herramientas
                            </div>
                        </div>

                        <div className="row text-center">
                            <div className="col with .gx-4 gutters themed-grid-col p-1">acá va una tarjeta de
                                información</div>
                            <div className="col with .gx-4 gutters themed-grid-col p-1">acá va una tarjeta de
                                información con mas información</div>
                            <div className="col with .gx-4 gutters themed-grid-col p-1">acá va una tarjeta de
                                información con mas información con mucha mas otras cosas</div>
                            <div className="col with .gx-4 gutters themed-grid-col p-1">acá va una tarjeta de
                                información</div>
                        </div>
                        <div className="row text-center">
                            <div className="col with .gx-4 gutters themed-grid-col p-1">acá va una tarjeta de

                            </div>
                        </div>


                    </div>
                </div>
            </div>


        </>
    )
}

export default App