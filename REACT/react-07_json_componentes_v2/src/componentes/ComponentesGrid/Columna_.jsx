import React from 'react'

export const Columna_ = ({ src, className, ky, children }) => {
    return (
        <div key={ky} className={className}>
            {/* Aquí puedes utilizar la propiedad "src" y renderizar otros elementos */}
            {children}
        </div>
    )
}
