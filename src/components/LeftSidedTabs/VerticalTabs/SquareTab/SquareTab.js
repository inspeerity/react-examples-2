import React from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon/ListItemIcon';

import { CSS } from '../../../../constants';

const styles = theme => ({
    squareTab: {
        margin: 0,
        padding: 0,
        width: 120,
        height: 120,
        borderBottom: `2px solid ${CSS.colors.background}`,
        borderRight: `2px solid ${CSS.colors.background}`,
        '&:hover': {
            backgroundColor: CSS.colors.secondaryBackground
        }
    },
    labelDiv: {
        margin: 'auto'
    },
    labelElement: {
        display: 'block',
        margin: 'auto',
        padding: 3,
        color: CSS.colors.gray7,
    },
    labelElementActive: {
        color: CSS.colors.lightBlue
    }
});

const squareTab = (props) => {
    const { classes } = props;
    return (
        <ListItem button className={classes.squareTab} onClick={props.clicked}>
            <div className={classes.labelDiv}>
                <ListItemIcon className={classNames(classes.labelElement, props.active ? classes.labelElementActive : null)}>{props.children}</ListItemIcon>
                <p className={classNames(classes.labelElement, props.active ? classes.labelElementActive : null)}>{props.label}</p>
            </div>
        </ListItem>
    );
};

export default withStyles(styles)(squareTab);
