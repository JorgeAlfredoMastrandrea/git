import { useState } from 'react'
import './App.css'
import { ComponenteEventos } from './ComponenteEventos'
import { ComponenteEventoContador } from './ComponenteEventoContador';

function App() {
  
  return (
    <>
      <ComponenteEventoContador valor={0}/>
    </>
  )
}

export default App
