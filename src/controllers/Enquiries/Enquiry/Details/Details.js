import React from 'react';
import {withStyles} from '@material-ui/core';
import {CSS} from '../../../../constants';
import EnquiryHeader from '../Commons/EnquiryHeader/EnquiryHeader';

const styles = {
    container: {
        padding: '10px 0 30px 36px',
        color: CSS.colors.gray8
    }
};

const details = (props) => {
    const { classes, data } = props;
    console.log(data);
    return (
        <div className={classes.container}>
            <EnquiryHeader label='Details'/>
        </div>
    );
};

export default withStyles(styles)(details);
