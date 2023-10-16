// leer un archivo json
// How to Read Local JSON File in React JS? JSON with React
// https://www.youtube.com/watch?v=u9prsocEOt0

import React, { useEffect, useState } from 'react';
import { Item } from './Item';
import medicionesAñosMeses from '../medicionesAñosMeses.json'

export const Container = () => {

  const [list , setList] = useState([]);

  /*
  useEffect(() => {
    fetch("http....")
    .then(res => res.json())
    .then(data => setList(data))
  } , [])
  */

  return (
    <div>
      <ul>
        {list.map((listItem) => <Item key= {medicionesAñosMeses.id} listItem={listItem} />)}
      </ul>
    </div>
  );
}
