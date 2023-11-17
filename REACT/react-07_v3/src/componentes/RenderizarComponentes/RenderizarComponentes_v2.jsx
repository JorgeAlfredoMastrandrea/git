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

import { Título_h1_ } from '../ComponentesGrid/Título_h1_';
import { Título_h2_ } from '../ComponentesGrid/Título_h2_';
import { Título_h3_ } from '../ComponentesGrid/Título_h3_';
import { Título_h4_ } from '../ComponentesGrid/Título_h4_';
import { Título_h5_ } from '../ComponentesGrid/Título_h5_';
import { Título_h6_ } from '../ComponentesGrid/Título_h6_';
import { Párrafo_ } from '../ComponentesGrid/Párrafo_';
import { Contenedor_ } from '../ComponentesGrid/Contenedor_';
import { Fila_ } from '../ComponentesGrid/Fila_';
import { Columna_ } from '../ComponentesGrid/Columna_';

import { BarrasChartJS } from '../ComponentesChartJS/BarrasChartJS';
import { AreaChartJS } from '../ComponentesChartJS/AreaChartJS';
import { LineaChartJS } from '../ComponentesChartJS/LineaChartJS';
import { MultiAxisChartJS } from '../ComponentesChartJS/MultiAxisChartJS';

import { BarrasGoogleChart } from '../ComponentesGoogleCharts/BarrasGoogleChart';

const KeysToComponentMap = {  
  h1_ : Título_h1_,
  h2_ : Título_h2_,
  h3_ : Título_h3_,
  h4_ : Título_h4_,
  h5_ : Título_h5_,
  h6_ : Título_h6_,  
  fila: Fila_,
  col: Columna_,
  cont: Contenedor_,
  p_: Párrafo_,

  barrasChartJS: BarrasChartJS,
  areaChartJS:AreaChartJS,
  lineaChartJS:LineaChartJS,
  multiAxisChartJS:MultiAxisChartJS,

  barrasGoogleChart : BarrasGoogleChart,
};

export const RenderizarComponentes_v2 = (config) => {

  const render = (config, additionalProps) => {
    if (typeof KeysToComponentMap[config.component] !== 'undefined') {
      const { style,  ...restConfig } = config;
  
      return React.createElement(
        KeysToComponentMap[config.component],
        {
          ...restConfig,
          style: style && style[0], // Tomar el primer objeto de la propiedad style
          ...additionalProps
        },
        config.children &&
          (typeof config.children === 'string'
            ? config.children
            : Array.isArray(config.children)
            ? config.children.map((c, index) => render(c, additionalProps))
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

const render = (config, additionalProps) => {
    if (typeof KeysToComponentMap[config.component] !== 'undefined') {
      return React.createElement(
        KeysToComponentMap[config.component],
        {
          src: config.src,
          className: config.className,          
          ky: config.key,
          style: config.style && config.style[0], // Tomar el primer objeto de la propiedad style
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

*/

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
