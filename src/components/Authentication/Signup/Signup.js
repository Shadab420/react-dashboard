import React from 'react';
import PropTypes from 'prop-types';
import { Button, Avatar, Typography, Divider, FormControl, InputLabel, Input, TextField } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { useForm } from 'react-hook-form';
import styles from '../Login/LoginStyles';



const Signup = (props) => {
    const { classes, children, className, ...other } = props;
    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = data => { console.log(data) }
    

    return (

        <div>
            <Typography variant="h3" className={classes.welcomeText}>Create New Account</Typography>
            <Button className={classes.googleSignInBtn}>
                <Avatar alt="google" src={require("../../../images/sign-in-google.png")} className={classes.avatar} />
                <Typography variant="p" className={classes.googleText}>
                    Sign Up with Google
                </Typography>
            </Button>
            <br/>
            <Typography variant="p" className={classes.orText}>or</Typography>

            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField 
                    type="email" 
                    id="email" 
                    name="email" 
                    inputRef={register({ required: true })} 
                    label="Email" 
                    variant="filled" 
                    className={classes.textfield} 
                    error={errors.email? true : false} />
                {errors.email && <div className={classes.errorDiv}>Email is required</div>}
                
                <TextField 
                    id="password" 
                    name="password" 
                    inputRef={register({ required: true })} 
                    label="Password" 
                    type="password" 
                    variant="filled" 
                    className={classes.textfield}
                    error={errors.password? true : false} /><br/>
                {errors.password && <div className={classes.errorDiv}>Password is required</div>}
                <Button type="submit" variant="contained" color="primary" className={classes.loginBtn}>Login</Button> <a href="#" className={classes.anchor}>Forget Password?</a>
            </form>
        </div>
    );
};

Signup.propTypes = {
    children: PropTypes.node,
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
};

export default withStyles(styles)(Signup);