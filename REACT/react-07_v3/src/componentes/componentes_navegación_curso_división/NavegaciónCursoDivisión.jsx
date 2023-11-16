import React from 'react'
import { useState } from 'react';

export const NavegaciónCursoDivisión = (props) => {

  //console.log('los cursos y las divisiones : ', props.cursosYDivisiones, ' ')
  const data = props.cursosYDivisiones;

  const [mostrarSelección, setMostrarSelección] = useState([]);

  const onButtonClickedCurso = (elnavLinksData, i, elementos, subMenuId, mostrarSubMenu) => {
    setMostrarSelección((prev) => {
      let arr = [...prev];
      arr[subMenuId] = mostrarSubMenu;
      //console.log('submenu ', elementos.id, ' ', elementos, ' ', i, ' ');
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
      // agregar el enlace correspondiente como debe ser .. no borrar la linea de abajo
      // props.onBuscarDatosSelecionadaPorCurso('datos por curso : x ')
      return arr;
    });
  };

  const onButtonClickedDivision = (data , el , ele , curso, división, divisionID, linkDatosPorDivisión , objetoDatosPorDivisión , mostrarDivisionBool) => {
    // console.log('data : ' , data ,'el - ', el , 'ele - ', ele , 'curso - ', curso, 'division - ', división, 'divisionID - ', divisionID, 'linkDatosPorDivisión - ', linkDatosPorDivisión , objetoDatosPorDivisión );
    // pongo a todos los elementos de color de fondo white y al final dejo en naranja al que he pulsado
    // esto es para que se quede seleccionado solamente un boton de división a la vez
    let index = 0;
    {
      división.forEach((valor) => {
        document.getElementById(división[index].id).style.background = "white";
        index++;
      })
    };
    // ... y al final dejo en naranja al que he pulsado
    document.getElementById(divisionID).style.background = "orange";
    // devuelvo el enlace y el objeto asociado (o sea el layout) al principio va a estar vació pero luego debe poder irse completando con cada
    // uno de los layouts que se van cargando ..    
    props.onBuscarDatosSelecionadaPorCurso(linkDatosPorDivisión , divisionID , objetoDatosPorDivisión)
  };

  return (
    <div key="divExt1" className="mt-3">
      {data.map((el, i) => {
        return (
          <>
            <div key="divExt2" className="d-inline-flex align-items-center">
              <div key={el.id} className="px-3 ">
                <button id={el.id} className="btn  align-items-center rounded border-1 collapsed px-0 py-0" data-bs-toggle="collapse" data-bs-target="#" aria-expanded="true">
                  <a href="#" className="m-1 px-2 py-1 h5 link-body-emphasis text-decoration-none rounded" onClick={(event) => onButtonClickedCurso(data, i, el, el.id, true)}><small>{el.curso}</small></a>
                </button>
                {mostrarSelección[el.id] && el.división.map((ele) => {
                  return (
                    <div id={ele.id} key={ele.id} className="btn p-0 rounded border-0 m-1">
                      <button type="button" className="btn p-0 " data-bs-toggle="collapse" data-bs-target="#" aria-expanded="true">
                        <a href="#" className="text-dark h6 p-1" onClick={(event) => onButtonClickedDivision(data , el , ele , el.id , el.división,  ele.id, ele.linkDatosPorDivisión ,ele.objetoDatosPorDivisión ,true)}><small>{ele.nombre}</small></a>
                      </button>
                    </div>
                  );
                })}
              </div>
              <div className="border-bottom my-0"></div>
            </div>
          </>
        );
      })}
    </div>
  );
}