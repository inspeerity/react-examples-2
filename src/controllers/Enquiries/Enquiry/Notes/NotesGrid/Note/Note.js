import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card/Card';
import {CSS} from '../../../../../../constants'
import IconButton from '@material-ui/core/IconButton/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Menu from '@material-ui/core/Menu/Menu';
import MenuItem from '@material-ui/core/MenuItem/MenuItem';

const styles = {
    card: {
        borderRadius: '0px',
    },
    cardHeader: {
        height: '50px',
        backgroundColor: CSS.colors.background,
        display: 'flex'
    },
    title: {
        margin: 'auto 30px',
        color: CSS.colors.gray8
    },
    placeholder: {
        flexGrow: '1'
    },
    moreButton: {
        width: '40px',
        height: '40px',
        margin: 'auto 15px'
    },
    content: {
        padding: '30px',
        color: CSS.colors.gray8
    },
    timestamp: {
        padding: '0px 30px 30px 30px',
        color: CSS.colors.gray8,
        fontSize: '12px',
        fontWeight: 'bold'
    }
};

class Note extends Component {
    state = {
        anchorEl: null
    };

    handleOpenMenu = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    handleNoteEdit = () => {
        this.handleClose();
        this.props.handleNoteEdit();
    };

    handleNoteRemove = () => {
        this.handleClose();
        this.props.handleNoteRemove();
    };

    render() {
        const { anchorEl } = this.state;
        const {classes, note} = this.props;

        return (
            <Card className={classes.card}>
                <div className={classes.cardHeader}>
                    <label className={classes.title}>{note.title}</label>
                    <div className={classes.placeholder}/>
                    <IconButton aria-owns={anchorEl ? 'simple-menu' : null}
                                aria-haspopup="true"
                                className={classes.moreButton}
                                onClick={this.handleOpenMenu}>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
                <div className={classes.content}>
                    {note.content}
                </div>
                <div className={classes.timestamp}>
                    {note.lastModified}
                </div>
                <Menu id="simple-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={this.handleClose}>
                    <MenuItem onClick={this.handleNoteEdit}>Edit</MenuItem>
                    <MenuItem onClick={this.handleNoteRemove}>Remove</MenuItem>
                </Menu>
            </Card>
        );
    }
}

export default withStyles(styles)(Note);
