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
import { VisorAño } from './VisorAño';

export const NavegaciónAñoMedición_v5 = (propiedades) => {

    const { navLinkAñoMedicion } = propiedades;
    const longitudObjetoNavLinkAñoMedicion = Object.keys(navLinkAñoMedicion).length;

    const handleClose = () => setShow(false);
    const [isClicked, setIsClicked] = useState(false);
    const [show, setShow] = useState(false);

    // para manejar el click de la ventana modal
    const handleClicked = (navLinkAñoMedicion) => {
        setIsClicked(true);
        setShow(true);
    }

    const [lrg] = useState(longitudObjetoNavLinkAñoMedicion-1);
    const [cero] = useState(0);
    const [ptrAño, setPtrAño] = useState(lrg);
    const [añoOperativo, setAñoOperativo] = useState(Object.values(navLinkAñoMedicion).at(lrg).id);

    const onButtonClickedBotonAñoAnterior = (argumentoQueVieneDelComponenteBotonAnterior) => {
        console.log('B. Anterior -- : ', ptrAño, ' ', argumentoQueVieneDelComponenteBotonAnterior, ' ', Object.values(navLinkAñoMedicion).at(ptrAño))
        if (Object.values(navLinkAñoMedicion).at(ptrAño) !== 'undefined') {
            if (ptrAño > cero) {
                setPtrAño(ptrAño - 1);
                setAñoOperativo((Object.values(navLinkAñoMedicion).at(ptrAño)).id); console.log('pulse btn ant. : ', ptrAño);
            } else {
                setPtrAño(cero);
                setAñoOperativo((Object.values(navLinkAñoMedicion).at(0)).id);
            }
        }
    }

    const onButtonClickedBotonAñoSiguiente = (argumentoQueVieneDelComponenteBotonSiguiente) => {
        console.log('B. Siguiente -- : ', ptrAño, ' ', argumentoQueVieneDelComponenteBotonSiguiente, ' ', Object.values(navLinkAñoMedicion).at(ptrAño));
        if (Object.values(navLinkAñoMedicion).at(ptrAño) !== 'undefined') {
            if (ptrAño < lrg) {
                setPtrAño(ptrAño + 1);
                setAñoOperativo((Object.values(navLinkAñoMedicion).at(ptrAño)).id); console.log('pulse btn sig. : ', ptrAño);
            } else {
                setPtrAño(lrg); console.log('else --- > pulse btn sig. : ', ptrAño);
                setAñoOperativo((Object.values(navLinkAñoMedicion).at(lrg)).id);
            }
        }
    }


    return (


        <div className="">
            {
                <>
                    <StrictMode>
                        <div key={'div1'} className="" >
                            <button key={'div2'} id={'id1'} className="btn-primary btn d-inline-flex align-items-center rounded border-1 collapsed px-0 py-0" data-bs-toggle="collapse" data-bs-target="#" aria-expanded="true"
                                onClick={(event) => handleClicked(navLinkAñoMedicion)}                            >
                                <a id="añoBoton" href="#" className="m-1 px-2 py-1  h4 link-body-emphasis d-inline-flex text-decoration-none rounded"><strong>{añoOperativo}</strong></a>
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

                                                    <BotónAñoAnterior setMensageBotónAñoAnterior={onButtonClickedBotonAñoAnterior} />

                                                    <div className="año">

                                                        <VisorAño añoOperativo={añoOperativo} />

                                                    </div>

                                                    <BotónAñoSiguiente setMensageBotónAñoSiguiente={onButtonClickedBotonAñoSiguiente} />

                                                </div>

                                                <div className="border-top my-2 "></div>

                                                <div className="meses text-center p-0">
                                                    {console.log('meses')}

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
