import React from 'react';
import {
   PieChart as PChart, Pie, Sector, Cell, ResponsiveContainer,
} from 'recharts';
import { Grid, Paper, makeStyles, List, ListItem, ListItemText } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MoreIcon from '@material-ui/icons/MoreVert';
import Toolbar from '@material-ui/core/Toolbar';



const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
const RADIAN = Math.PI / 180;

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    menuButton: {
        marginRight: theme.spacing(2),
        marginLeft: 'auto'
      },
  }));

const PieChart = () => {

    const classes = useStyles();

    return (
        <ResponsiveContainer width="99%" aspect={3}>
        <Paper className={classes.paper}>
            
            <Grid container>
                <Typography variant="h6" className={classes.title}>
                    Revenue Breakdown
                </Typography>
                <IconButton edge="end" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MoreIcon/>
                </IconButton>
            </Grid>
            
            <Grid container spacing={3} md={12} xs={12}>
                <Grid item xs={6} md={6}>
                        <PChart width={500} height={200} >
                    
                            <Pie
                                data={data}
                                cx={75}
                                cy={90}
                                innerRadius={60}
                                outerRadius={70}
                                fill="#8884d8"
                                paddingAngle={5}
                                dataKey="value"
                                
                            >
                            {
                                data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                            }
                            </Pie>
                            
                        </PChart>
                </Grid>
                <Grid item xs={6} md={6}>

                    <List>
                        {
                            
                            data.map(d=>
                                <ListItem>
                                    <ListItemText
                                        primary={ `${d.name} ${d.value}`}
                                        style={{background: COLORS[data.indexOf(d)], color: 'white'  }}
                                    />
                                </ListItem>
                            )
                        }
                    </List>
                </Grid>
        
            </Grid>
        </Paper>
        </ResponsiveContainer>

    );
};

export default PieChart;