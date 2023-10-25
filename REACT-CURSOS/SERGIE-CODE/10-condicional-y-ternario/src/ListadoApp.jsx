import React from 'react'

// un condicional sirve para que al momento de renderizar componentes
// o alguna parte de ellos, es mas propio de javascript..pero utilizable
// dentro de react
// este es un componente dentro del componente
const Items = ({ nombre, visto }) => {
  return (
    <li>
      {nombre}
      {/*visto ? ' -Si-' : ' -No visto-'*/}
      {visto && ' -Si-'}
    </li>
  )
}

export const ListadoApp = () => {
  return (
    <div>
      ListadoApp
      <h1>Listado de temas del curso</h1>
      <ol>
        <Items nombre="Tema 1" visto={true}></Items>
        <Items nombre="Tema 2" visto={true}></Items>
        <Items nombre="Tema 3" visto={false}></Items>
        <Items nombre="Tema 4" visto={true}></Items>
        <Items nombre="Tema 5" visto={true}></Items>
        <Items nombre="Tema 6" visto={false}></Items>
        <Items nombre="Tema 7" visto={false}></Items>
      </ol>
    </div>
  )
}
