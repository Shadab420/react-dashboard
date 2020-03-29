import React from 'react';
import Auth from '../../myHooks/useAuth';
import Appbar from '../Menus/Appbar';
import PieChart from '../Charts/PieChart';
import { Grid, Paper, makeStyles } from '@material-ui/core';
import LineChart from '../Charts/LineChart';


  

const Dashboard = () => {
    
    const auth = Auth();
    console.log(auth.user);
    //console.log(auth.user.name);
    // const { name } = auth.user;

    return (
        <div>
          <Appbar>
            <Grid container spacing={3}>
                <Grid item xs>
                  
                  <PieChart></PieChart>
                  
                </Grid>
                <Grid item xs>
                  
                </Grid>
                <Grid item xs>
                  
                </Grid>
                <Grid item xs>
                  
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