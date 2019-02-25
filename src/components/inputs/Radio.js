import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiRadio from '@material-ui/core/Radio';
import { CSS }  from '../../constants';

const styles = {
    root: {
        color:  CSS.colors.darkBlue
    },
    checked: {
        '&$checked': {
            color:  CSS.colors.darkBlue
        }
    }
};

function Radio(props) {
    const { classes, input } = props;

    return (
        <MuiRadio
            {...input}
            color={'primary'}
            classes={{
                colorPrimary: classes.root,
                checked: classes.checked
            }}
        />
    );
}

export default withStyles(styles)(Radio);
