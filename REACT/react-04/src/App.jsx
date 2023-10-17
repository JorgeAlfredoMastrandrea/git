// Como pasar data y eventos entre componentes en ReactJs
// https://www.freecodecamp.org/espanol/news/pasar-data-y-eventos-entre-componentes-en-reactjs/

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navegacion_v1 } from './componentes/Navegacion_v1'
import navLinksData from "./cursos-divisiones.json";


function App() {
  
  return (
    <>
      <Navegacion_v1 navLinksData={navLinksData}/>
    </>
  )
}

export default App
