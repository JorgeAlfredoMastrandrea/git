import { StrictMode } from 'react';
import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { VisorAño } from '../componentes2/VisorAño';
import { VisorMes } from '../componentes2/VisorMes';
import { BotónAñoAnterior } from '../componentes2/BotónAñoAnterior';
import { BotónAñoSiguiente } from '../componentes2/BotónAñoSiguiente';
import { TableroMeses_v3 } from '../componentes2/TableroMeses_v3';

export const NavegaciónAñoMedición_v6 = (propiedades) => {


    // el prop que traer el json con los años y mediciones
    const { navLinkAñoMedicion } = propiedades;
    // el largo total del objeto json (cantidad de objetos dentro del json)
    const longitudObjetoNavLinkAñoMedicion = Object.keys(navLinkAñoMedicion).length;
    // el largo del objeto menos 1
    const [lrg] = useState(longitudObjetoNavLinkAñoMedicion - 1);
    // el ultimo objeto que está en la medición, sería el objeto del final del json
    const [añoOperativo, setAñoOperativo] = useState(Object.values(navLinkAñoMedicion).at(lrg).id);
    // un puntero que va a variar luego para posicionarnos en el objeto del json que queramos
    const [ptrAño, setPtrAño] = useState(0);
    // los meses a mostrar en el tablero de los meses
    const [meseAMostrar, setMesesAMostrar] = useState(Object.values(navLinkAñoMedicion).at(lrg).meses);
    // el ultimo mes se saca con el largo del array de objetos de meses pidiendo el ultimo elemento
    const [ultimoMes, setUltimoMes] = useState(((Object.values(navLinkAñoMedicion).at(lrg).meses).at(((Object.values(navLinkAñoMedicion).at(lrg).meses)).length - 1)).nombre);
    // el mes seleccionado por el sistema .. en un principio sería el último mes del operativo !!
    const [mesSeleccionadoSistema, setMesSeleccionadoSistema] = useState(ultimoMes);
    // el objeto completo de año y meses, solamente del que se muestra en el objeto de navegación ...
    const [añoOperativoCompleto , setAñoOperativoCompleto] = useState(Object.values(navLinkAñoMedicion).at(lrg));

    console.log('objeto completo de años y meses : ', navLinkAñoMedicion);
    console.log('longitud Objeto Nav Link Año Medicion : ', longitudObjetoNavLinkAñoMedicion);
    console.log('largo del objeto menos 1 : ', lrg);
    console.log('año operativo : ', añoOperativo); // al principio muestra el último operativo hecho ...
    console.log('los meses a mostrar del último operativo : ', meseAMostrar);
    console.log('último mes del último año del operativo : ', ultimoMes);
    console.log('mes seleccioando por el sistema : ', mesSeleccionadoSistema); // acá una diferencia con respecto al anterior.. el mes seleccionado es el último medido
    console.log('el objeto completo de año y meses, solamente del que se muestra en el objeto de navegación : ' , añoOperativoCompleto);


    const onButtonClickedBotonAñoAnterior = (argumentoQueVieneDelComponenteBotonAnterior) => {
        const esPrimerAño = ptrAño === 0;
        const nuevoAño = esPrimerAño ? Object.keys(navLinkAñoMedicion).length - 1 : ptrAño - 1;
        
        setAñoOperativoCompleto(Object.values(navLinkAñoMedicion).at(nuevoAño));
        setPtrAño(nuevoAño);
        setAñoOperativo((Object.values(navLinkAñoMedicion).at(nuevoAño)).id);
        setMesSeleccionadoSistema(ultimoMes)
        setUltimoMes(ultimoMes)
        //setUltimoMes(((Object.values(navLinkAñoMedicion).at(nuevoAño).meses).at(((Object.values(navLinkAñoMedicion).at(nuevoAño).meses)).length - 1)).nombre);
        setMesesAMostrar((Object.values(navLinkAñoMedicion).at(nuevoAño)).meses);
        
        console.log('B. Anterior -- : ', ptrAño, ' ', nuevoAño, ' ', argumentoQueVieneDelComponenteBotonAnterior, ' ', Object.values(navLinkAñoMedicion).at(nuevoAño), ' ', (Object.values(navLinkAñoMedicion).at(nuevoAño).meses), ' ', ((Object.values(navLinkAñoMedicion).at(nuevoAño).meses)).length, ' ', ((Object.values(navLinkAñoMedicion).at(nuevoAño).meses).at(((Object.values(navLinkAñoMedicion).at(nuevoAño).meses)).length - 1)).nombre)
    }

    const onButtonClickedBotonAñoSiguiente = (argumentoQueVieneDelComponenteBotonSiguiente) => {
        const esUltimoAño = ptrAño === Object.keys(navLinkAñoMedicion).length - 1;
        const nuevoAño = esUltimoAño ? 0 : ptrAño + 1;
        
        setAñoOperativoCompleto(Object.values(navLinkAñoMedicion).at(nuevoAño));
        setPtrAño(nuevoAño);
        setAñoOperativo((Object.values(navLinkAñoMedicion).at(nuevoAño)).id);
        setMesSeleccionadoSistema(ultimoMes)
        setUltimoMes(ultimoMes)
        //setUltimoMes(((Object.values(navLinkAñoMedicion).at(nuevoAño).meses).at(((Object.values(navLinkAñoMedicion).at(nuevoAño).meses)).length - 1)).nombre);
        setMesesAMostrar((Object.values(navLinkAñoMedicion).at(nuevoAño)).meses);
        console.log('B. Siguiente -- : ', ptrAño, ' ', nuevoAño, ' ', argumentoQueVieneDelComponenteBotonSiguiente, ' ', Object.values(navLinkAñoMedicion).at(nuevoAño), ' ', (Object.values(navLinkAñoMedicion).at(nuevoAño).meses), ' ', ((Object.values(navLinkAñoMedicion).at(nuevoAño).meses)).length, ' ', ((Object.values(navLinkAñoMedicion).at(nuevoAño).meses).at(((Object.values(navLinkAñoMedicion).at(nuevoAño).meses)).length - 1)).nombre)
    }





    const [isClicked, setIsClicked] = useState(false);
    const [show, setShow] = useState(false);

    // para manejar el click de la ventana modal
    const handleClicked = (navLinkAñoMedicion) => {
        setIsClicked(true);
        setShow(true);
    }

    const handleClose = (event) => {
        // acá puedo pasar el resultado del mes al componente hermano que muestra el mes ...
        console.log('handleClose -------> :  ', mesSeleccionado);
        //console.log('desde NavegacionAñoMecion_v5 dice --> el mes es : ', mesSeleccioando)
        //cambiarMes(mesSeleccioando);
        setShow(false);
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
                            <h6 className="text-center p-0">{ultimoMes}</h6>
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
                                            <div key="mes-key-a" className="text-center p-0">
                                                <VisorMes ultimoMes={ultimoMes} />
                                            </div>
                                            <div key="borde-key" className="border-top my-2 "></div>


                                            <div key="los-meses-key" className="meses text-center p-0">
                                                {/* le debo mandar el objeto completo de año y meses, no solamente los meses ...*/}
                                                <TableroMeses_v3 
                                                    añoOperativoCompleto={añoOperativoCompleto}
                                                    mesSeleccionadoSistema={mesSeleccionadoSistema}>
                                                </TableroMeses_v3>

                                            </div>

                                        </div>
                                    </div>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="primary" onClick={(event) => handleClose(event)}>
                                        Aceptar
                                    </Button>
                                </Modal.Footer>
                            </Modal >
                        )
                        }
                    </StrictMode>

                </>
            }
        </div>
    )
}
