// https://bobbyhadz.com/blog/react-fetch-data-on-button-click

// https://marketsplash.com/tutorials/react-js/how-to-fetch-data-from-json-file-in-react-js/

// https://www.pluralsight.com/guides/fetch-data-from-a-json-file-in-a-react-app

// este componente solo lo que hace es llamar los datos que están en formato json

// https://stackoverflow.com/questions/6254050/how-to-add-an-object-to-an-array

import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
//import { useMemo } from 'react';

export const DataProvider = (props) => {

  const [data, setData] = useState([]);



  const fetchData = async () => {
    try {
      const response = await fetch('datosJSON/' + props.dataSeleccionadaPorCurso)
      const data = await response.json();
      setData(data);
      // console.log(data)
      // un array que va a mantener objetos que son los datos que se van leyendo
      // const dataObjectos = useMemo(() => dataObjectos.push(data) , [])
      // console.log('dataObjectos ..... : ', dataObjectos)

    } catch (error) {
      console.log(error)
    }
  }



  // siempre se va a quedar escuchando los cambios, cada vez que se manda un url diferente, se eejecuta useEffect
  useEffect(() => {
    console.log('esto se hace una sola vez !!!... haciendo fetch a : ', 'datosJSON/' + props.dataSeleccionadaPorCurso)
    // este componente no renderiza nada, lo que hace es leer el JSON y devolverlo a otro comp que lo va a interpretar y ejecutar
    fetchData()
  }, [props.dataSeleccionadaPorCurso])


  const onEnviarDatosLayout = (datos) => {    
    //console.log('DataProvider---- ' , datos)
    props.onMostrarDatosSeleccionadoPorCurso(datos);
    
}

  return (
    <div>
      DataProvider
      <p>
        {props.dataSeleccionadaPorCurso}
      </p>

      <p>
        {
          // {
          //   data && data.length>0 && data.map((item)=><p>{item.about}</p>)
          // }
          // no se renderiza nada, lo que hace es devolver el resultado para que el DataLayout lo dibuje
          // pero lo que debe hacer es guardar el resultado en un objeto que él mantiene (DataProvider)..
        }
        {
          data && data.length > 0 && data.map(item =>
            <div key={item.id}>
              <span><strong>Dato: { item.título }</strong></span> { onEnviarDatosLayout(data) }
              <span><strong>... esto -el valor que está en data !!- debo devolverlo al DataLayout ..!!</strong></span>
            </div>
          )}
      </p>
      
    
    </div>

  )
}
