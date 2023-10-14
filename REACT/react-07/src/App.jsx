import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './grid.css';
import { NavegaciónAñoMedición } from './componentes/NavegaciónAñoMedición';
import { NavegaciónCursoDivisión } from './componentes/NavegaciónCursoDivisión';
import navLinkAñoMedicion from "./mediciones-2022.json";
import navLinksData from "./cursos-divisiones.json";


function App() {


  return (
    <>
      <div className="d-flex flex-nowrap ">
        <div className="container-fluid text-center p-0">
          <div className="vh-100 row mb-3 text-center ">
            <div className="col-sm-12 col-lg-12 themed-grid-col p-0">

              <div id="contenedor-principal">

                <div id="fila-fecha-">
                  <div className="row">
                    <div className="container-fluid text-center p-0">
                      <div className="row text-center mt-0 ">
                        <div className="col-sm-12 col-lg-5 themed-grid-col p-0">
                          Ciclo lectivo / Mes
                          <NavegaciónAñoMedición navLinkAñoMedicion={navLinkAñoMedicion} />
                        </div>
                        <div className="col-sm-12 col-lg-7 themed-grid-col p-0">
                          Cursos y divisiones
                          <NavegaciónCursoDivisión navLinksData={navLinksData} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


                <div id="fila-herramientas"></div>
                <div className="row">
                  <div className="container-fluid text-center ">
                    <div className="row text-center ">
                      <div className="themed-grid-col p-0">
                        fila de herramientas
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="container-fluid text-center">
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
                        información</div>
                      <div className="col with .gx-4 gutters themed-grid-col p-1">acá va una tarjeta de
                        información con mas información con mucha mas otras cosas</div>
                      <div className="col with .gx-4 gutters themed-grid-col p-1">acá va una tarjeta de
                        información</div>
                    </div>
                    <div className="row text-center">
                      <div className="col with .gx-4 gutters themed-grid-col p-1">acá va una tarjeta de
                        información</div>
                      <div className="col with .gx-4 gutters themed-grid-col p-1">acá va una tarjeta de
                        información con mas información con mucha mas otras cosas</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
