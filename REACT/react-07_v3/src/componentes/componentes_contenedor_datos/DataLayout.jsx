import React from 'react'
import { RenderizarComponentes_v2 } from '../RenderizarComponentes/RenderizarComponentes_v2/';

export const DataLayout = (props) => {

  return (
    <>
      {
        props.data.map(data => RenderizarComponentes_v2(data, { additionalProp: 'value' }))
      }
    </>
  )
}
