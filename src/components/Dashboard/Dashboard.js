import React from 'react';
import Auth from '../../myHooks/useAuth';
import Appbar from '../Menus/Appbar';
import PieChart from '../Charts/PieChart';
import { Grid, Paper, makeStyles } from '@material-ui/core';
import LineChart from '../Charts/LineChart';
import TinyLineChart from '../Charts/TinyLineChart';


  

const Dashboard = () => {
    
    const auth = Auth();
    console.log(auth.user);
    //console.log(auth.user.name);
    // const { name } = auth.user;

    return (
        <div>
          <Appbar>
            <Grid container spacing={3} xs={12} md={12}>
                <Grid item xs={12} md={4}>
                  <TinyLineChart />
                </Grid>
                {/* <Grid item xs={12} md={3}>
                <TinyLineChart />
                </Grid>
                <Grid item xs={12} md={3}>
                <TinyLineChart />
                </Grid> */}
                <Grid item xs={12} md={4}>
                  <PieChart></PieChart>
                </Grid>
              </Grid>
              <Grid container spacing={3}>
                
                <Grid item xs={12} md={12}>
                  <LineChart/>
                </Grid>
              
            </Grid>
          </Appbar>
        </div>
    );
};

export default Dashboard;