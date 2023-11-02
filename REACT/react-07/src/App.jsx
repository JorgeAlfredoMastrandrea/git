// https://dev.to/andydziabo/how-to-pass-data-between-sibling-components-in-react-2cjg

import { useState } from 'react'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './grid.css';
import './meses.css';

import navLinkAñoMedicion from "./medicionesAñosMeses.json";
import { NavegaciónAñoMedición } from './componentes/NavegaciónAñoMedición';
import { NavegaciónCursoDivisión } from './componentes/NavegaciónCursoDivisión';
import { NavegaciónAñoMedición_v5 } from './componentes/NavegaciónAñoMedición_v5';
import { NavegaciónMesMedición } from './componentes/NavegaciónMesMedición';
import { DataInspect } from './componentes/DataInspect';

import navLinksData from "./cursos-divisiones.json";


function App() {

  const [mesAMostrarSeleccionado, estableceMesAMostrar] = useState('');

  const navegacionAñoMedicionAApp = (datosNavegacionAñoMedicion) => {
    estableceMesAMostrar(datosNavegacionAñoMedicion);
    console.log('App -----------------> : ', datosNavegacionAñoMedicion)
  }

  return (
    <>

      <div className="d-flex flex-nowrap ">
        <div className="vh-100 row  text-center ">
          <div id="contenedor-principal">



            <div id="fila-fecha-cursos-divisiones" className="row">
              <div className="col-sm-12 col-lg-2 themed-grid-col p-0">
                Ciclo lectivo
                <NavegaciónAñoMedición_v5
                  navLinkAñoMedicion={navLinkAñoMedicion}
                  navegacionAñoMedicionAApp={navegacionAñoMedicionAApp}
                />

              </div>
              <div className="col-sm-12 col-lg-2 themed-grid-col p-3 ">
                <strong><h4>< NavegaciónMesMedición
                  navLinkAñoMedicion={navLinkAñoMedicion}
                  mesAMostrarSeleccionado={mesAMostrarSeleccionado} />
                </h4></strong>
              </div>
              <div className="col-sm-12 col-lg-8 themed-grid-col p-0">
                Cursos y divisiones
                <NavegaciónCursoDivisión navLinksData={navLinksData}/>

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
                <DataInspect />
              </div>
            </div>


          </div>
        </div>
      </div>


    </>
  )
}

export default App
