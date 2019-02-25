import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { CSS }  from '../../constants';

const styles = (theme) => ({
    label: {
        marginTop: CSS.verticalSpacing,
        marginBottom: CSS.verticalSpacing,
        height: 40,
        display: 'flex',
        alignItems: 'center'
    }
});

function Label(props) {
    const { classes } = props;

    return (
        <div className={classes.label}>
            <label htmlFor={props.htmlFor}>
                {props.children}
            </label>
        </div>
    );
}

export default withStyles(styles)(Label);
