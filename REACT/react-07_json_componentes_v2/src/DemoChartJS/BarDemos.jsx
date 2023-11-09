// https://www.chartjs.org/docs/latest/configuration/responsive.html
// ver lo que dice sobre imprimir..!!

import React from 'react'
import { RenderizarComponentes } from '../componentes/RenderizarComponentes'
import "bootstrap/dist/css/bootstrap.min.css";
//import { contenido } from './ContentConfig.js'

import { useEffect } from 'react';
import { useState } from 'react';



export const BarDemos = () => {

    const [textData, setTextData] = useState([]);

    //'datosJSON/ContentConfig.txt'
    //setData(data);



    useEffect(() => {
        // Cargar el archivo JavaScript externo
        const scriptElement = document.createElement('script');
        scriptElement.src = 'datosJSON/ContentConfig.js';
        scriptElement.async = true;
        scriptElement.onload = () => {
            // Acceder a la variable declarada en el archivo externo
            if (window.externalTextVariable) {
                setTextData(window.externalTextVariable);
            } else {
                console.error('La variable no está definida en el archivo externo.');
            }
            console.log('Archivo cargado correctamente:', window.externalTextVariable);
        };

        document.body.appendChild(scriptElement);
    }, []);


    //const cont = contenido;

    /*
    const ContentConfig = [
        {
            component: "fila",
            children: [
                {
                    component: "columna",
                    children: [
                        {
                            component: "párrafo",
                            src: {
                                className: "text-success",
                                texto: "Diagramas de barras"
                            }
                        }
                    ]
                }
            ]
        }
        ,
        {
            component: "fila",
            children: [
                {
                    component: "columna",
                    children: [
                        {
                            component: "párrafo",
                            src: {
                                className: "text-success",
                                texto: "Barras verticales"
                            }
                        }
 
                        ,
 
                        {
                            component: "barrasChartJS",
                            src: [
                                {
                                    responsive: true,
                                    maintainAspectRatio: true,
                                    aspectRatio: 0.8,
                                    plugins: {
                                        legend: {
                                            position: 'top',
                                        },
                                        title: {
                                            display: true,
                                            text: 'Ejemplo 1',
                                        }
                                    }
                                }
                                ,
                                {
                                    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                                    datasets: [
                                        {
                                            label: 'Dataset 1',
                                            data: [100, 200, 300, 400, 500, 600, 700],
                                            backgroundColor: 'rgba(255, 99, 132, 0.5)',
                                        },
                                        {
                                            label: 'Dataset 2',
                                            data: [150, 250, 350, 450, 550, 650, 750],
                                            backgroundColor: 'rgba(53, 162, 235, 0.5)',
                                        }
                                    ]
                                }
                            ]
                        }
 
                    ]
                }
                ,
                {
                    component: "columna",
                    children: [
                        {
                            component: "párrafo",
                            src: {
                                className: "text-success",
                                texto: "Barras horizontales"
                            }
                        }
 
                        ,
 
                        {
                            component: "barrasChartJS",
                            src: [
                                {
                                    responsive: true,
                                    maintainAspectRatio: true,
                                    aspectRatio: 0.8,
                                    indexAxis: 'y',
                                    plugins: {
                                        legend: {
                                            position: 'top',
                                        },
                                        title: {
                                            display: true,
                                            text: 'ejemplo de Chart.js Bar Chart',
                                        },
 
                                    }
                                }
                                ,
                                {
                                    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                                    datasets: [
                                        {
                                            label: 'Dataset 1',
                                            data: [100, 200, 300, 400, 500, 600, 700],
                                            backgroundColor: 'rgba(255, 99, 132, 0.5)',
                                        },
                                        {
                                            label: 'Dataset 2',
                                            data: [150, 250, 350, 450, 550, 650, 750],
                                            backgroundColor: 'rgba(53, 162, 235, 0.5)',
 
                                            borderColor: 'rgba(200, 200, 200, 0.5)',
                                            borderWidth: 1.5, // podemos especificar el ancho del borde y también su color
                                        },
                                    ]
                                }
                            ]
 
                        }
                    ]
                }
                ,
                {
                    component: "columna",
                    children: [
                        {
                            component: "párrafo",
                            src: {
                                className: "text-success",
                                texto: "Barras apiladas"
                            }
                        }
                        ,
                        {
                            component: "barrasChartJS",
                            src: [
                                {
                                    scales: {
                                        x: {
                                            stacked: true,
                                        },
                                        y: {
                                            stacked: true,
                                        },
                                    },
                                    responsive: true,
                                    maintainAspectRatio: true,
                                    aspectRatio: 0.8,
                                    //indexAxis: 'y',
                                    plugins: {
                                        legend: {
                                            position: 'top',
                                        },
                                        title: {
                                            display: true,
                                            text: 'Desempeño',
                                        },
                                        // no funciona el cambio de colores
                                        labels: {
                                            fontColor: 'rgba(255, 255, 255, 1)',
                                            fontSize: 40,
                                        },
                                        datalabels: {
                                            formatter: (value, context) => {
                                                const datapoints = context.chart.data.datasets[0].data;
                                                function totalSum(total, datapoint) {
                                                    return total + datapoint;
                                                }
                                                const totalValue = datapoints.reduce(totalSum, 0);
                                                const percentageValue = (value / totalValue * 100).toFixed(1);
                                                const display = [`Tot. ${value}` , `${percentageValue}%`]
                                                return display;
                                            }
                                        }
                                    }
                                }
                                ,
                                {
                                    labels: ['3° Grado', '4° Grado', '5° Grado'],
 
                                    datasets: [
                                        {
                                            label: 'Crítico',
                                            data: [40, 30, 20],
                                            backgroundColor: 'rgba(32, 81, 89, 0.5)', // "#205159"                                            
                                        },
                                        {
                                            label: 'Básico',
                                            data: [20, 10, 40],
                                            backgroundColor: 'rgba(48, 122, 138, 0.5)', // "#307A8A"
                                        },
                                        {
                                            label: 'Medio',
                                            data: [10, 50, 20],
                                            backgroundColor: 'rgba(74, 172, 174, 0.5)', // "#4AACAE"
                                        },
                                        {
                                            label: 'Avanzado',
                                            data: [30, 10, 20],
                                            backgroundColor: 'rgba(157, 222, 220, 0.5)', //  "#9DDEDC"
                                        },
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
 
                    component: "columna",
                    children: [
                        {
                            component: "párrafo",
                            src: {
                                className: "text-success",
                                texto: "Barras agrupadas"
                            }
                        }
                        ,
                        {
                            component: "barrasChartJS",
                            src: [
                                {
                                    scales: {
                                        x: {
                                            stacked: true,
                                        },
                                        y: {
                                            stacked: true,
                                        },
                                    },
                                    responsive: true,
                                    maintainAspectRatio: true,
                                    aspectRatio: 0.8,
                                    // acá puedo controlar el grosor de las barras
                                    // y para que se puedan dibujar pegadas
                                    borderWidth: 1,
                                    barPercentage: 1,
                                    categoryPercentage: 1,
 
                                    plugins: {
 
                                        legend: {
                                            position: 'top',
                                        },
                                        title: {
                                            display: true,
                                            text: 'Ejemplo 1',
                                        },
                                    }
                                }
                                ,
                                {
                                    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                                    datasets: [
                                        {
                                            label: 'Dataset 1',
                                            data: [100, 200, 300, 400, 500, 600, 700],
                                            backgroundColor: 'rgba(255, 99, 132, 0.5)',
                                        },
                                        {
                                            label: 'Dataset 2',
                                            data: [150, 250, 350, 450, 550, 650, 750],
                                            backgroundColor: 'rgba(53, 162, 235, 0.5)',
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ];
    */

    return (
        <div>
            {textData.map(config => RenderizarComponentes(config))}
        </div>
    )
}

/*
,
        {

            component: "fila",
            children: [
                {
                    component: "columna",
                    children: [
                        {
                            component: "párrafo",
                            src: {
                                className: "text-success",
                                texto: "Barras Verticales"
                            }
                        }

                    ],

                }
                ,
                {
                    component: "columna",
                    children: [
                        {
                            component: "barrasVerticalesChartJS",
                            src: [
                                {
                                    responsive: true,
                                    maintainAspectRatio: true,
                                    aspectRatio: 0.8,
                                    plugins: {
                                        legend: {
                                            position: 'top',
                                        },
                                        title: {
                                            display: true,
                                            text: 'Ejemplo 1',
                                        }
                                    }
                                }
                                ,
                                {
                                    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                                    datasets: [
                                        {
                                            label: 'Dataset 1',
                                            data: [100, 200, 300, 400, 500, 600, 700],
                                            backgroundColor: 'rgba(255, 99, 132, 0.5)',
                                        },
                                        {
                                            label: 'Dataset 2',
                                            data: [150, 250, 350, 450, 550, 650, 750],
                                            backgroundColor: 'rgba(53, 162, 235, 0.5)',
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            component: "fila",
            children: [
                {
                    component: "columna",
                    children: [
                        {
                            component: "párrafo",
                            src: {
                                className: "text-primary",
                                texto: "Barras Horizontales"
                            }
                        }
                    ]
                },
                {
                    component: "columna",
                    children: [
                        {
                            component: "barrasHorizontalesChartJS",
                            src: [
                                {
                                    responsive: true,
                                    maintainAspectRatio: true,
                                    aspectRatio: 0.8,
                                    indexAxis: 'y',
                                    plugins: {
                                        legend: {
                                            position: 'top',
                                        },
                                        title: {
                                            display: true,
                                            text: 'ejemplo de Chart.js Bar Chart',
                                        }
                                    }
                                }
                                ,
                                {
                                    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                                    datasets: [
                                        {
                                            label: 'Dataset 1',
                                            data: [100, 200, 300, 400, 500, 600, 700],
                                            backgroundColor: 'rgba(255, 99, 132, 0.5)',
                                        },
                                        {
                                            label: 'Dataset 2',
                                            data: [150, 250, 350, 450, 550, 650, 750],
                                            backgroundColor: 'rgba(53, 162, 235, 0.5)',
                                        },
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
*/
