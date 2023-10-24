import { useState } from 'react'
import './App.css'
import { ComponenteEventos } from './ComponenteEventos'
import { ComponenteEventoContador } from './ComponenteEventoContador';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ComponenteEventoContador valor={0}/>
    </>
  )
}

export default App
