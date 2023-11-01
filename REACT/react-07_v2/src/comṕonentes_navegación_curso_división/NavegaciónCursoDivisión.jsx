import React from 'react'

export const NavegaciónCursoDivisión = (props) => {
  return (
    <>
    {
        console.log('los cursos y las divisiones : ' , props.cursosYDivisiones)
    }
    <div>
        <h1>
            {props.cursosYDivisiones}
        </h1>        
    </div>
    </>
  )
}
