import React from 'react';
// import ReactDOM from 'react-dom';
import { Doughnut } from 'react-chartjs-2';
// import { Chart } from 'chart.js';

import styles from './Doughnuttiendotinh.module.css';

// //THIS MAGIC SCRIPTLET WILL ADD TEXT IN CENTER OF DOUGHNUT CHART
// var originalDoughnutDraw = Chart.controllers.doughnut.prototype.draw;
// Chart.helpers.extend(Chart.controllers.doughnut.prototype, {
//   draw: function() {
//     originalDoughnutDraw.apply(this, arguments);
    
//     var chart = this.chart;
//     var width = chart.chart.width,
//         height = chart.chart.height,
//         ctx = chart.chart.ctx;

//     var fontSize = (height / 184).toFixed(2);
//     ctx.font = fontSize + "em sans-serif";
//     ctx.textBaseline = "middle";

//     var text = chart.config.data.text,
//         textX = Math.round((width - ctx.measureText(text).width) / 2),
//         textY = height / 2;

//     ctx.fillText(text, textX, textY);
//   }
// });
// //END OF MAGIC SCRIPTLET

const Doughnuttiendotinh = ( {data} ) => {

    const rest = 2900 - data;

    const tiendo_tyle = (data/2900*100).toFixed(2);

    const doughnutdata = {
        labels: ['Hoàn thành', 'Chưa hoàn thành'],
        datasets: [
            {
                label: 'Num of TBCs',
                data: [data, rest],
                backgroundColor: [
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 206, 86, 1)',
                    'rgba(255, 99, 132, 1)',
                ],
                borderWidth: (rest === 0) ? 0 : 1,
            },
        ],
        text: `${tiendo_tyle}%`
    };
        
    return (

        <Doughnut
            data={doughnutdata} 
            options={{
                legend: {display: true, position: "bottom"},
                title: {display: true, text: "Đại biểu HĐND tỉnh"},
            }}
        />
    )
}

export default Doughnuttiendotinh;