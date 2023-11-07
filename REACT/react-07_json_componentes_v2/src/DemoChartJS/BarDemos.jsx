// https://www.chartjs.org/docs/latest/configuration/responsive.html
// ver lo que dice sobre imprimir..!!

import React from 'react'
import { RenderizarComponentes } from '../componentes/RenderizarComponentes'
import "bootstrap/dist/css/bootstrap.min.css";

export const BarDemos = () => {

    const ContentConfig = [
        {
            component: "fila",
            children: [
                {
                    component: "columna",
                    children: [
                        {
                            component: "párrafo",
                            children: "Barras Verticales"
                        }

                    ],
                },
                {
                    component: "columna",
                    children: [
                        {
                            component: "barrasVerticalesChartJS",
                            src: [
                                {
                                    responsive: true,
                                    maintainAspectRatio: true,
                                    plugins: {
                                        legend: {
                                            position: 'top',
                                        },
                                        title: {
                                            display: true,
                                            text: 'Ejemplo 1',
                                        },
                                    },
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
                            children: "Barras Horizontales"
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
                                    indexAxis: 'y',
                                    plugins: {
                                        legend: {
                                            position: 'top',
                                        },
                                        title: {
                                            display: true,
                                            text: 'ejemplo de Chart.js Bar Chart',
                                        },
                                    },
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
                                    ],
                                }
                            ]
                        }
                    ]
                }
            ],


        }
    ];

    return (
        <div>
            {ContentConfig.map(config => RenderizarComponentes(config))}
        </div>
    )
}
