import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Header from '../Header/Header';

const styles = theme => ({
    layoutMain: {
        width: '90%',
        margin: '70px auto'
    }
});

const layout = (props) =>  {
    const { classes } = props;

    return (
        <React.Fragment>
            <Header />
            <div className={classes.layoutMain}>
                {props.children}
            </div>
        </React.Fragment>
    );
}

export default withStyles(styles)(layout);
