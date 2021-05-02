import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    card: {
      padding: theme.spacing(2),
      color: theme.palette.text.secondary,
    //   backgroundColor: '#e9ecef', 
    background: 'linear-gradient(55deg, hsla(212, 35%, 58%, 1) 0%, hsla(218, 32%, 80%, 1) 100%)',
    },
}));

const Doughnuttiendoqh = ( {data} ) => {

    const classes = useStyles();

    const rest = 260 - data;

    const tiendo_tyle = (data/260*100).toFixed(2);

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
        <Card className={classes.card}>
            <CardHeader title="Đại biểu Quốc hội" />
            <CardContent>
                <Doughnut
                    data={doughnutdata} 
                    options={{
                        legend: {display: true, position: "bottom"},
                        // title: {display: true, text: "Đại biểu Quốc hội"},
                    }}
                />
            </CardContent>
        </Card>
    )
}

export default Doughnuttiendoqh;