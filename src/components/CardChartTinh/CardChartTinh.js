import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';
import { Bar } from 'react-chartjs-2';

const useStyles = makeStyles((theme) => ({
    card: {
      //padding: theme.spacing(1),
      color: theme.palette.text.secondary,
      backgroundColor: '#e9ecef', 
    },
    // controls: {
    //     display: 'flex',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    // },
}));

const CardChartTinh = ( {donvis, handleDonviClick, solieu} ) => {

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

    return (

        <Card className={classes.card}>
            <CardHeader title="Hội đồng nhân dân tỉnh" />
            <CardActions disableSpacing={true} style={{justifyContent: 'center'}}>
                <FormControl variant="outlined">
                    <InputLabel htmlFor="outlined-donvibaucutinhs">Đơn vị bầu cử HĐND tỉnh</InputLabel>
                    <NativeSelect onChange={ (e) => handleDonviClick(e.target.value) } 
                        inputProps={{name: '', id: 'outlined-donvibaucutinhs'}}>
                        <option aria-label="None" value="" />
                        {Object.entries(donvis).map( ([key, value]) => 
                            <option key={value.id} value={value.id}>{value.tenhuyen}</option>
                        )}
                    </NativeSelect>
                </FormControl>
            </CardActions>
            <CardContent>
                <Bar data={bardata} />
            </CardContent>

        </Card>
        
    )
}

export default CardChartTinh;