import React from 'react';
import { Doughnut } from 'react-chartjs-2';

import styles from './Doughnuttiendoqh.module.css';

const Doughnuttiendoqh = ( {data} ) => {

    const rest = 2100 - data;

    const tiendo_tyle = (data/2100*100).toFixed(2);

    const doughnutdata = {
        labels: ['Hoàn thành', 'Chưa hoàn thành'],
        datasets: [
            {
                label: 'Num of TBCs',
                data: [data, rest],
                backgroundColor: [
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)',
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
                title: {display: true, text: "Đại biểu Quốc hội"},
            }}
        />
    )
}

export default Doughnuttiendoqh;