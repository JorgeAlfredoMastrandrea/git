// https://bobbyhadz.com/blog/react-fetch-data-on-button-click

// https://marketsplash.com/tutorials/react-js/how-to-fetch-data-from-json-file-in-react-js/

// https://www.pluralsight.com/guides/fetch-data-from-a-json-file-in-a-react-app

// este componente solo lo que hace es llamar los datos que están en formato json

// https://stackoverflow.com/questions/6254050/how-to-add-an-object-to-an-array

import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { DataLayout } from './DataLayout';
//import { useMemo } from 'react';

export const DataProvider = (props) => {

  const [data, setData] = useState([]);
  const [dataDictionary, setDataDictionary] = useState({});  

  const fetchData = async () => {
    //console.log('-->', props.division_id)
    if ( dataDictionary[props.division_id] ) {
      console.log('ya esta cargado no hace falta hacer fetch !!')
      setData(dataDictionary[props.division_id]);
    } else {
      try {
        console.log('haciendo fetch con la API..!!!')
        const response = await fetch('datosJSON/' + props.dataSeleccionadaPorCurso)
        const data = await response.json();
        setData(data);
        //setDataDictionary(prevData => ({ ...prevData, newData: data }));
        //setDataDictionary(prevData => ({ ...prevData, [`newData${Date.now()}`]: data }));
        setDataDictionary(prevData => ({ ...prevData, [props.division_id]: data }));
      } catch (error) {
        console.log(error)
      }
    }
  }
  // siempre se va a quedar escuchando los cambios, cada vez que se manda un url diferente, se eejecuta useEffect
  useEffect(() => {
    //console.log('esto se hace una sola vez !!!... haciendo fetch a : ', 'datosJSON/' + props.dataSeleccionadaPorCurso)
    fetchData()
  }, [props.dataSeleccionadaPorCurso])

  // const ver_dataDictionary = () => {
  //   const dataDictionaryLength = Object.keys(dataDictionary).length;
  //   //console.log('layout-> ', data, 'dataDictionaryLongitud ', dataDictionaryLength, 'dataDictionary ', dataDictionary)
  // }

  return (
    <>
      DataProvider
      <p>
        {props.dataSeleccionadaPorCurso}
      </p>

      <p>        
        {
          data && data.length > 0 && data.map(item =>
            <div key={item.id} >
              <span><strong>Dato: {
                //item.título
                // ver_dataDictionary({})
              }</strong></span>
              {
                <DataLayout data={data} />
              }
              <span><strong>... esto -el valor que está en data !!- debo devolverlo al DataLayout ..!!</strong></span>
            </div>
          )}
      </p>
    </>
  )
}
