import React from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';
import { Grid, Paper, makeStyles, List, ListItem, ListItemText } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MoreIcon from '@material-ui/icons/MoreVert';

const data = [
    {
      name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
    },
    {
      name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
    },
    {
      name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
    },
    {
      name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
    },
    {
      name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
    },
    {
      name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
    },
    {
      name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
    },
  ];


const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      padding: 20
    },
    infoGrid:{
        marginLeft: 'auto',
        marginTop: 20
        
    },
    infoTitle: {
        fontSize: 16
    },
    infoText: {
        fontSize: 18
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      minHeight: '100%',
      minWidth: '100%'
    },
    menuButton: {
        marginRight: theme.spacing(2),
        marginLeft: 'auto'
      },
    
    visitNumber:{
        display: 'inline',
        fontWeight: 'bold'    
    }
  }));

const TinyLineChart = () => {

    const classes = useStyles();

    return (
        <ResponsiveContainer  width="99%" aspect={3}>
        <Paper className={classes.paper}>
            
            <Grid container>
                <Typography variant="h6" className={classes.title}>
                    Visits Today
                </Typography>
                <IconButton edge="end" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MoreIcon/>
                </IconButton>
            </Grid>
            
            <Grid container spacing={3} md={12} xs={12} className={classes.infoGrid}>
                
                    <Typography variant="h5" className={classes.visitNumber}>
                        12, 678
                    </Typography>
                    <LineChart width={50} height={50} data={data}>
                        <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
                    </LineChart>
                
        
            </Grid>

            <Grid container spacing={5} md={12} xs={12} className={classes.infoGrid}>
                <Grid xs={4} md={4}>
                    <Typography variant="h6" className={classes.infoTitle}>
                           Registration
                    </Typography>
                    <Typography variant="h5" className={classes.infoText}>
                        860
                    </Typography>
                </Grid>

                <Grid xs={4} md={4}>
                    <Typography variant="h6" className={classes.infoTitle}>
                           Sign Out
                    </Typography>
                    <Typography variant="h5" className={classes.infoText}>
                        32
                    </Typography>
                </Grid>

                <Grid xs={4} md={4}>
                    <Typography variant="h6" className={classes.infoTitle}>
                           Rate
                    </Typography>
                    <Typography variant="h5" className={classes.infoText}>
                        3.25%
                    </Typography>
                </Grid>
            </Grid>
        </Paper>
        </ResponsiveContainer>

    );
};

export default TinyLineChart;