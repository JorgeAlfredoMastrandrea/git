import React from 'react'
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button
} from "react-bootstrap";

import { Párrafo } from './Párrafo';
import { Fila } from '../componentes/ComponentesGrid/Fila';
import { Columna } from '../componentes/ComponentesGrid/Columna';
import { Barras } from '../componentes/ComponentesGoogleCharts/Barras';
import { BarrasData } from '../componentes/ComponentesGoogleCharts/BarrasData';
import { BarrasOptions } from '../componentes/ComponentesGoogleCharts/BarrasOptions';

const KeysToComponentMap = {
    fila: Fila,
    columna: Columna,
    barras: Barras,
    barras_data : BarrasData,
    barras_options : BarrasOptions,
    párrafo: Párrafo,
};

export const RenderizarComponentes = (config) => {

    const render = (config) => {
        if (typeof KeysToComponentMap[config.component] !== "undefined") {
            return React.createElement(
                KeysToComponentMap[config.component],
                {
                    src: config.src
                },
                config.children &&
                (typeof config.children === "string"
                    ? config.children
                    : config.children.map(c => render(c))
                )

            );
        }
    }

    return (
        <>
            {render(config)}
        </>
    )
}
