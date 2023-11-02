import React from 'react'

export const Dropdown = ({ submenus }) => {
    return (
        <div>
            {submenus.map((división, index) => (
                <div key={index} className="">
                    <a href={división.linkDatosPorDivisión}>{división.nombre}</a>
                </div>
            ))}
        </div>
    )
}
