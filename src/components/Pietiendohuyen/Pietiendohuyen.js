import React from 'react';
import { Pie } from 'react-chartjs-2';

import styles from './Pietiendohuyen.module.css';

const Pietiendohuyen = ( {data} ) => {

    const rest = 1316 - data;

    const piedata = {
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
    };
        
    return (

        <Pie 
            data={piedata} 
            options={{
                legend: {display: true, position: "bottom"},
                title: {display: true, text: "Đại biểu HĐND huyện"},
            }}
        />
    )
}

export default Pietiendohuyen;