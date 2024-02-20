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
    { id: 0, nombre: "Tema 1", visto: true },
    { id: 1, nombre: "Tema 2", visto: true },
    { id: 2, nombre: "Tema 3", visto: false },
  ]
  const [arreglo, setArreglo] = useState(listadoSecciones) // lo podemos inicializar con cualquier cosa
  //console.log(arreglo);


  // vamos a genera una función de escucha en este componente (en el padre)
  // utilizando las funciones de escucha de javascript:
  //   -onClick, onSubmit, etc
  // la idea es que no deje guardar valores vacios 
  // en la lista..
  const onAgregarTarea = (valor) => {

    let val = valor.trim(); // para quitar los valores vacios..
    if (val < 1) return; // se retorna si hay valores vacios

    console.log(valor);

    const envio = {
      id: arreglo.length,
      nombre: valor,
      visto: false,
    }
    setArreglo([...arreglo, envio]);
  }

  return (
    <div>
      ListadoApp
      <h1>Listado de temas del curso</h1>
      <AgregarTarea agregarTarea={onAgregarTarea}></AgregarTarea>
      <ol>
        {arreglo.map(itemLista =>
          <Items
            key={itemLista.id}
            nombre={itemLista.nombre}
            visto={itemLista.visto}
          >
          </Items>)}
      </ol>
    </div>
  )
}
