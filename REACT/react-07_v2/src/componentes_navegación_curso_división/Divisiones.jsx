import React from 'react'
import { Dropdown } from './Dropdown'

export const Divisiones = ({ items }) => {
    return (
        <div className="d-inline-flex align-items-center">
            {items.submenu ? (
                <>
                    <button type="button" aria-haspopup="menu">
                        {items.nombre}{' '}
                    </button>
                    <Dropdown submenus={items.nombre} />
                </>
            ) : (
                <a href={items.url}>{items.nombre}</a>
            )
            }
        </div>
    )
}
