// https://react-bootstrap.netlify.app/docs/components/modal/

import React from 'react'
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';

export const NavegaciónAñoMedición_v3 = (propiedades) => {
    const { navLinkAñoMedicion } = propiedades;
    const [showSubMenu, setShowSubMenu] = useState([]);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const subMenuHandler = (elnavLinksData, i, elementos, subMenuId, mostrarSubMenu) => {
        setShowSubMenu((prev) => {

            return;
        });
    };

    return (
        <div className="">
            {navLinkAñoMedicion.map((el, i) => {
                return (
                    <>
                        <div key={el.id} className="" >
                            <button id={el.id} className="btn-primary btn d-inline-flex align-items-center rounded border-1 collapsed px-0 py-0" data-bs-toggle="collapse" data-bs-target="#" aria-expanded="true" onClick={handleShow}>
                                <a href="#" className="m-1 px-2 py-1  h4 link-body-emphasis d-inline-flex text-decoration-none rounded"><strong>{el.año}</strong></a>
                            </button>

                            <Modal                                
                                size="sm"
                                aria-labelledby="contained-modal-title-vcenter"
                                centered="true"
                                dialogClassName="modal-90w"
                                show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>año y mes</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <div id="tarjeta-año-mese" className="card border-primary bg-white">
                                        <div className="card-body px-3 py-1">
                                            <div className="barra-año text-center p-0">
                                                <div className="boton-anterior">
                                                    <a className="w-100 btn btn-primary text-white h7 p-1 py-2" href="#" role="button"><small><span
                                                        className="material-symbols-outlined">
                                                        arrow_back
                                                    </span></small></a>
                                                </div>
                                                <div className="año">
                                                    <h5 className="card-title h2 link-body-emphasis d-inline-flex text-decoration-none rounded py-1">
                                                        <strong>2023</strong></h5>
                                                </div>
                                                <div className="boton-siguiente">
                                                    <a className="w-100 btn btn-primary text-white h7 p-1 py-2" href="#" role="button"><small><span
                                                        className="material-symbols-outlined">
                                                        arrow_forward
                                                    </span></small></a>
                                                </div>
                                            </div>

                                            <div className="border-top my-2 "></div>

                                            <div className="meses text-center p-0">
                                                <div className="enero">
                                                    <a className="w-100 h-100 btn btn-secondary text-white h6 p-1 " href="#"
                                                        role="button"><small>ene</small></a>
                                                </div>
                                                <div className="febrero">
                                                    <a className="w-100 h-100 btn btn-secondary text-white h6 p-1" href="#"
                                                        role="button"><small>feb</small></a>
                                                </div>
                                                <div className="marzo">
                                                    <a className="w-100 h-100 btn btn-secondary text-white h6 p-1" href="#"
                                                        role="button"><small>mar</small></a>
                                                </div>
                                                <div className="abril">
                                                    <a className="w-100 h-100 btn btn-primary text-white h6 p-1" href="#"
                                                        role="button"><small>abr</small></a>
                                                </div>

                                                <div className="mayo">
                                                    <a className="w-100 h-100 btn btn-secondary text-white h6 p-1" href="#"
                                                        role="button"><small>may</small></a>
                                                </div>
                                                <div className="junio">
                                                    <a className="w-100 h-100 btn btn-secondary text-white h6 p-1" href="#"
                                                        role="button"><small>jun</small></a>
                                                </div>
                                                <div className="julio">
                                                    <a className="w-100 h-100 btn btn-secondary text-white h6 p-1" href="#"
                                                        role="button"><small>jul</small></a>
                                                </div>

                                                <div className="agosto">
                                                    <a className="w-100 h-100 btn btn-primary text-white h6 p-1" href="#"
                                                        role="button"><small>ago</small></a>
                                                </div>
                                                <div className="setiembre">
                                                    <a className="w-100 h-100 btn btn-secondary text-white h6 p-1" href="#"
                                                        role="button"><small>set</small></a>
                                                </div>
                                                <div className="octubre">
                                                    <a className="w-100 h-100 btn btn-secondary text-white h6 p-1" href="#"
                                                        role="button"><small>oct</small></a>
                                                </div>
                                                <div className="noviembre">
                                                    <a className="w-100 h-100 btn btn-primary text-white h6 p-1" href="#"
                                                        role="button"><small>nov</small></a>
                                                </div>
                                                <div className="diciembre">
                                                    <a className="w-100 h-100 btn btn-secondary text-white h6 p-1" href="#"
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
                    </>
                );
            })}
        </div >
    );
}
