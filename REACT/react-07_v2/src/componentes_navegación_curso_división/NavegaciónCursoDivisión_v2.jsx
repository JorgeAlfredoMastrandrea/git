import React from 'react'
import { Divisiones } from './Divisiones';

export const NavegaciónCursoDivisión_v2 = (props) => {

    const data = props.cursosYDivisiones;


    return (
        <div>
            {data.map((curso, index) => {
                return (
                    <Divisiones items={curso} key={index} />
                );
            })}
        </div>
    )
}
