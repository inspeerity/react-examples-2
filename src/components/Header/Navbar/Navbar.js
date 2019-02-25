import React from 'react';
import NavbarElement from './NavbarElement/NavbarElement';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => ({
    navElements: state.navigation.navigationItems,
    selected: state.navigation.activeNavigationItem
});

const styles = theme => ({
    navBar: {
        margin: 0,
        padding: 20
    }
});

const navbar = ( props ) => {
    const { classes } = props;

    const navbarElements = props.navElements.map(navElement => {
        return <NavbarElement key={navElement.id} link={navElement.link}>
                  {navElement.label}
               </NavbarElement>;
    });
    return (
        <div className={classes.navBar}>
            {navbarElements}
        </div>
    );
};

export default withRouter(connect(mapStateToProps)(withStyles(styles)(navbar)));
