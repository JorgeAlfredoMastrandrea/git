import React from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export const NavegaciónAñoMedición = (propiedades) => {
    const { navLinkAñoMedicion } = propiedades;
    const [showSubMenu, setShowSubMenu] = useState([]);

    const subMenuHandler = (elnavLinksData, i, elementos, subMenuId, mostrarSubMenu) => {
        setShowSubMenu((prev) => {
            let arr = [...prev];
            arr[subMenuId] = mostrarSubMenu;
            // console.log('submenu '  , elementos.id , ' ' , elementos , ' ' , i , ' ' );
            // acá debería sacar la lista de todos los otros menos el que se está pulsando para desactivarlos..
            // esto sirve para desactivar todos los botones de los cursos
            // hago un fill que rellene un array 'arr' con los valores 'undefined' y luego en esa posición
            // lo pongo a true                        
            arr.fill(undefined)
            arr[subMenuId] = true;
            // teniendo el 'elnavLinksData' puedo descomponerlo y sacar lo que quiero desde acá usando alguna funcion de array ..
            {
                elnavLinksData.map((el, i) => {
                    //console.log(el.id , ' ' , i);
                    if (el.id != elementos.id) {
                        document.getElementById(el.id).style.background = "white";
                    }
                })
            };
            document.getElementById(elementos.id).style.background = "magenta";
            return arr;
        });
    };

    const showItemHandler = (elSubMenu, menuId, subMenuId, ele_CursoDivision) => {
        setShowSubMenu((prev) => {
            let arr = [...prev];
            //console.log('el curso : ' , menuId , ' el ID ' , subMenuId);            
            arr[subMenuId] = true;
            //console.log('-' , elSubMenu);
            // pongo a todos los elementos de color de fondo white y al final dejo en naranja al que he pulsado
            // esto es para que se quede seleccionado solamente un boton de división a la vez
            let index = 0;
            {
                elSubMenu.forEach((valor) => {
                    document.getElementById(elSubMenu[index].id).style.background = "white";
                    index++;
                })
            };
            // ... y al final dejo en naranja al que he pulsado
            document.getElementById(subMenuId).style.background = "cyan";

            // desde acá voy a darle al otro componente para pasarle los cursos y divisiones que debe dibujar
            // porque en el objeto 'ele_CursoDivision' van todos los cursos y divisiones que se deben mostrar..!
            console.log("el mes : ", subMenuId);
            console.log("--- : ", ele_CursoDivision)

            return ele_CursoDivision; // devuelvo el objeto CursoDivision
        });
    };

    // voy a recorrer el objeto json recibido, uso un objeto .map para hacerlo
    // en caso de encontrar una propiedad de tipo enviado por parámetro entonces se trata de un li principal
    return (
        <div className="px-7 list-unstyled p-0 mb-8 mt-8">
            {navLinkAñoMedicion.map((el, i) => {
                return (
                    <>
                        <div key={el.id} className="px-3 " onClick={(event) => subMenuHandler(navLinkAñoMedicion, i, el, el.id, true)}>
                            <button id={el.id} className="btn d-inline-flex align-items-center rounded border-1 collapsed px-0 py-0" data-bs-toggle="collapse" data-bs-target="#" aria-expanded="true">
                                <a href="#" className="m-1 px-2 py-1  h4 link-body-emphasis d-inline-flex text-decoration-none rounded"><strong>{el.año}</strong></a>
                            </button>
                            {showSubMenu[el.id] && el.mes.map((ele) => {
                                return (
                                    <div id={ele.id} key={ele.id} className="btn p-0 rounded border-0 m-1" onClick={(event) => showItemHandler(el.mes, el.id, ele.id, ele.CursoDivision)}>
                                        <button type="button" className="btn p-0 " data-bs-toggle="collapse" data-bs-target="#" aria-expanded="true">
                                            <a href="#" className="text-dark h6 p-1"><small>{ele.nombre}</small></a>
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