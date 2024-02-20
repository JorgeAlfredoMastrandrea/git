import React from 'react'
import { useState } from 'react'

// un condicional sirve para que al momento de renderizar componentes
// o alguna parte de ellos, es mas propio de javascript..pero utilizable
// dentro de react
// este es un componente dentro del componente
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
    { nombre: "Tema 4", visto: true },
    { nombre: "Tema 5", visto: true },
    { nombre: "Tema 6", visto: false },
    { nombre: "Tema 7", visto: false },
  ]
  const [arreglo, setArreglo] = useState(listadoSecciones) // lo podemos inicializar con cualquier cosa
  //console.log(arreglo);

  const addTask = () => {
    // no podemos usar push en react porque no vamos a poder visualizar
    // el nuevo item agregado ...por eso se usa el useState (setArreglo)
    // no se puede usar push cuando estamos tratando de modificar un estado..
    // se pasa un array con el spread operator ... , y luego { } el nuevo objeto
    setArreglo([...arreglo, { nombre: 'nuevo', visto: false }]);
    console.log(arreglo);
  }

  return (
    <div>
      ListadoApp
      <h1>Listado de temas del curso</h1>
      <ol>
        {arreglo.map(itemLista =>

          <Items
            key={itemLista.nombre}
            nombre={itemLista.nombre}
            visto={itemLista.visto}
          >
          </Items>)}
        <button onClick={() => addTask()}>agregar Tarea</button>
      </ol>
    </div>
  )
}
