import { useState } from 'react'
import './App.css'
import { ComponenteEventos } from './ComponenteEventos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ComponenteEventos valor={0}/>
    </>
  )
}

export default App
