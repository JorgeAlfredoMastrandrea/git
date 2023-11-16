import React from 'react'

export const Título_h3_ = ({ src, className, id, mKey, style, children }) => {
  return (
    <h3 id={id} key={mKey} className={className} style={style}>
      {src}
    </h3>
  )
}