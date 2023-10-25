/*
vamos a genera una función de escucha en este componente (en el padre)

utilizando las funciones de escucha de javascript:
  -onClick, onSubmit, etc

*/

import React from 'react'
import { useState } from 'react'
import { AgregarTarea } from './AgregarTarea'

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
    { id:0 , nombre: "Tema 1", visto: true },
    { id:1 , nombre: "Tema 2", visto: true },
    { id:2 , nombre: "Tema 3", visto: false },
    { id:3 , nombre: "Tema 4", visto: true },
    { id:4 , nombre: "Tema 5", visto: true },
    { id:5 , nombre: "Tema 6", visto: false },
    { id:6 , nombre: "Tema 7", visto: false },
    { id:7 , nombre: "Tema 8", visto: true },
  ]
  const [arreglo, setArreglo] = useState(listadoSecciones) // lo podemos inicializar con cualquier cosa
  //console.log(arreglo);

  const onAgregarTarea = (valor) => {    
    
    let val = valor.trim(); // para quitar los valores vacios..
    if (val < 1 ) return; // se retorna si hay valores vacios
    
    console.log(valor);
    
    const envio = {
      id: arreglo.length,
      nombre : valor,
      visto : false,
    }

    setArreglo([...arreglo , envio]);

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
