import React from 'react'

export const Componente1 = ({handleClick}) => {
  return (
    <div>
        <button onClick={event => handleClick(1)}>Click</button>
    </div>
  )
}
