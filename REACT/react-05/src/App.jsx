// Como pasar data y eventos entre componentes en ReactJs
// https://www.freecodecamp.org/espanol/news/pasar-data-y-eventos-entre-componentes-en-reactjs/

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { NavegaciónCursoDivisión } from './componentes/NavegaciónCursoDivisión'
import { NavegaciónAñoMedición } from './componentes/NavegaciónAñoMedición'
import navLinksData from "./cursos-divisiones.json";
import navLinkAñoMedicion from "./mediciones-2022.json";


function App() {

  return (
    <>
      <NavegaciónAñoMedición navLinkAñoMedicion={navLinkAñoMedicion} />      
    </>
  )
}

export default App
