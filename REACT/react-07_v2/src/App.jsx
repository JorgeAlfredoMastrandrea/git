import { useState } from 'react'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './grid.css';
import './meses.css';

import navLinkAñoMedicion from "./medicionesAñosMeses.json";
import { NavegaciónAñoMedición_v6 } from './componentes2/NavegaciónAñoMedición_v6';



function App() {

    return (
        <>

            <div className="d-flex flex-nowrap ">
                <div className="vh-100 row  text-center ">
                    <div id="contenedor-principal">

                        <div id="fila-fecha-cursos-divisiones" className="row">
                            <div className="col-sm-12 col-lg-2 themed-grid-col p-0">
                                Ciclo lectivo y mes medido
                                <NavegaciónAñoMedición_v6
                                    navLinkAñoMedicion={navLinkAñoMedicion} />
                            </div>
                            <div className="col-sm-12 col-lg-2 themed-grid-col p-3 ">
                                <strong><h4>

                                </h4></strong>
                            </div>
                            <div className="col-sm-12 col-lg-8 themed-grid-col p-0">
                                Cursos y divisiones

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