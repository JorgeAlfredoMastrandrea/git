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

export const NavegaciónAñoMedición_v3 = (setMessage) => {

    const longitudObjeto = Object.keys(navLinkAñoMedicion).length;
    console.log("longitud ---> " , longitudObjeto)
    let punteroAño = longitudObjeto-1; // el puntero queda en el último año

    // elijo el último elemento de las mediciones..o sea el ultimo año    
    const ultimoAño = Object.values(navLinkAñoMedicion).at(-1);
    console.log(ultimoAño.año)

    //const { navLinkAñoMedicion } = setMessage;
    const changeMes = (changeValue) => {
        setMessage(changeValue)
    }

    //const [mostrarAlgo, setMostrarAñoYMes] = useState();
    const [show, setShow] = useState(false);


    const mostrarAñoYMes = (elObjetoMedicionAño) => {
        setShow(true);


        //document.getElementById("año").innerHTML = ultimoAño.año;
        console.log('----> modal : ', document.getElementById("modalAñoMes"));

        console.log(elObjetoMedicionAño);
    };

    const handleClose = () => setShow(false);


    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    };

    const [isClicked, setIsClicked] = useState(false);

    const handleClicked = (navLinkAñoMedicion) => {
        setIsClicked(true);
        setTimeout(() => { 
            document.getElementById("anio").innerHTML = ultimoAño.año
        }, 0);
        console.log(navLinkAñoMedicion);
    }

    const añoAnterior = (navLinkAñoMedicion) => {        
        // debo recorrer el elemento año dentro del objeto y buscar el anterior
        let añoAnt = punteroAño;
        if (punteroAño != 0){
            console.log("click en año anterior");
            punteroAño--;
            añoAnt = Object.values(navLinkAñoMedicion).at(punteroAño);            
            document.getElementById("anio").innerHTML = añoAnt.año
            let meses = añoAnt.mes;
            activarMeses(meses);
        }        
    }

    const añoSiguiente = (navLinkAñoMedicion) => {        
        let añoSig = punteroAño;
        if (punteroAño < longitudObjeto-1){
            console.log("click en año siguiente");
            punteroAño++;
            añoSig = Object.values(navLinkAñoMedicion).at(punteroAño);            
            document.getElementById("anio").innerHTML = añoSig.año
            let meses = añoSig.mes;
            activarMeses(meses);
        }
    }

    const activarMeses = (objetoMeses) => {
        console.log(objetoMeses)
    }

    return (
        <div className="">
            {
                <>
                    <div key={ultimoAño.id} className="" >
                        <button key={ultimoAño.año} id={ultimoAño.id} className="btn-primary btn d-inline-flex align-items-center rounded border-1 collapsed px-0 py-0" data-bs-toggle="collapse" data-bs-target="#" aria-expanded="true"
                            onClick={(event) => handleClicked(navLinkAñoMedicion)}
                        >
                            <a  href="#" className="m-1 px-2 py-1  h4 link-body-emphasis d-inline-flex text-decoration-none rounded"><strong>{ultimoAño.año}</strong></a>
                        </button>
                    </div>

                    {isClicked && (
                        <div  className="z-3 position-absolute p-0 rounded-3 " >
                            <div id="tarjeta-año-meses" className="card border-primary bg-white" styled="width: 13.5rem; height: 13.5rem; transform: scale(0.75) translate(-35px,-35px);">
                                <div className="card-body px-3 py-1" >
                                    <div className="barra-año text-center p-0">
                                        <div className="boton-anterior">
                                            <a className="w-100 btn btn-primary text-white h7 p-1 py-2" href="#" role="button" onClick={(event) => añoAnterior(navLinkAñoMedicion)}><small><span
                                                className="material-symbols-outlined">
                                                arrow_back
                                            </span></small></a>
                                        </div>

                                        <div className="año">

                                            <h5 id="anio" className="card-title h2 link-body-emphasis d-inline-flex text-decoration-none rounded py-1">
                                                <strong>{ultimoAño.año}</strong>
                                            </h5>

                                        </div>


                                        <div className="boton-siguiente">
                                            <a className="w-100 btn btn-primary text-white h7 p-1 py-2" href="#" role="button" onClick={(event) => añoSiguiente(navLinkAñoMedicion)}><small><span
                                                className="material-symbols-outlined">
                                                arrow_forward
                                            </span></small></a>
                                        </div>
                                    </div>

                                    <div className="border-top my-2 "></div>

                                    <div className="meses text-center p-0">
                                        <div className="enero">
                                            <a id="enero" className="w-100 h-100 btn btn-secondary text-white h6 p-1 " href="#"
                                                role="button"><small>ene</small></a>
                                        </div>
                                        <div className="febrero">
                                            <a id="febrero" className="w-100 h-100 btn btn-secondary text-white h6 p-1" href="#"
                                                role="button"><small>feb</small></a>
                                        </div>
                                        <div className="marzo">
                                            <a id="marzo" className="w-100 h-100 btn btn-secondary text-white h6 p-1" href="#"
                                                role="button"><small>mar</small></a>
                                        </div>
                                        <div className="abril">
                                            <a id="abril" className="w-100 h-100 btn btn-primary text-white h6 p-1" href="#"
                                                role="button"><small>abr</small></a>
                                        </div>

                                        <div className="mayo">
                                            <a id="mayo" className="w-100 h-100 btn btn-secondary text-white h6 p-1" href="#"
                                                role="button"><small>may</small></a>
                                        </div>
                                        <div className="junio">
                                            <a id="junio" className="w-100 h-100 btn btn-secondary text-white h6 p-1" href="#"
                                                role="button"><small>jun</small></a>
                                        </div>
                                        <div className="julio">
                                            <a id="julio" className="w-100 h-100 btn btn-secondary text-white h6 p-1" href="#"
                                                role="button"><small>jul</small></a>
                                        </div>

                                        <div className="agosto">
                                            <a id="agosto" className="w-100 h-100 btn btn-primary text-white h6 p-1" href="#"
                                                role="button"><small>ago</small></a>
                                        </div>
                                        <div className="setiembre">
                                            <a id="setiembre" className="w-100 h-100 btn btn-secondary text-white h6 p-1" href="#"
                                                role="button"><small>set</small></a>
                                        </div>
                                        <div className="octubre">
                                            <a id="octubre" className="w-100 h-100 btn btn-secondary text-white h6 p-1" href="#"
                                                role="button"><small>oct</small></a>
                                        </div>
                                        <div className="noviembre">
                                            <a id="noviembre" className="w-100 h-100 btn btn-primary text-white h6 p-1" href="#"
                                                role="button"><small>nov</small></a>
                                        </div>
                                        <div id="diciembre" className="diciembre">
                                            <a className="w-100 h-100 btn btn-secondary text-white h6 p-1" href="#"
                                                role="button"><small>dic</small></a>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        )
                    }

                </>
            }
        </div >
    );
}
