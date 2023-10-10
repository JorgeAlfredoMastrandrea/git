import React from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Navegacion_v1 = (propiedades ) => {
    const { navLinksData , estiloClassName} = propiedades;
    // voy a recorrer el objeto json recibido, uso un objeto .map para hacerlo
    // en caso de encontrar una propiedad de tipo enviado por parámetro entonces se trata de un li principal
    return (
        <ul className={estiloClassName}>
            {navLinksData.map((el, i) => {
                if (el.división) {
                    return (
                        <li key={el.id} className="mb-1">
                            <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
                                data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
                                <a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">
                                    <span>{el.nombre}</span>
                                </a>
                            </button>
                        </li>
                    );
                }
            })}
        </ul>
    );
}