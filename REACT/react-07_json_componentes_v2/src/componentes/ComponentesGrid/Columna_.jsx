import React from 'react'

export const Columna_ = ({ src, className, children }) => {
    console.log(src)
    return (
        <>
            <div key={src} className={className}>
                {/* Aquí puedes utilizar la propiedad "src" y renderizar otros elementos */}
                {children}
            </div>
        </>
    )
}
