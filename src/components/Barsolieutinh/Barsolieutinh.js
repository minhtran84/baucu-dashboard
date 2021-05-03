import React from 'react';
import { Bar } from 'react-chartjs-2';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    card: {
      //padding: theme.spacing(1),
      color: theme.palette.text.secondary,
      backgroundColor: '#e9ecef', 
    },
}));

const Barsolieutinh = ( {data} ) => {

    const classes = useStyles();

    const labelArray = [];

    const sophieuArray = [];

    //destructuring data
    Object.entries(data).map( ([key, value]) => {
        labelArray.push(value.hoten);
        sophieuArray.push(value.sophieu);
    })

    const bardata = {
        labels: labelArray,
        datasets: [
            {
            label: 'Số phiếu bầu',
            data: sophieuArray,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
            },
        ],      
    };
        
    return (
        <Card className={classes.card}>
            <CardHeader></CardHeader>
            <CardContent>
                <Bar data={bardata} />
            </CardContent>
        </Card>
        
        // <Bar
        //     data={bardata} 
        //     // options={{
        //     //     legend: {display: true, position: "bottom"},
        //     //     title: {display: true, text: "Đại biểu HĐND tỉnh"},
        //     // }}
        // />
    )
}

export default Barsolieutinh;