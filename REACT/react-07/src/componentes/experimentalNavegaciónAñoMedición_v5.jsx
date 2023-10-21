// https://react-bootstrap.netlify.app/docs/components/modal/
// https://www.google.com/search?q=react+accessing+dom+elements+in+modals&rlz=1C1GCEU_esAR999AR999&oq=react+accesing+dom+elents+in+modal&gs_lcrp=EgZjaHJvbWUqCQgBECEYChigATIGCAAQRRg5MgkIARAhGAoYoAEyCQgCECEYChigAdIBCTIwMjE1ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8
// https://stackblitz.com/edit/reactstrap-tnlqis?file=Example.js


import React, { useRef } from 'react'
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import navLinkAñoMedicion from "../medicionesAñosMeses.json";

export const NavegaciónAñoMedición_v5 = (setMessage) => {

    const handleClose = () => setShow(false);
    const [isClicked, setIsClicked] = useState(false);

    const longitudObjeto = Object.keys(navLinkAñoMedicion).length;
    // el puntero queda en el último año
    let punteroAño = longitudObjeto - 1; 
    // elijo el último elemento de las mediciones..o sea el ultimo año    
    const ultimoAño = Object.values(navLinkAñoMedicion).at(-1);
    let mesesAñoVisitado = ultimoAño.mes;

    const objetoCalendario = [{
        pointerActualAño : punteroAño,
        ultimoAñoMostrado : ultimoAño,
        mesesMostrado : ultimoAño.mes,
    }]

    

    return (
        <div className="">
            {
                <>
                    <div key={ultimoAño.id} className="" >
                        <button key={ultimoAño.año} id={ultimoAño.id} className="btn-primary btn d-inline-flex align-items-center rounded border-1 collapsed px-0 py-0" data-bs-toggle="collapse" data-bs-target="#" aria-expanded="true"
                            onClick={(event) => handleClicked(navLinkAñoMedicion)}
                        >
                            <a key="añoBotonKey" id="añoBoton" href="#" className="m-1 px-2 py-1  h4 link-body-emphasis d-inline-flex text-decoration-none rounded"><strong>{ultimoAño.año}</strong></a>
                        </button>
                    </div>

                    {isClicked && (
                        <div key="unDiv">

                            <Modal key="modalMeses"
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
                                                <div className="boton-anterior">
                                                    <a className="w-100 btn btn-primary text-white h7 p-1 py-2" href="#" role="button"><span className="material-symbols-outlined" onClick={(event) => añoAnterior(navLinkAñoMedicion)}>
                                                        arrow_back
                                                    </span></a>
                                                </div>

                                                <div className="año">

                                                    <h5 id="año" className="card-title h2 link-body-emphasis d-inline-flex text-decoration-none rounded py-1">
                                                        <strong>{ultimoAño.año}</strong>
                                                    </h5>

                                                </div>

                                                <div className="boton-siguiente">
                                                    <a className="w-100 btn btn-primary text-white h7 p-1 py-2" href="#" role="button"><span className="material-symbols-outlined" onClick={(event) => añoSiguiente(navLinkAñoMedicion)}> 
                                                        arrow_forward
                                                    </span></a>
                                                </div>
                                            </div>

                                            <div className="border-top my-2 "></div>

                                            <div className="meses text-center p-0">
                                                <div className="enero">
                                                    <a id="enero" className="w-100 h-100 btn btn-secondary text-white h6 p-1 " href="#"
                                                        onClick={(event) => mesSeleccionado('enero')}
                                                        role="button"><small>ene</small></a>
                                                </div>
                                                <div className="febrero">
                                                    <a id="febrero" className="w-100 h-100 btn btn-secondary text-white h6 p-1" href="#"
                                                        onClick={(event) => mesSeleccionado('febrero')}
                                                        role="button"><small>feb</small></a>
                                                </div>
                                                <div className="marzo">
                                                    <a id="marzo" className="w-100 h-100 btn btn-secondary text-white h6 p-1" href="#"
                                                        onClick={(event) => mesSeleccionado('marzo')}
                                                        role="button"><small>mar</small></a>
                                                </div>
                                                <div className="abril">
                                                    <a id="abril" className="w-100 h-100 btn btn-primary text-white h6 p-1" href="#"
                                                        onClick={(event) => mesSeleccionado('abril')}
                                                        role="button"><small>abr</small></a>
                                                </div>

                                                <div className="mayo">
                                                    <a id="mayo" className="w-100 h-100 btn btn-secondary text-white h6 p-1" href="#"
                                                        onClick={(event) => mesSeleccionado('mayo')}
                                                        role="button"><small>may</small></a>
                                                </div>
                                                <div className="junio">
                                                    <a id="junio" className="w-100 h-100 btn btn-secondary text-white h6 p-1" href="#"
                                                        onClick={(event) => mesSeleccionado('junio')}
                                                        role="button"><small>jun</small></a>
                                                </div>
                                                <div className="julio">
                                                    <a id="julio" className="w-100 h-100 btn btn-secondary text-white h6 p-1" href="#"
                                                        onClick={(event) => mesSeleccionado('julio')}
                                                        role="button"><small>jul</small></a>
                                                </div>

                                                <div className="agosto">
                                                    <a id="agosto" className="w-100 h-100 btn btn-primary text-white h6 p-1" href="#"
                                                        onClick={(event) => mesSeleccionado('agosto')}
                                                        role="button"><small>ago</small></a>
                                                </div>
                                                <div className="setiembre">
                                                    <a id="setiembre" className="w-100 h-100 btn btn-secondary text-white h6 p-1" href="#"
                                                        onClick={(event) => mesSeleccionado('setiembre')}
                                                        role="button"><small>set</small></a>
                                                </div>
                                                <div className="octubre">
                                                    <a id="octubre" className="w-100 h-100 btn btn-secondary text-white h6 p-1" href="#"
                                                        onClick={(event) => mesSeleccionado('octubre')}
                                                        role="button"><small>oct</small></a>
                                                </div>
                                                <div className="noviembre">
                                                    <a id="noviembre" className="w-100 h-100 btn btn-primary text-white h6 p-1" href="#"
                                                        onClick={(event) => mesSeleccionado('noviembre')}
                                                        role="button"><small>nov</small></a>
                                                </div>
                                                <div className="diciembre">
                                                    <a id="diciembre" className="w-100 h-100 btn btn-secondary text-white h6 p-1" href="#"
                                                        onClick={(event) => mesSeleccionado('diciembre')}
                                                        role="button"><small>dic</small></a>
                                                </div>

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

                </>
            }
        </div >
    );
}

