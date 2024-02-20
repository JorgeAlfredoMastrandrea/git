import { ComponenteProps } from './ComponenteProps'

function App() {

  return (
    <>
    <div> 
      <ComponenteProps 
      titulo='Esto es un objeto que le doy como props al componente'
      subtitulo='Esto es otro texto, tambien es un objeto'
      numero={4}/>     
    </div>
    </>
  )
}

export default App
