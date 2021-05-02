import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import { Bar } from 'react-chartjs-2';

const useStyles = makeStyles((theme) => ({
    card: {
      //padding: theme.spacing(1),
      color: theme.palette.text.secondary,
      backgroundColor: '#e9ecef', 
    // background: 'linear-gradient(45deg, hsla(212, 35%, 58%, 1) 0%, hsla(218, 32%, 80%, 1) 100%)',
},
    cardHeader: {
        // color: theme.palette.text.primary,
    },
}));

const CardChart = ( {donvis, handleDonviqhClick, solieu} ) => {

    const classes = useStyles();

    const labelArray = [];

    const sophieuArray = [];

    //destructuring data
    Object.entries(solieu).map( ([key, value]) => {
        labelArray.push(value.hoten);
        sophieuArray.push(value.sophieu);
    })
        
    const bardata = {
        labels: labelArray,
        datasets: [
            {
            // label: (selectedDonviqh == '') ? 'Số liệu phiếu bầu ĐBQH' : `Đơn vị bầu cử ${selectedDonviqh}`,
            label: "Số phiếu bầu",
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

    //CHART OPTIONS - GRID LINE CONFIGURATION
    const options = {
        scales: {
            xAxes: [{
                gridLines: {
                    drawOnChartArea: false
                }
            }],
            yAxes: [{
                gridLines: {
                    drawOnChartArea: false
                }   
            }]
        }
    };

    return (

        <Card className={classes.card}>
            <CardHeader title="Đại biểu Quốc hội" className={classes.cardHeader}/>
            <CardActions style={{justifyContent: 'center'}}>
                <ButtonGroup variant="text" color="primary" aria-label="contained primary button group">

                    {Object.entries(donvis).map( ([key, value]) => (

                        <Button onClick={ (e) => handleDonviqhClick(key) }>{value}</Button>

                        ) ) 
                    }
                </ButtonGroup>
            </CardActions>
            <CardContent>
                <Bar data={bardata} options={options} />
            </CardContent>

        </Card>
        
    )
}

export default CardChart;