import React from 'react';

import { 
  Danhsachdonvi, Danhsachdonviqh,
  Pietiendotinh, Pietiendoqh, Pietiendohuyen, Pietiendoxa,
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
              <Paper square style={{backgroundColor: "ghostwhite"}}>
                <Typography variant="subtitle1" color="secondary" align="center" gutterBottom>Tiến độ cập nhật số liệu bầu cử 04 cấp</Typography>
                <Grid container justify="center">
                    <Grid item xs={12} sm={6}>
                      {/* <Paper elevation={2} square> */}
                      <Pietiendoqh data={tiendoqh} />
                      {/* </Paper> */}
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      {/* <Paper elevation={2} square> */}
                      <Pietiendotinh data={tiendotinh} />
                      {/* </Paper> */}
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      {/* <Paper elevation={2} square> */}
                      <Pietiendohuyen data={tiendohuyen} />
                      {/* </Paper> */}
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      {/* <Paper elevation={2} square> */}
                      <Pietiendoxa data={tiendoxa} />
                      {/* </Paper> */}
                    </Grid>
                </Grid>
              </Paper>
            </Container>

            {/* END PIE CHARTS TIEN DO BO PHIEU */}
          </div>
        </main>


      {/* CORONA TRACKER APP */}
      <footer>
          <div className={styles.container}>
            
            <div className={styles.footer}>
              <Typography color="textSecondary" variant="caption">
                <footer>Minh Tran &copy; 2021</footer>
              </Typography>
            </div>
          </div>
      </footer>

      </>
    )
  }
}

export default App;
