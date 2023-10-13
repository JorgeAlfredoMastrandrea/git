import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './grid.css';
import { NavegaciónAñoMedición } from './componentes/NavegaciónAñoMedición';
import { NavegaciónCursoDivisión } from './componentes/NavegaciónCursoDivisión';
import navLinkAñoMedicion from "./mediciones-2022.json";
import navLinksData from "./cursos-divisiones.json";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="d-flex flex-nowrap">

        <div className="container-fluid text-center">

          <div className="row">
            <div className="col-md-12 themed-grid-col">
              <NavegaciónAñoMedición navLinkAñoMedicion={navLinkAñoMedicion} />
            </div>
          </div>

          <div className="vh-100 row mb-3">
            <div className="flex-shrink-0 p-0 col-sm-6 col-lg-1 themed-grid-col">

              <div id="barra-lateral">
                <NavegaciónCursoDivisión navLinksData={navLinksData}/>
              </div>

            </div>

            <div className="col-sm-6 col-lg-11 themed-grid-col">

              <div id="contenedor-lateral">

                <div className="row">

                  <div className="container-fluid text-center">
                    los datos que voy a visualizar van acá los puedo dividir en filas y adentro por
                    columnas..estarán dentro de otro contenedor..el cual será el que dibuja el contenido ya
                    armado junto con los datos
                    <div className="row text-center">
                      <div className="col with .gx-4 gutters themed-grid-col">acá va una tarjeta de
                        información</div>
                      <div className="col with .gx-4 gutters themed-grid-col">acá va una tarjeta de
                        información con mas información</div>
                      <div className="col with .gx-4 gutters themed-grid-col">acá va una tarjeta de
                        información con mas información con mucha mas otras cosas</div>
                      <div className="col with .gx-4 gutters themed-grid-col">acá va una tarjeta de
                        información</div>
                    </div>
                    <div className="row text-center">
                      <div className="col with .gx-4 gutters themed-grid-col">acá va una tarjeta de
                        información</div>
                      <div className="col with .gx-4 gutters themed-grid-col">acá va una tarjeta de
                        información con mas información con mucha mas otras cosas</div>
                      <div className="col with .gx-4 gutters themed-grid-col">acá va una tarjeta de
                        información</div>
                    </div>
                    <div className="row text-center">
                      <div className="col with .gx-4 gutters themed-grid-col">acá va una tarjeta de
                        información</div>
                      <div className="col with .gx-4 gutters themed-grid-col">acá va una tarjeta de
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
