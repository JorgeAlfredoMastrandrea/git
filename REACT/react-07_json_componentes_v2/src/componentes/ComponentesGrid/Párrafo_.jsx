import React from 'react'

export const Párrafo_ = ({ src, className, ky, style ,   children }) => {
    return (
        <p key={ky} className={className} styled={style}>
            {src}
        </p>
    )
}
