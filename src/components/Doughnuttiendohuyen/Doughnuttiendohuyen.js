import React from 'react';
import { Doughnut } from 'react-chartjs-2';

import styles from './Doughnuttiendohuyen.module.css';

const Doughnuttiendohuyen = ( {data} ) => {

    const rest = 3405 - data;

    const tiendo_tyle = (data/3405*100).toFixed(2); //need to catch zero

    const doughnutdata = {
        labels: ['Hoàn thành', 'Chưa hoàn thành'],
        datasets: [
            {
                label: 'Num of TBCs',
                data: [data, rest],
                backgroundColor: [
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)',
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
                title: {display: true, text: "Đại biểu HĐND huyện"},
            }}
        />
    )
}

export default Doughnuttiendohuyen;