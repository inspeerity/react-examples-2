import React from 'react';
import Button from '@material-ui/core/Button/Button';
import { withStyles } from '@material-ui/core/styles';
import { CSS } from '../../../../constants';
import { NavLink } from 'react-router-dom';

const styles = theme => ({
    button: {
        padding: 0,
        textTransform: 'none'
    },
    linkLabel: {
        padding: '8px 16px',
        textDecoration: 'none',
        color: CSS.colors.gray7,
        fontSize: 16
    },
    linkActive: {
        color: CSS.colors.lightBlue
    }
});

const navbarElement = (props ) => {
    const { classes } = props;

    return (
        <Button className={classes.button}>
            <NavLink className={classes.linkLabel} to={props.link} exact activeClassName={classes.linkActive}>{props.children}</NavLink>
        </Button>
    );
};

export default withStyles(styles)(navbarElement);
