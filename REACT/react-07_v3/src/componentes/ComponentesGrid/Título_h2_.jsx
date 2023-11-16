import React from 'react'

export const Título_h2_ = ({ src, className, id, mKey, style, children }) => {
  return (
    <h2 id={id} key={mKey} className={className} style={style}>
      {src}
    </h2>
  )
}