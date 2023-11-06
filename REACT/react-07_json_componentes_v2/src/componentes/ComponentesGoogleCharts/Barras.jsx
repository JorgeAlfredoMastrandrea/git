import React from 'react'
import { Chart } from 'react-google-charts';
import { BarrasData } from './BarrasData';
import { BarrasOptions } from './BarrasOptions';


export const Barras = ( {children} ) => {

  console.log( {children} )
  console.log('---------------------')

  return (
    <>
      <div>
        Barras
        <BarrasData children={children.barras_data} />
        <BarrasOptions children={children.barras_options}/>
      </div>
    </>
  )
}
