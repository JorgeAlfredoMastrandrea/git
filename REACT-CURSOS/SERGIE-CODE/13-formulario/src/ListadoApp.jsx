import React from 'react'
import { useState } from 'react'
import { AgregarTarea } from './AgregarTarea'

const Items = ({ nombre, visto }) => {
  return (
    <li>
      {nombre}
      {visto ? ' -Si-' : ' -No visto-'}
    </li>
  )
}

export const ListadoApp = () => {

  let listadoSecciones = [
    { nombre: "Tema 1", visto: true },
    { nombre: "Tema 2", visto: true },
    { nombre: "Tema 3", visto: false },    
  ]
  const [arreglo, setArreglo] = useState(listadoSecciones) // lo podemos inicializar con cualquier cosa
  console.log(arreglo);

  return (
    <div>
      ListadoApp
      <h1>Listado de temas del curso</h1>
      <AgregarTarea></AgregarTarea>
      <ol>
        {arreglo.map(itemLista =>

          <Items
            key={itemLista.nombre}
            nombre={itemLista.nombre}
            visto={itemLista.visto}
          >
          </Items>)}        
      </ol>
    </div>
  )
}
