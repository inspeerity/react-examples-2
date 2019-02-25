import React from 'react';
import Row from '../../../../../components/Layout/Position/Row';
import Box from '../../../../../components/Layout/Position/Box';
import {IconButton, withStyles} from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import PrintIcon from '@material-ui/icons/Print';
import Button from '@material-ui/core/Button/Button';
import {CSS} from '../../../../../constants';

const styles = {
    row: {
        paddingLeft: '24px'
    },
    label: {
        fontWeight: 'normal'
    },
    buttons: {
        marginTop: 'auto',
        marginBottom: 'auto'
    },
    requestQuoteButton: {
        backgroundColor: CSS.colors.lightBlue,
        color: CSS.colors.white,
        textTransform: 'none',
        padding: '5px 25px',
        borderRadius: '20px',
        height: '40px',
        margin: 'auto 5px',
        '&:hover': {
            backgroundColor: CSS.colors.darkBlue
        }
    }
};

const enquiryHeader = (props) => {
    const { classes } = props;
    return (
        <Row className={classes.row} justify="space-between">
            <Box size="medium">
                <h3 className={classes.label}>{props.label}</h3>
            </Box>
            <Row className={classes.buttons}>
                <Button className={classes.requestQuoteButton} onClick={props.buttonOnClick}>{props.buttonText || 'Edit'}</Button>
                <Button className={classes.requestQuoteButton}>Request a quote</Button>
                <IconButton>
                    <StarIcon />
                </IconButton>
                <IconButton>
                    <PrintIcon />
                </IconButton>
            </Row>
        </Row>
    );
};

export default withStyles(styles)(enquiryHeader);
