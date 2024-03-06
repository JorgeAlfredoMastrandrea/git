import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement , RadialLinearScale , Filler} from 'chart.js';
import { Scatter } from 'react-chartjs-2';
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Chart } from "chart.js";
Chart.register(ChartDataLabels);
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend , ArcElement , ArcElement , RadialLinearScale , Filler) ;

export const ScatterChartJS = (src) => {
  return (
    <Scatter options={src.opcionesBarra[0]} data={src.datosBarra[0]} plugins={[ChartDataLabels]} type={src.type}/>    
  )
}
