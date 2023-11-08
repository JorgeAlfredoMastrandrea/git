import React from 'react'

export const Párrafo = ({ src }) => {
    return (
        <>
            <p className={src.className}>
                { src.texto }
            </p>
        </>
    )
}
