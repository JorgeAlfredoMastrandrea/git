// https://react-bootstrap.netlify.app/docs/components/modal/
// https://www.google.com/search?q=react+accessing+dom+elements+in+modals&rlz=1C1GCEU_esAR999AR999&oq=react+accesing+dom+elents+in+modal&gs_lcrp=EgZjaHJvbWUqCQgBECEYChigATIGCAAQRRg5MgkIARAhGAoYoAEyCQgCECEYChigAdIBCTIwMjE1ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8
// https://stackblitz.com/edit/reactstrap-tnlqis?file=Example.js
// https://www.geeksforgeeks.org/how-to-pass-data-from-child-component-to-its-parent-in-reactjs/
// https://bobbyhadz.com/blog/react-pass-data-from-child-to-parent
// https://bobbyhadz.com/blog/react-pass-data-from-child-to-parent

import { StrictMode } from 'react';
import React, { useRef } from 'react'
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import { BotónAñoAnterior } from './BotónAñoAnterior';
import { BotónAñoSiguiente } from './BotónAñoSiguiente';


export const NavegaciónAñoMedición_v5 = (propiedades) => {

    const { navLinkAñoMedicion } = propiedades;
    const longitudObjetoNavLinkAñoMedicion = Object.keys(navLinkAñoMedicion).length;
    let pointerToObjetoNavLinkAñoMedicion = longitudObjetoNavLinkAñoMedicion - 1; // la longitud menos uno

    const handleClose = () => setShow(false);
    const [isClicked, setIsClicked] = useState(false);
    const [show, setShow] = useState(false);

    // para manejar el click de la ventana modal
    const handleClicked = (navLinkAñoMedicion) => {
        setIsClicked(true);
        setShow(true);
        console.log('handleClicked : ', navLinkAñoMedicion);
    }

    let objetoCalendario = [{
        puntero : pointerToObjetoNavLinkAñoMedicion,
        año : (Object.values(navLinkAñoMedicion).at(pointerToObjetoNavLinkAñoMedicion)).id
    }];
    let año = Object.values(Object.values(objetoCalendario)).at(0).año;
   
    //console.log((Object.values(navLinkAñoMedicion).at(pointerToObjetoNavLinkAñoMedicion)).id);
    
    // para manejar el click del boton año anterior
    const [coun_boton_año_Anterior_longitudObjetoNavLinkAñoMedicion, setMensajeDesdeBotonAñoAnterior] = useState(longitudObjetoNavLinkAñoMedicion); // coun_boton_año_siguiente_longitudObjetoNavLinkAñoMedicion es = longitudObjetoNavLinkAñoMedicion
    const handleClickBotonAñoAnterior = mensajeBotonAñoAnterior => {
        // 👇️ take the parameter passed from the Child component
        setMensajeDesdeBotonAñoAnterior(mensajeBotonAñoAnterior);
        if ((mensajeBotonAñoAnterior === 'BotonAñoAnteriorPresionado') && (pointerToObjetoNavLinkAñoMedicion > -1)) {
            pointerToObjetoNavLinkAñoMedicion--;
            if (pointerToObjetoNavLinkAñoMedicion < 0) pointerToObjetoNavLinkAñoMedicion = 0;
            console.log('argumento desde Boton Año Anterior: ', mensajeBotonAñoAnterior, ' ', 'coun_boton_año_Anterior_longitudObjetoNavLinkAñoMedicion ', coun_boton_año_Anterior_longitudObjetoNavLinkAñoMedicion, ' ', 'pointerToObjetoNavLinkAñoMedicion ', pointerToObjetoNavLinkAñoMedicion);
            objetoCalendario = [
                {
                    puntero : pointerToObjetoNavLinkAñoMedicion,
                    año : (Object.values(navLinkAñoMedicion).at(pointerToObjetoNavLinkAñoMedicion)).id
                }
            ]
            console.log('---> ' , Object.values(Object.values(objetoCalendario)).at(0).año);
            año = Object.values(Object.values(objetoCalendario)).at(0).año;            
        }
    };

    // para manejar el click del boton año siguiente
    const [coun_boton_año_Siguiente_longitudObjetoNavLinkAñoMedicion, setMensajeDesdeBotonAñoSiguiente] = useState(longitudObjetoNavLinkAñoMedicion); // coun_boton_año_Siguiente_longitudObjetoNavLinkAñoMedicion es = longitudObjetoNavLinkAñoMedicion
    const handleClickBotonAñoSiguiente = mensajeBotonAñoSiguiente => {
        // 👇️ take the parameter passed from the Child component
        setMensajeDesdeBotonAñoSiguiente(mensajeBotonAñoSiguiente);
        if ((mensajeBotonAñoSiguiente === 'BotonAñoSiguientePresionado') && (pointerToObjetoNavLinkAñoMedicion <= longitudObjetoNavLinkAñoMedicion - 1)) {
            pointerToObjetoNavLinkAñoMedicion++;
            if (pointerToObjetoNavLinkAñoMedicion > longitudObjetoNavLinkAñoMedicion - 1) pointerToObjetoNavLinkAñoMedicion = longitudObjetoNavLinkAñoMedicion - 1;
            console.log('argumento desde Boton Año Siguiente: ', mensajeBotonAñoSiguiente, ' ', 'coun_boton_año_Siguiente_longitudObjetoNavLinkAñoMedicion ', coun_boton_año_Siguiente_longitudObjetoNavLinkAñoMedicion, ' ', 'pointerToObjetoNavLinkAñoMedicion ', pointerToObjetoNavLinkAñoMedicion);
            objetoCalendario = [
                {
                    puntero : pointerToObjetoNavLinkAñoMedicion,
                    año : (Object.values(navLinkAñoMedicion).at(pointerToObjetoNavLinkAñoMedicion)).id
                }
            ]
            console.log('---> ' , Object.values(Object.values(objetoCalendario)).at(0).año);
            año = Object.values(Object.values(objetoCalendario)).at(0).año;
        }
    };

    console.log('---------------> ' , año)

    

    return (


        <div className="">
            {
                <>
                    <StrictMode>
                        <div key={'div1'} className="" >
                            <button key={'div2'} id={'id1'} className="btn-primary btn d-inline-flex align-items-center rounded border-1 collapsed px-0 py-0" data-bs-toggle="collapse" data-bs-target="#" aria-expanded="true"
                                onClick={(event) => handleClicked(navLinkAñoMedicion)}                            >
                                <a id="añoBoton" href="#" className="m-1 px-2 py-1  h4 link-body-emphasis d-inline-flex text-decoration-none rounded"><strong>{año}</strong></a>
                            </button>
                        </div>

                        {isClicked && (
                            <div>

                                <Modal
                                    id="modalAñoMes"
                                    size="sm"
                                    aria-labelledby="contained-modal-title-vcenter"
                                    centered="true"
                                    dialogClassName="modal-90w"
                                    show={show}

                                    onHide={handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>ciclo lectivo y mes</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <div id="tarjeta-año-meses" className="card border-primary bg-white">
                                            <div className="card-body px-3 py-1">
                                                <div className="barra-año text-center p-0">

                                                    <BotónAñoAnterior handleClickBotonAñoAnterior={handleClickBotonAñoAnterior} />

                                                    <div className="año">

                                                        <h5 id="año" className="card-title h2 link-body-emphasis d-inline-flex text-decoration-none rounded py-1">
                                                            <strong>{ coun_boton_año_Anterior_longitudObjetoNavLinkAñoMedicion }</strong>
                                                        </h5>

                                                    </div>

                                                    <BotónAñoSiguiente handleClickBotonAñoSiguiente={handleClickBotonAñoSiguiente} />

                                                </div>

                                                <div className="border-top my-2 "></div>

                                                <div className="meses text-center p-0">

                                                </div>
                                            </div>
                                        </div>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="primary" onClick={handleClose}>
                                            Aceptar
                                        </Button>
                                    </Modal.Footer>
                                </Modal >



                            </div>
                        )
                        }
                    </StrictMode>

                </>

            }
        </div >
    );

}
