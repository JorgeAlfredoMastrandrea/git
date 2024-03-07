// Using Recursion in JavaScript to Traverse Nested Data Structures
// https://medium.com/@alaneicker/how-to-process-json-data-with-recursion-dc530dd3db09

"use client"

import React from 'react'
import { Párrafo_ } from '@/componentes/ComponentesGrid/Párrafo_'; 
import { Contenedor_ } from '@/componentes/ComponentesGrid/Contenedor_';
import { Fila_ } from '@/componentes/ComponentesGrid/Fila_';
import { Columna_ } from '@/componentes/ComponentesGrid/Columna_';

import { Card } from '@/componentes/ComponentesGrid/Card';

import { BarrasChartJS } from '@/componentes/ComponentesChartJS/BarrasChartJS';
import { AreaChartJS } from '@/componentes/ComponentesChartJS/AreaChartJS';
import { LineaChartJS } from '@/componentes/ComponentesChartJS/LineaChartJS';
import { MultiAxisChartJS } from '@/componentes/ComponentesChartJS/MultiAxisChartJS';
import { PieChartJS } from '@/componentes/ComponentesChartJS/PieChartJS';
import { DoughnutChartJS } from '@/componentes/ComponentesChartJS/DoughnutChartJS';
import { PolarAreaChartJS } from '@/componentes/ComponentesChartJS/PolarAreaChartJS';
import { RadarChartJS} from '@/componentes/ComponentesChartJS/RadarChartJS';
import { ScatterChartJS } from '@/componentes/ComponentesChartJS/ScatterChartJS';
import { BubbleChartJS } from '@/componentes/ComponentesChartJS/BubbleChartJS';

import { SettingBarrasChartJS } from '@/componentes/ComponentesSettings/SettingBarrasChartJS';


const KeysToComponentMap = {  
  fila: Fila_,
  columna: Columna_,
  contenedor: Contenedor_,
  párrafo: Párrafo_,

  card : Card,

  barrasChartJS: BarrasChartJS,
  areaChartJS:AreaChartJS,
  lineaChartJS:LineaChartJS,
  multiAxisChartJS:MultiAxisChartJS,

  pieChartJS:PieChartJS,
  doughnutChartJS:DoughnutChartJS,

  polarAreaChartJS:PolarAreaChartJS,

  radarChartJS:RadarChartJS,

  scatterChartJS:ScatterChartJS,
  bubbleChartJS:BubbleChartJS,

  settingBarrasChartJS:SettingBarrasChartJS

  
};
/*
export const RenderizarComponentes_v2 = (config) => {
  const render = (config, additionalProps, key) => {
    if (typeof KeysToComponentMap[config.component] !== 'undefined') {
      const { style, ...restConfig } = config;
      
      // Convertir la cadena de estilo a un objeto
      let styleObj = {};
      if (style) {
        // Divide la cadena por ';' para obtener cada declaración de estilo, luego mapea cada una a un objeto
        styleObj = style.split(';').reduce((acc, curr) => {
          const [prop, value] = curr.split(':');
          if (prop && value) {
            // Convertir la propiedad de estilo CSS a camelCase para su uso en React
            const propCamelCase = prop.trim().replace(/(-\w)/g, match => match[1].toUpperCase());
            acc[propCamelCase] = value.trim();
          }
          return acc;
        }, {});
      }

      return React.createElement(
        KeysToComponentMap[config.component],
        {
          ...restConfig,
          style: styleObj, // Usar el objeto de estilo
          ...additionalProps,
          ...(key !== undefined && { key }), // Solo agrega la prop key si key no es undefined
        },
        config.children &&
          (typeof config.children === 'string'
            ? config.children
            : Array.isArray(config.children)
            ? config.children.map((c, index) => render(c, additionalProps, index)) // Usa el índice como key
            : render(config.children, additionalProps))
      );
    }
  };

  return (
    <>
      {render(config)}
    </>
  )
};
*/
export const RenderizarComponentes_v2 = (config) => {
  const render = (config, additionalProps, parentKey = '') => {
    if (typeof KeysToComponentMap[config.component] !== 'undefined') {
      const { style, ...restConfig } = config;

      return React.createElement(
        KeysToComponentMap[config.component],
        {
          ...restConfig,
          style: style && style[0], // Tomar el primer objeto de la propiedad style
          ...additionalProps,
          key: parentKey // Asegúrate de pasar la key aquí
        },
        config.children &&
          (typeof config.children === 'string'
            ? config.children
            : Array.isArray(config.children)
            ? config.children.map((c, index) => render(c, {...additionalProps, key: `${parentKey}-${index}`}, `${parentKey}-${index}`))
            : render(config.children, additionalProps, `${parentKey}-0`))
      );
    }
  };

  return (
    <>
      {render(config, {}, 'root')} 
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
