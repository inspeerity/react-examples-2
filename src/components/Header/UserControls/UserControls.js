import React, { Component } from 'react';
import classNames from 'classnames';
import SearchIcon from '@material-ui/icons/Search';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationIcon from '@material-ui/icons/Notifications';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import Avatar from '@material-ui/core/Avatar/Avatar';
import BadgeIcon from './BadgeIcon/BadgeIcon';
import Button from '@material-ui/core/Button/Button';
import Menu from '@material-ui/core/Menu/Menu';
import MenuItem from '@material-ui/core/MenuItem/MenuItem';
import { withStyles } from '@material-ui/core/styles';
import { CSS } from '../../../constants';

import avatar from '../../../assets/avatar.png';

const styles = theme => ({
    userControls: {
        padding: '15px 0',
        marginRight: '50px'
    },
    buttonLabel: {
        textTransform: 'none',
        color: CSS.colors.gray7
    },
    icon: {
        color: CSS.colors.gray7
    },
    rightIcon: {
        marginLeft: theme.spacing.unit
    }
});

class UserControls extends Component {
    state = {
        anchorEl: null,
        user: {
            firstName: "John",
            lastName: "Travolta"
        }
    };

    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    render () {
        const { anchorEl } = this.state;
        const { classes } = this.props;

        return (
            <div className={classes.userControls}>
                <BadgeIcon>
                    <SearchIcon className={classes.icon}/>
                </BadgeIcon>
                <BadgeIcon notificationNumber={0}>
                    <ForumIcon className={classes.icon}/>
                </BadgeIcon>
                <BadgeIcon notificationNumber={9}>
                    <NotificationIcon className={classes.icon}/>
                </BadgeIcon>
                <Button aria-owns={anchorEl ? 'simple-menu' : null} aria-haspopup="true" onClick={this.handleClick} className={classes.buttonLabel}>
                    { this.state.user.firstName + ' ' + this.state.user.lastName}
                    <KeyboardArrowDownIcon className={classNames(classes.icon, classes.rightIcon)} />
                </Button>
                <Menu id="simple-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={this.handleClose}>
                    <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                    <MenuItem onClick={this.handleClose}>My account</MenuItem>
                    <MenuItem onClick={this.handleClose}>Logout</MenuItem>
                </Menu>
                <BadgeIcon>
                    <Avatar src={avatar}/>
                </BadgeIcon>
            </div>
        );
    }
}

export default withStyles(styles)(UserControls);
