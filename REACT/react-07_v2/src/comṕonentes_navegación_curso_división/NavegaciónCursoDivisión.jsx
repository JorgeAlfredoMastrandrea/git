import React from 'react'

export const NavegaciónCursoDivisión = (props) => {

  console.log('los cursos y las divisiones : ', props.cursosYDivisiones, ' ')
  const data = props.cursosYDivisiones;

  return (
    <div className="px-7 list-unstyled p-0 mb-8 mt-8">
      {data.map((el, i) => {
        return (
          <>
            <div>
              {el.curso}

            </div>
            <div className="border-bottom my-0"></div>
          </>
        );
      })}
    </div>
  );
}
