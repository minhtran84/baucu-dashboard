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
      backgroundColor: '#e9ecef', 
    },
}));

const Doughnuttiendotinh = ( {data} ) => {

    const classes = useStyles();

    const rest = 1260 - data; //1260 for 2021

    const tiendo_tyle = (data/1260*100).toFixed(2);

    const doughnutdata = {
        labels: ['Hoàn thành', 'Chưa hoàn thành'],
        datasets: [
            {
                label: 'Num of TBCs',
                data: [data, rest],
                backgroundColor: [
                    'rgba(76, 201, 240, 0.5)',
                    'rgba(255, 89, 94, 0.5)',
                ],
                hoverBackgroundColor: [
                    'rgba(76, 201, 240, 0.5)',
                    'rgba(255, 89, 94, 0.5)',
                ],
                borderColor: [
                    'rgba(76, 201, 240, 1)',
                    'rgba(255, 89, 94, 0.5)',
                ],
                borderWidth: (rest === 0) ? 0 : 1,
            },
        ],
        text: `${tiendo_tyle}%`
    };
        
    return (

        <Card className={classes.card}>
            <CardHeader title="Hội đồng nhân dân tỉnh" />
            <CardContent>
                <Doughnut
                    data={doughnutdata} 
                    options={{
                        legend: {display: true, position: "bottom"},
                    }}
                />
            </CardContent>
        </Card>
    )
}

export default Doughnuttiendotinh;