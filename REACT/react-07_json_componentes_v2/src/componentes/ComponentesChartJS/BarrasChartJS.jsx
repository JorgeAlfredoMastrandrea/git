import React from 'react'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Chart } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
Chart.register(ChartDataLabels);

ChartJS.register(
    CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend
);

export const BarrasChartJS = (src) => {

    // esto es para que se puedan colocar los porcentajes
    const datalabels = {
        datalabels: {
            formatter: (value) => {
                const datapoints = src.datosBarra[0].datasets[0].data;
                function totalSum(total, datapoint) {
                    return total + datapoint;
                }
                const totalValue = datapoints.reduce(totalSum, 0);
                const percentageValue = (value / totalValue * 100).toFixed(1);
                const display = [`Tot. ${value}`, `${percentageValue}%`]
                return display;
            }
        }
    }
    const opciones = src.opcionesBarra[0]
    // en caso de querer expresar los resultados en porcentajes, si es true
    // se efectua el cálculo y se lo agrega al objeto
    if (src.opcionesBarra[0].porcentaje === true) {        
        opciones.plugins = datalabels;
    }

    return (
        <div>
            <Bar options={opciones} data={src.datosBarra[0]} plugins={[ChartDataLabels]} />
        </div>
    )
}