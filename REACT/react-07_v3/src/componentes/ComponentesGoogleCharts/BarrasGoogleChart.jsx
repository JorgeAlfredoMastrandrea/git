// todos los datos y configuraciones deben ir en formato de objetos pasados dentro del array

import React from 'react'
import { Chart } from 'react-google-charts';

export const BarrasGoogleChart = (children) => {
  
  console.log(children.data)
  console.log('--------------------------------')
  console.log(children.options)

  return (
    <>
      <div>
        { <Chart
          chartType="Bar"          
          data={children.data}
          options={children.options}          
          width={ children.width }          
          height={ children.height }
        /> }
      </div>
    </>
  )
}