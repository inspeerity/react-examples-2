import { withStyles } from '@material-ui/core/styles';
import React from 'react';

import classNames from 'classnames';

const styles = {
    box: {
        marginRight: 16
    },
    boxSmall: {
        flex: '0 0 170px'
    },
    boxMedium: {
        flex: '0 0 200px'
    },
    boxMedium2: {
        flex: '0 0 270px'
    },
    boxBig: {
        flex: '0 0 386px'
    },
    boxHalf: {
        flex: '0 1 50%'
    },
    boxAuto: {
        flex: '1 1 100%'
    }
};

function Box(props) {
    const { classes } = props;

    const className = {
        small: classes.boxSmall,
        medium: classes.boxMedium,
        medium2: classes.boxMedium2,
        big: classes.boxBig,
        half: classes.boxHalf,
        auto: classes.boxAuto
    }[props.size];

    return (
        <div className={classNames(className || classes.boxSmall, classes.box)}>
            {props.children}
        </div>
    );
}

export default withStyles(styles)(Box);
