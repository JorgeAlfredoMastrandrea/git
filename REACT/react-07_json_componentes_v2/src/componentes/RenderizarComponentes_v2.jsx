// Using Recursion in JavaScript to Traverse Nested Data Structures
// https://medium.com/@alaneicker/how-to-process-json-data-with-recursion-dc530dd3db09

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

import { Párrafo_ } from '../componentes/ComponentesGrid/Párrafo_';
import { Fila_ } from '../componentes/ComponentesGrid/Fila_';
import { Columna_ } from '../componentes/ComponentesGrid/Columna_';
import { BarrasChartJS } from '../componentes/ComponentesChartJS/BarrasChartJS';

const KeysToComponentMap = {
  fila: Fila_,
  columna: Columna_,
  párrafo: Párrafo_,
  barrasChartJS: BarrasChartJS,
};

export const RenderizarComponentes_v2 = (config) => {

  const render = (config, additionalProps) => {
    if (typeof KeysToComponentMap[config.component] !== 'undefined') {
      return React.createElement(
        KeysToComponentMap[config.component],
        {
          src: config.src,
          className: config.className,
          ky: config.key,
          opcionesBarra:config.opcionesBarra,
          datosBarra : config.datosBarra,
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
    <>
      {render(config)}
    </>
  )
}

/*
const data = {
  "name": "John",
  "age": 30,
  "address": {
    "street": "123 Main St",
    "city": "New York",
    "state": "NY",
    "zip": "10001"
  },
  "phoneNumbers": [
    {
      "type": "home",
      "number": "555-555-1234"
    },
    {
      "type": "work",
      "number": "555-555-5678"
    }
  ]
};

--------------------------------------------------------------------------

function loopThroughJSON(obj) {
  for (let key in obj) {
    if (typeof obj[key] === 'object') {
      if (Array.isArray(obj[key])) {
        // loop through array
        for (let i = 0; i < obj[key].length; i++) {
          loopThroughJSON(obj[key][i]);
        }
      } else {
        // call function recursively for object
        loopThroughJSON(obj[key]);
      }
    } else {
      // do something with value
      console.log(key + ': ' + obj[key]);
    }
  }
}

*/
