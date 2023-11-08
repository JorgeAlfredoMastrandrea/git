import React from 'react'
import { RenderizarComponentes_v2 } from '../componentes/RenderizarComponentes_v2'
import "bootstrap/dist/css/bootstrap.min.css";

import { Fila_ } from '../componentes/ComponentesGrid/Fila_';
import { Columna_ } from '../componentes/ComponentesGrid/Columna_';
import { Párrafo_ } from '../componentes/ComponentesGrid/Párrafo_';

export const ComponentsDemo = () => {

    const config = {
        component: 'fila',
        src: '1',
        className: 'row text-center align-items-center',
        children: [
            {
                // el componente y sus propiedades
                component: 'columna',
                src: '2',
                className: 'col-sm text-center align-middle text-bg-secondary',
                children: [
                    {
                        component: 'párrafo',
                        src: 'este es el párrafo de la columna de la izquierda '
                    }
                ]
            },
            {
                // el componente y sus propiedades
                component: 'columna',
                src: '3',
                className: 'col-sm text-center align-middle text-bg-success',
                // Otras propiedades personalizadas para ChildComponent
                children: [
                    {
                        component: 'párrafo',
                        src: 'este es el párrafo de la columna de la derecha '
                    }
                ]
            },
            // Más componentes hijos si es necesario
        ],
        // Otras propiedades personalizadas para SomeComponent
    };


    const KeysToComponentMap = {
        fila: Fila_,
        columna: Columna_,
        párrafo: Párrafo_
    };


    const render = (config, additionalProps) => {
        if (typeof KeysToComponentMap[config.component] !== 'undefined') {
            return React.createElement(
                KeysToComponentMap[config.component],
                {
                    src: config.src,
                    className: config.className,
                    clave: config.key,
                    ...additionalProps
                },
                config.children &&
                (typeof config.children === 'string'
                    ? config.children
                    : Array.isArray(config.children)
                        ? config.children.map((c, index) =>
                            render(c, additionalProps)
                        )
                        : render(config.children, additionalProps))
            );
        }
    };


    return (
        <div key='a'>
            {render(config, { additionalProp: 'value' })}
        </div>
    );
}
