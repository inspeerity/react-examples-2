import React from 'react';
import { withStyles } from '@material-ui/core';
import {CSS} from '../../../../constants';
import EnquiryHeader from '../Commons/EnquiryHeader/EnquiryHeader';
import Table from '@material-ui/core/Table/Table';
import TableHead from '@material-ui/core/TableHead/TableHead';
import TableRow from '@material-ui/core/TableRow/TableRow';
import TableCell from '@material-ui/core/TableCell/TableCell';
import TableBody from '@material-ui/core/TableBody/TableBody';
import Button from '@material-ui/core/Button/Button';

const styles = {
    container: {
        padding: '10px 0 30px 36px',
        color: CSS.colors.gray8
    },
    tableContainer: {
        width: '70%'
    },
    tableCell: {
        borderBottom: '0px'
    },
    addButton: {
        padding: '10px 24px',
        color: CSS.colors.lightBlue,
        textTransform: 'none'
    }
};

const attachments = (props) => {
    const { classes, data } = props;
    const attachments = data.attachments.map(attachment => {
        return (
            <TableRow key={attachment.id}>
                <TableCell className={classes.tableCell}><a href={attachment.link}>{attachment.name}</a></TableCell>
                <TableCell className={classes.tableCell}>{attachment.sharing}</TableCell>
                <TableCell className={classes.tableCell}>{attachment.created}</TableCell>
                <TableCell className={classes.tableCell}><a href={attachment.removeLink}>Remove</a></TableCell>
            </TableRow>
        );
    });

    return (
        <div className={classes.container}>
            <EnquiryHeader label='Attachments'/>

            <div className={classes.tableContainer}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell className={classes.tableCell}>Name</TableCell>
                            <TableCell className={classes.tableCell}>Sharing</TableCell>
                            <TableCell className={classes.tableCell}>Time created</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {attachments}
                    </TableBody>
                </Table>
                <Button className={classes.addButton}>+ Add</Button>
            </div>
        </div>
    );
};

export default withStyles(styles)(attachments);
