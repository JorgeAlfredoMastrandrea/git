import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navegacion } from './componentes/Navegacion'
import navLinksData from "./cursos-divisiones.json";

function App() { 

  return (
    <>
      <div className='App'>
      <div className='header-parent'>
        <header className='header'>          
          <Navegacion navLinksData={navLinksData} />
        </header>
      </div>
      <body>
        <main className='main-content'>
          <h1 className='heading'>Dynamic Navigation</h1>
        </main>
      </body>
    </div>
    </>
  )
}

export default App
