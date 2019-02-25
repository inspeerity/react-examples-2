import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Logo from './Logo/Logo';
import Navbar from './Navbar/Navbar';
import UserControls from './UserControls/UserControls';

const styles = theme => ({
    header: {
        backgroundColor: 'white',
        margin: 0,
        display: 'flex'
    },
    placeholder: {
        flexGrow: 1
    }
});

const header = (props) =>  {
    const { classes } = props;
    return (
        <div className={classes.header}>
            <Logo />
            <Navbar />
            <div className={classes.placeholder}/>
            <UserControls />
        </div>
    );
};


export default withStyles(styles)(header);
