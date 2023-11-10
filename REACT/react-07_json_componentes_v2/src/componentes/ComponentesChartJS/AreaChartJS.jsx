import React from 'react'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend, } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Chart } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
Chart.register(ChartDataLabels);
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend);

export const AreaChartJS = (src) => {
    return (
        <Line options={src.opcionesBarra[0]} data={src.datosBarra[0]} plugins={[ChartDataLabels]} />
    )
}
