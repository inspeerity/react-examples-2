import React from 'react';
import Button from '@material-ui/core/Button/Button';
import { withStyles } from '@material-ui/core/styles';
import logo from '../../../assets/logo.png';

const styles = theme => ({
    logo: {
        padding: '7px 15px',
        marginLeft: '75px'
    }
});

const Logo = ( props ) => {
    const { classes } = props;

    return (
            <Button className={classes.logo}><img src={logo} alt={logo}/></Button>
    );
};

export default withStyles(styles)(Logo);
