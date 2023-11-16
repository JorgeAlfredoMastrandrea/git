import React from 'react'

export const Título_h4_ = ({ src, className, id, mKey, style, children }) => {
  return (
    <h4 id={id} key={mKey} className={className} style={style}>
      {src}
    </h4>
  )
}