import { useState } from 'react'
import './App.css'
import { SegundoComponente } from './SegundoComponente'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SegundoComponente />
    </>
  )
}

export default App
