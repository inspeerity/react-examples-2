import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle
} from '@material-ui/core';
import React from 'react';


function CloseDialog(props) {
    return (
        <Dialog open={props.open} onClose={props.handleClose}>
            <DialogTitle>{props.title}</DialogTitle>
            <DialogContent>
                <DialogContentText>{props.content}</DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={props.handleOk} color="primary">
                    ok
                </Button>
                <Button onClick={props.handleClose} color="primary" autoFocus>
                    cancel
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default CloseDialog;
