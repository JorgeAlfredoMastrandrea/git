import React from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Navegacion_v1 = (propiedades) => {
    const { navLinksData, estiloClassName } = propiedades;
    const [showSubMenu, setShowSubMenu] = useState([]);

    const variants = {
        open: { opacity: 1, x: 0 },
        closed: { opacity: 0, x: "-100%" },
    };

    const subMenuOnMouseEnterHandler = (subMenuId) => {
        setShowSubMenu((prev) => {
            console.log("");
            console.log("running");
            let arr = [...prev];
            arr[subMenuId] = true;
            return arr;
        });
    };

    const subMenuOnMouseLeaveHandler = (subMenuId) => {
        setShowSubMenu((prev) => {
            console.log("running");
            let arr = [...prev];
            arr[subMenuId] = false;
            return arr;
        });
    };

    // voy a recorrer el objeto json recibido, uso un objeto .map para hacerlo
    // en caso de encontrar una propiedad de tipo enviado por parámetro entonces se trata de un li principal
    return (
        <ul className={estiloClassName}>
            {navLinksData.map((el, i) => {
                if (!el.división) {
                    console.log("!el.división");
                    return (
                        <div className="collapse show">
                            <ul className="list-unstyled ps-0">
                                <li key={el.id} className="mb-1" >
                                    <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
                                        data-bs-toggle="collapse" data-bs-target="#" aria-expanded="true">
                                        <a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">
                                            <span>{el.nombre}</span>
                                        </a>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    );
                }

                return (                    
                    <div className="collapse show">
                        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                            <li key={el.id} className="mb-1" onMouseEnter={(event) => subMenuOnMouseEnterHandler(el.id)} onMouseLeave={(event) => subMenuOnMouseLeaveHandler(el.id)}>
                                <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
                                    data-bs-toggle="collapse" data-bs-target="#" aria-expanded="true">
                                    <a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">
                                        <span>{el.nombre}</span>
                                    </a>
                                </button>

                                {showSubMenu[el.id] &&
                                    el.división.map((ele) => {
                                        if (!ele.división) {
                                            console.log("!ele.división");
                                            return (
                                                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                                    <li key={ele.id} className="link-body-emphasis d-inline-flex text-decoration-none rounded">
                                                        <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
                                                            data-bs-toggle="collapse" data-bs-target="#" aria-expanded="true">
                                                            <a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">
                                                                <span>{ele.nombre}</span>
                                                            </a>
                                                        </button>
                                                    </li>
                                                </ul>
                                            );
                                        }

                                        return (
                                            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                                <li key={ele.id} className="link-body-emphasis d-inline-flex text-decoration-none rounded" onMouseLeave={(event) => subMenuOnMouseLeaveHandler(el.id)}>
                                                    <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
                                                        data-bs-toggle="collapse" data-bs-target="#" aria-expanded="true">
                                                        <a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">
                                                            <span>{ele.nombre}</span>
                                                        </a>
                                                    </button>

                                                    {showSubMenu[ele.id] &&
                                                        ele.división.map((elem) => {
                                                            return (
                                                                <li key={elem.id} className="link-body-emphasis d-inline-flex text-decoration-none rounded">
                                                                    <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
                                                                        data-bs-toggle="collapse" data-bs-target="#" aria-expanded="true">
                                                                        <a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">
                                                                            <span>{elem.nombre}</span>
                                                                        </a>
                                                                    </button>
                                                                </li>
                                                            );
                                                        })}

                                                </li>
                                            </ul>
                                        );
                                    })}
                            </li>
                        </ul>
                    </div>
                );
            })}
        </ul>
    );
}