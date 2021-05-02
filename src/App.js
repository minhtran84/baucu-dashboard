import React from 'react';
import { Chart } from 'chart.js';

import { 
  Danhsachdonvi, Danhsachdonviqh, 
  Doughnuttiendotinh, Doughnuttiendoqh, Doughnuttiendohuyen, Doughnuttiendoxa,
  Barsolieutinh, Barsolieuqh, CardChart, CardChartTinh,
}   from './components';

import { Typography, AppBar, Grid, Container, 
  CssBaseline, Toolbar, 
} from '@material-ui/core';

import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

import styles from './App.module.css';

import baucuImage from './images/banner.png';

import { 
  fetchdsDonvibaucutinh, fetchdsDonvibaucuqh, fetchSolieutheodonvi, fetchSolieutheodonviqh,
  fetchTiendotinh, fetchTiendoqh, fetchTiendohuyen, fetchTiendoxa
} from './api';

//USAGE MATERIAL-UI STYLES IN CLASS COMPONENT
const useStyles = theme => ({
  box: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
   },
});

//THIS MAGIC SCRIPTLET WILL ADD TEXT IN CENTER OF DOUGHNUT CHART
var originalDoughnutDraw = Chart.controllers.doughnut.prototype.draw;
Chart.helpers.extend(Chart.controllers.doughnut.prototype, {
  draw: function() {
    originalDoughnutDraw.apply(this, arguments);
    
    var chart = this.chart;
    var width = chart.chart.width,
        height = chart.chart.height,
        ctx = chart.chart.ctx;

    //var fontSize = (height / 184).toFixed(2);
    //ctx.font = fontSize + "em sans-serif";
    var fontSize = (height / 124).toFixed(2);
    ctx.font = fontSize + "em";
    ctx.textBaseline = "middle";

    var text = chart.config.data.text,
        textX = Math.round((width - ctx.measureText(text).width) / 2),
        textY = height / 2;

    ctx.fillText(text, textX, textY);
  }
});
//END OF MAGIC SCRIPTLET

class App extends React.Component {

  state = {
    donvis: {}, //danh sach don vi bau cu tinh
    donviqhs: {}, 
    donvi: '', //hold the selected donvi by user
    donviqh: '',
    solieutheodonvi: {}, //so phieu bau theo don vi bau cu tinh
    solieutheodonviqh: {},
    tiendotinh: '', //hold so TBC da cap nhat so lieu bau cu tinh
    tiendoqh: '',
    tiendohuyen: '',
    tiendoxa: '',
  }

  async componentDidMount() {

    //console.log(this.state.donviqh);

    const fetchedDonvis = await fetchdsDonvibaucutinh();

    const fetchedDonviqhs = await fetchdsDonvibaucuqh();

    const fetchedTiendotinh = await fetchTiendotinh();

    const fetchedTiendoqh = await fetchTiendoqh();

    const fetchedTiendohuyen = await fetchTiendohuyen();

    const fetchedTiendoxa = await fetchTiendoxa();

    this.setState(
      { 
        donvis: fetchedDonvis, 
        donviqhs: fetchedDonviqhs,
        tiendotinh: fetchedTiendotinh,
        tiendoqh: fetchedTiendoqh,
        tiendohuyen: fetchedTiendohuyen,
        tiendoxa: fetchedTiendoxa,
      }
    )
  }

  //Handler for event click on Don vi bau cu tinh
  handleDonviClick = async (donvi) => {
    //fetch the data
    const fetchedData = await fetchSolieutheodonvi(donvi);

    console.log(donvi);

    //set the state
    this.setState({ 
      solieutheodonvi: fetchedData,
      donvi: donvi
    })
  }

  //Handler for event click on Don vi bau cu QH
  handleDonviqhClick = async (donvi) => {
    //fetch the data
    const fetchedData = await fetchSolieutheodonviqh(donvi);

    console.log(donvi);

    //set the state
    this.setState({ 
      solieutheodonviqh: fetchedData,
      donviqh: donvi,
    })
  }

  render() {

    const { classes } = this.props;

    const { 
      donvis, donviqhs, donvi, donviqh, 
      solieutheodonvi, solieutheodonviqh,
      tiendotinh, tiendoqh, tiendohuyen, tiendoxa
    } = this.state;
  
    return (
      <>
        <CssBaseline />

        <AppBar className={styles.appBar} position="relative">
          <Toolbar>
            <Typography>
              <img src={baucuImage} className={styles.image} alt="BAU CU" />
            </Typography>
          </Toolbar>
        </AppBar>

        <Button className={classes.box}>Material-UI styles in class Component</Button>

            {/* DANH SACH DON VI BAU CU & BAR CHARTS*/}
            <Container className={styles.containerM}>
              {/* <Paper square style={{backgroundColor: "whitesmoke"}}> */}
                <Typography variant="button" display="block" color="secondary" align="center" gutterBottom>Số phiếu bầu của Đại biểu theo Đơn vị bầu cử</Typography>
                <Grid container spacing={3} justify="center">
                  <Grid item xs={12} sm={6}>
                      <CardChart 
                        donvis={donviqhs} handleDonviqhClick={this.handleDonviqhClick}
                        solieu={solieutheodonviqh}
                      />
                      {/* <Danhsachdonviqh data={donviqhs} handleDonviqhClick={this.handleDonviqhClick} />
                      <Barsolieuqh data={solieutheodonviqh} selectedDonviqh={donviqh}/> */}
                  </Grid>
                  <Grid item xs={12} sm={6}>
                      <CardChartTinh
                        donvis={donvis} handleDonviClick={this.handleDonviClick} 
                        solieu={solieutheodonvi}
                      />
                      {/* <Danhsachdonvi data={donvis} handleDonviClick={this.handleDonviClick} />   
                      <Barsolieutinh data={solieutheodonvi} /> */}
                  </Grid>
                </Grid>
              {/* </Paper> */}
            </Container>
            {/* END DANH SACH DON VI BAU CU & BAR CHARTS*/}

            {/* PIE CHARTS TIEN DO BO PHIEU */}
            <Container className={styles.containerM}>
                <Typography variant="button" display="block" color="secondary" align="center" gutterBottom>Tiến độ cập nhật số liệu bầu cử 04 cấp</Typography>
                {/* the spacing between two grid items */}
                <Grid container justify="center" spacing={3}> 
                    <Grid item xs={12} sm={6}>
                      <Doughnuttiendoqh data={tiendoqh} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Doughnuttiendotinh data={tiendotinh} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Doughnuttiendohuyen data={tiendohuyen} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Doughnuttiendoxa data={tiendoxa} />
                    </Grid>
                </Grid>
            </Container>

            {/* END PIE CHARTS TIEN DO BO PHIEU */}

      <AppBar className={styles.footer} position="relative" color="primary">
          <Toolbar>
            <Typography color="#ffffff" variant="body2">
                <footer>Sở Thông tin và Truyền thông &copy; 2021</footer>
              </Typography>
          </Toolbar>
        </AppBar>

      </>
    )
  }
}

//export default App;

//WITHSTYLES MATERIAL-UI FOR CLASS COMPONENT
export default withStyles(useStyles)(App);
