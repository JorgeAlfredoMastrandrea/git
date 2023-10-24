import { useState } from 'react'
import './App.css'
import { PrimerComponente } from './PrimerComponente'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PrimerComponente/>
    </>
  )
}

export default App
