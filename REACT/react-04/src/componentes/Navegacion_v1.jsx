import React from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Navegacion_v1 = (propiedades) => {
    const { navLinksData } = propiedades;
    const [showSubMenu, setShowSubMenu] = useState([]);

    const subMenuOnClickrHandler = (subMenuId) => {
        setShowSubMenu((prev) => {
            let arr = [...prev];
            arr[subMenuId] = true;
            return arr;
        });
    };

    const subMenuOnMouseLeaveHandler = (subMenuId) => {
        setShowSubMenu((prev) => {
            let arr = [...prev];
            arr[subMenuId] = false;
            return arr;
        });
    };

    // voy a recorrer el objeto json recibido, uso un objeto .map para hacerlo
    // en caso de encontrar una propiedad de tipo enviado por parámetro entonces se trata de un li principal
    return (

        <div className="px-7 list-unstyled p-0 mb-8 mt-8">
            {navLinksData.map((el, i) => {
                return (
                    <>
                        <div key={el.id} className="px-3" onClick={(event) => subMenuOnClickrHandler(el.id)} onMouseLeave={(event) => subMenuOnMouseLeaveHandler(el.id)}>
                            <button className="btn d-inline-flex align-items-center rounded border-1 collapsed px-0 py-0"
                                data-bs-toggle="collapse" data-bs-target="#" aria-expanded="true">
                                <a href="#" className="h4 link-body-emphasis d-inline-flex text-decoration-none rounded"><strong>{el.nombre}</strong></a>
                            </button>
                            {showSubMenu[el.id] &&
                                el.división.map((ele) => {
                                    return (
                                        <div key={ele.id} className="btn list-unstyled p-0 rounded border-0">
                                            <button className="btn p-0" data-bs-toggle="collapse" data-bs-target="#" aria-expanded="true">
                                                <a href="#" className="text-primary h6 p-1"><small>{ele.nombre}</small></a>
                                            </button>
                                        </div>
                                    );
                                })}
                        </div>
                        <div className="border-bottom my-0"></div>
                    </>
                );
            })}
        </div>

    );
}