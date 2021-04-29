import React from 'react';
import { Doughnut } from 'react-chartjs-2';

import styles from './Doughnuttiendoqh.module.css';

const Doughnuttiendoqh = ( {data} ) => {

    const rest = 1260 - data;

    const tiendo_tyle = (data/1260*100).toFixed(2);

    const doughnutdata = {
        labels: ['Hoàn thành', 'Chưa hoàn thành'],
        datasets: [
            {
                label: 'Num of TBCs',
                data: [data, rest],
                backgroundColor: [
                    'rgba(255, 198, 255, 0.7)',
                    'rgba(255, 89, 94, 0.5)',
                ],
                hoverBackgroundColor: [
                    'rgba(255, 198, 255, 0.7)',
                    'rgba(255, 89, 94, 0.5)',
                ],
                borderColor: [
                    'rgba(255, 198, 255, 1)',
                    'rgba(255, 89, 94, 0.5)',
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
                title: {display: true, text: "Đại biểu Quốc hội"},
            }}
        />
    )
}

export default Doughnuttiendoqh;