// todos los datos y configuraciones deben ir en formato de objetos pasados dentro del array

import React from 'react'
import { Chart } from 'react-google-charts';

export const BarrasGoogleChart = (children) => { 

  return (
    <>
      <div>
        Barras
        <Chart
          chartType="Bar"          
          data={children.src[0]}
          options={children.src[1]}
          width={ children.src[2] }
          height={ children.src[3] }
        />
      </div>
    </>
  )
}
