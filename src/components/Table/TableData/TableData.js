import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TableBody from '@material-ui/core/TableBody/TableBody';
import TableCell from '@material-ui/core/TableCell/TableCell';
import TableRow from '@material-ui/core/TableRow/TableRow';
import IconButton from '@material-ui/core/IconButton/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Menu from '@material-ui/core/Menu/Menu';
import MenuItem from '@material-ui/core/MenuItem/MenuItem';

const styles = theme => ({
    moreIconButton: {
        width: 40,
        height: 40
    },
});

class TableData extends Component {
    state = {
        anchorEl: null,
        openedMenuId: null
    };

    handleOpenMenu = (id, event) => {
        this.setState({
            anchorEl: event.currentTarget,
            openedMenuId: id
        });
    };

    handleClose = () => {
        this.setState({
            anchorEl: null,
            openedMenuId: null
        });
    };

    handleMenuAction(control, id) {
        this.handleClose();
        control.action(id);
    }

    render() {
        const {classes} = this.props;
        if (this.props.controls) {

        }
        const tableData = this.props.data.map(data => {
            const rowData = this.props.headers.map(header => {
                return <TableCell key={header.key} numeric={header.numeric}>{data[header.key]}</TableCell>;
            });
            if (this.props.controls) {
                rowData.push(
                    <TableCell key='controlHeader'>
                        <IconButton className={classes.moreIconButton}
                                    aria-owns={this.state.anchorEl ? 'action-menu-' + data.id : null}
                                    aria-haspopup="true"
                                    onClick={(event) => this.handleOpenMenu('action-menu-' + data.id, event)}>
                            <MoreVertIcon/>
                        </IconButton>
                    </TableCell>);
                const controls = this.props.controls.map((control) => {
                    return <MenuItem key={control.label} onClick={() => this.handleMenuAction(control, data.id)}>{control.label}</MenuItem>
                });
                rowData.push(
                    <Menu
                        key={'action-menu-' + data.id}
                        id={'action-menu-' + data.id}
                        anchorEl={this.state.anchorEl}
                        open={this.state.openedMenuId === 'action-menu-' + data.id}
                        onClose={this.handleClose}>
                        {controls}
                    </Menu>
                );
            }
            return <TableRow hover key={data.id}>{rowData}</TableRow>;
        });
        return (
            <TableBody>
                {tableData}
            </TableBody>
        );
    }
}

export default withStyles(styles)(TableData);
