import React from 'react'

export const Fila_ = ({ src, className,  children }) => {
    return (
        <>
            <div key={src} className={className}>
                {/* Aquí puedes utilizar la propiedad "src" y renderizar otros elementos */}
                {children}
            </div>
        </>
    )
}

//<div className={className}>
//            {/* Aquí puedes utilizar la propiedad "src" y renderizar otros elementos */}
//            <img src={src} alt="Imagen" />
//            {children}
//        </div>