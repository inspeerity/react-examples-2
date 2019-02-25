import React from 'react';
import IconButton from '@material-ui/core/IconButton/IconButton';
import Badge from '@material-ui/core/Badge/Badge';
import { withStyles } from '@material-ui/core/styles';
import { CSS } from '../../../../constants';

const styles = theme => ({
    badge: {
        backgroundColor: CSS.colors.lightBlue,
        color: CSS.colors.white,
        top: -8,
        right: -3,
        height: 16,
        width: 16,
        border: `1px solid ${
            theme.palette.type === 'light' ? CSS.colors.gray2 : CSS.colors.gray9
        }`
    }
});

const badgeIcon = ( props ) => {
    const { classes } = props;
    let icon = props.children;
    if (props.notificationNumber > 0) {
        icon = (
            <Badge  badgeContent={props.notificationNumber} classes={{ badge: classes.badge }}>
                {props.children}
            </Badge>
        );
    }

    return (
        <IconButton>
            {icon}
        </IconButton>
    );
};

export default withStyles(styles)(badgeIcon);
