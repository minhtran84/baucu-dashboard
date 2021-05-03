import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    card: {
      padding: theme.spacing(2),
    //   textAlign: 'center',
      color: theme.palette.text.secondary,
    //   backgroundColor: '#e9ecef', 
    background: 'linear-gradient(55deg, hsla(212, 35%, 58%, 1) 0%, hsla(218, 32%, 80%, 1) 100%)',
    },
}));

const Doughnuttiendohuyen = ( {data} ) => {

    const classes = useStyles();

    const rest = 1260 - 764; //1260 for 2021

    const tiendo_tyle = (764/1260*100).toFixed(2);

    const doughnutdata = {
        labels: ['Hoàn thành', 'Chưa hoàn thành'],
        datasets: [
            {
                label: 'Num of TBCs',
                data: [764, rest],
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
        <Card className={classes.card}>
            <CardHeader title="Hội đồng nhân dân huyện" />
            <CardContent>
                <Doughnut
                    data={doughnutdata} 
                    options={{
                        legend: {display: true, position: "bottom"},
                        // title: {display: true, text: "Đại biểu HĐND huyện"},
                    }}
                />
            </CardContent>
        </Card>
    )
}

export default Doughnuttiendohuyen;