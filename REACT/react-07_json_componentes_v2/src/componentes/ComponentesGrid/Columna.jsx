import React from 'react'

export const Columna = ({ children }) => {

  return (
    <>
      <div className="col-sm text-center align-middle">
        {children}
      </div>
    </>
  )
}