import React from 'react';
import ReactDOM from 'react-dom';
import { Chart } from 'chart.js';

import { 
  Danhsachdonvi, Danhsachdonviqh, 
  Doughnuttiendotinh, Doughnuttiendoqh, Doughnuttiendohuyen, Doughnuttiendoxa,
  Barsolieutinh, Barsolieuqh
}   from './components';

import { Typography, AppBar, Grid, Container, 
  CssBaseline, Toolbar, Paper,
} from '@material-ui/core';

import styles from './App.module.css';

import baucuImage from './images/banner.png';

import { 
  fetchdsDonvibaucutinh, fetchdsDonvibaucuqh, fetchSolieutheodonvi, fetchSolieutheodonviqh,
  fetchTiendotinh, fetchTiendoqh, fetchTiendohuyen, fetchTiendoxa
} from './api';

//THIS MAGIC SCRIPTLET WILL ADD TEXT IN CENTER OF DOUGHNUT CHART
var originalDoughnutDraw = Chart.controllers.doughnut.prototype.draw;
Chart.helpers.extend(Chart.controllers.doughnut.prototype, {
  draw: function() {
    originalDoughnutDraw.apply(this, arguments);
    
    var chart = this.chart;
    var width = chart.chart.width,
        height = chart.chart.height,
        ctx = chart.chart.ctx;

    var fontSize = (height / 184).toFixed(2);
    ctx.font = fontSize + "em sans-serif";
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

    // const classes = useStyles();

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

        <main>
          <div>
            {/* DANH SACH DON VI BAU CU & BAR CHARTS*/}
            <Container className={styles.containerM}>
              <Paper square style={{backgroundColor: "whitesmoke"}}>
                <Typography variant="subtitle1" color="secondary" align="center" gutterBottom>Số phiếu bầu của Đại biểu theo Đơn vị bầu cử</Typography>
                <Grid container spacing={1} justify="center">
                  <Grid item xs={12} sm={6}>
                      <Danhsachdonviqh data={donviqhs} handleDonviqhClick={this.handleDonviqhClick} />
                      <Barsolieuqh data={solieutheodonviqh} selectedDonviqh={donviqh}/>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                      <Danhsachdonvi data={donvis} handleDonviClick={this.handleDonviClick} />   
                      <Barsolieutinh data={solieutheodonvi} />
                  </Grid>
                </Grid>
              </Paper>
            </Container>
            {/* END DANH SACH DON VI BAU CU & BAR CHARTS*/}

            {/* PIE CHARTS TIEN DO BO PHIEU */}
            <Container className={styles.containerM}>
              <Paper square style={{backgroundColor: "#e9ecef"}}>
                <Typography variant="subtitle1" color="secondary" align="center" gutterBottom>Tiến độ cập nhật số liệu bầu cử 04 cấp</Typography>
                <Grid container justify="center">
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
              </Paper>
            </Container>

            {/* END PIE CHARTS TIEN DO BO PHIEU */}
          </div>
        </main>


      {/* CORONA TRACKER APP */}
      {/* <footer>
          <div className={styles.container}>
            
            <div className={styles.footer}>
              <Typography color="textSecondary" variant="caption">
                <footer>Minh Tran &copy; 2021</footer>
              </Typography>
            </div>
          </div>
      </footer> */}

      <AppBar className={styles.footer} position="relative" color="primary">
          <Toolbar>
            <Typography color="textSecondary" variant="body2">
                <footer>Sở Thông tin và Truyền thông &copy; 2021</footer>
              </Typography>
          </Toolbar>
        </AppBar>

      </>
    )
  }
}

export default App;
