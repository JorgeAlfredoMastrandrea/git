// todos los datos y configuraciones deben ir en formato de objetos pasados dentro del array

import React from 'react'
import { Chart } from 'react-google-charts';

export const Barras = (children) => {

  return (
    <>
      <div>
        Barras
        <Chart
          chartType="Bar"
          width="148mm"
          height="400px"
          data={children.src[0]}
          options={children.src[1]}
        />
      </div>
    </>
  )
}
