import React from 'react'

export const Párrafo_ = ({ src, className, ky, children }) => {
    return (
        <p key={ky} className={className}>
            {src}
        </p>
    )
}
