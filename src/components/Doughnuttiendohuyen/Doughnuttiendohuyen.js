import React from 'react';
import { Doughnut } from 'react-chartjs-2';

import styles from './Doughnuttiendohuyen.module.css';

const Doughnuttiendohuyen = ( {data} ) => {

    const rest = 1260 - data; //1260 for 2021

    const tiendo_tyle = (data/1260*100).toFixed(2);

    const doughnutdata = {
        labels: ['Hoàn thành', 'Chưa hoàn thành'],
        datasets: [
            {
                label: 'Num of TBCs',
                data: [data, rest],
                backgroundColor: [
                    'rgba(254, 228, 64, 0.5)',
                    'rgba(255, 89, 94, 0.5)',
                ],
                hoverBackgroundColor: [
                    'rgba(254, 228, 64, 0.5)',
                    'rgba(255, 89, 94, 0.5)',
                ],
                borderColor: [
                    'rgba(254, 228, 64, 1)',
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
                title: {display: true, text: "Đại biểu HĐND huyện"},
            }}
        />
    )
}

export default Doughnuttiendohuyen;