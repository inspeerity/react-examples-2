import { withStyles } from '@material-ui/core/styles';
import React from 'react';

import classNames from 'classnames';

const styles = {
    row: {
        display: 'flex'
    },
    'direction-row': { flexDirection: 'row' },
    'direction-row-reverse': { flexDirection: 'row-reverse' },
    'direction-column': { flexDirection: 'column' },
    'direction-column-reverse': { flexDirection: 'column-reverse' },
    'justify-flex-start': { justifyContent: 'flex-start' },
    'justify-flex-end': { justifyContent: 'flex-end' },
    'justify-center': { justifyContent: 'center' },
    'justify-space-between': { justifyContent: 'space-between' },
    'justify-space-around': { justifyContent: 'space-around' },
    'justify-space-evenly': { justifyContent: 'space-evenly' }
};

function Row(props) {
    const { classes, direction, justify } = props;

    const className = classNames(
        {
            [classes[`direction-${String(direction)}`]]: direction,
            [classes[`justify-${String(justify)}`]]: justify
        },
        classes.row,
        props.className
    );

    return <div className={className}>{props.children}</div>;
}

export default withStyles(styles)(Row);
