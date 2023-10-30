// https://react-bootstrap.netlify.app/docs/components/modal/
// https://www.google.com/search?q=react+accessing+dom+elements+in+modals&rlz=1C1GCEU_esAR999AR999&oq=react+accesing+dom+elents+in+modal&gs_lcrp=EgZjaHJvbWUqCQgBECEYChigATIGCAAQRRg5MgkIARAhGAoYoAEyCQgCECEYChigAdIBCTIwMjE1ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8
// https://stackblitz.com/edit/reactstrap-tnlqis?file=Example.js
// https://www.geeksforgeeks.org/how-to-pass-data-from-child-component-to-its-parent-in-reactjs/
// https://bobbyhadz.com/blog/react-pass-data-from-child-to-parent
// https://bobbyhadz.com/blog/react-pass-data-from-child-to-parent

// https://www.freecodecamp.org/espanol/news/pasar-data-y-eventos-entre-componentes-en-reactjs/

import { StrictMode } from 'react';
import React from 'react'
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { BotónAñoAnterior } from './BotónAñoAnterior';
import { BotónAñoSiguiente } from './BotónAñoSiguiente';
import { VisorAño } from './VisorAño';
import { TableroMeses_v2 } from './TableroMeses_v2';

export const NavegaciónAñoMedición_v5 = (propiedades) => {

    const { navLinkAñoMedicion } = propiedades;
    const longitudObjetoNavLinkAñoMedicion = Object.keys(navLinkAñoMedicion).length;


    const [isClicked, setIsClicked] = useState(false);
    const [show, setShow] = useState(false);

    // para manejar el click de la ventana modal
    const handleClicked = (navLinkAñoMedicion) => {
        setIsClicked(true);
        setShow(true);
    }

    const [word, setWord] = useState();

    const [lrg] = useState(longitudObjetoNavLinkAñoMedicion - 1);
    const [añoOperativo, setAñoOperativo] = useState(Object.values(navLinkAñoMedicion).at(lrg).id);
    const [ptrAño, setPtrAño] = useState(0);
    const [meseAMostrar, setMesesAMostrar] = useState(Object.values(navLinkAñoMedicion).at(lrg).meses)

    const onButtonClickedBotonAñoAnterior = (argumentoQueVieneDelComponenteBotonAnterior) => {
        const esPrimerAño = ptrAño === 0;
        const nuevoAño = esPrimerAño ? Object.keys(navLinkAñoMedicion).length - 1 : ptrAño - 1;
        setPtrAño(nuevoAño);
        setAñoOperativo((Object.values(navLinkAñoMedicion).at(nuevoAño)).id);
        setMesesAMostrar((Object.values(navLinkAñoMedicion).at(nuevoAño)).meses);
        //console.log('B. Anterior -- : ', ptrAño, ' ', nuevoAño ,' ' , argumentoQueVieneDelComponenteBotonAnterior, ' ', Object.values(navLinkAñoMedicion).at(ptrAño))        
    }

    const onButtonClickedBotonAñoSiguiente = (argumentoQueVieneDelComponenteBotonSiguiente) => {
        const esUltimoAño = ptrAño === Object.keys(navLinkAñoMedicion).length - 1;
        const nuevoAño = esUltimoAño ? 0 : ptrAño + 1;
        setPtrAño(nuevoAño);
        setAñoOperativo((Object.values(navLinkAñoMedicion).at(nuevoAño)).id);
        setMesesAMostrar((Object.values(navLinkAñoMedicion).at(nuevoAño)).meses);
        //console.log('B. Siguiente -- : ', ptrAño, ' ', nuevoAño ,' ' , argumentoQueVieneDelComponenteBotonSiguiente, ' ', Object.values(navLinkAñoMedicion).at(ptrAño));     
    }


    

    const handleClose = (event, arg) => {
        // acá puedo pasar el resultado del mes al componente hermano que muestra el mes ...
        //console.log('desde NavegacionAñoMecion_v5 dice --> el mes es : ', mesSeleccioando)
        //cambiarMes(mesSeleccioando);
        setShow(false);
        

    }

    const [datos, estableceDatos] = useState('');

    const hijoAPadre = (datoshijo) => {
        estableceDatos(datoshijo);
        console.log('NavegaciónAñoMedición_v5 -----------------> : ' , datoshijo)
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
                            <Modal
                                key="keyModal"
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
                                    <div key="tarjeta-año-meses-key" id="tarjeta-año-meses" className="card border-primary bg-white">
                                        <div key="card-body-key" className="card-body px-3 py-1">
                                            <div key="barra-key" className="barra-año text-center p-0">
                                                <BotónAñoAnterior setMensageBotónAñoAnterior={onButtonClickedBotonAñoAnterior} />
                                                <div key="año-key-a" className="año">
                                                    <VisorAño añoOperativo={añoOperativo} />
                                                </div>
                                                <BotónAñoSiguiente setMensageBotónAñoSiguiente={onButtonClickedBotonAñoSiguiente} />
                                            </div>
                                            <div key="borde-key" className="border-top my-2 "></div>
                                            <div key="los-meses-key" className="meses text-center p-0">
                                                <TableroMeses_v2
                                                    meseAMostrar={meseAMostrar}
                                                    hijoAPadre={hijoAPadre}
                                                >
                                                </TableroMeses_v2>

                                            </div>
                                        </div>
                                    </div>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="primary" onClick={(event) => handleClose(event, a)}>
                                        Aceptar
                                    </Button>
                                </Modal.Footer>
                            </Modal >
                        )
                        }
                    </StrictMode>
                </>
            }
        </div >
    );
}
