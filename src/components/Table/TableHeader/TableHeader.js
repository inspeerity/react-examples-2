import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TableHead from '@material-ui/core/TableHead/TableHead';
import TableRow from '@material-ui/core/TableRow/TableRow';
import TableCell from '@material-ui/core/TableCell/TableCell';
import { CSS } from '../../../constants';
import TableSortLabel from '@material-ui/core/TableSortLabel/TableSortLabel';

const styles = theme => ({
    tableHeaderCell: {
        fontSize: '0.9em',
        color: CSS.colors.gray7
    }
});

const tableHeader = (props) => {
    const { classes } = props;
    const headers = props.headers.map(header => {
        return (
            <TableCell className={classes.tableHeaderCell}
                       key={header.key}
                       numeric={header.numeric}>
                <TableSortLabel
                    active={props.orderBy === header.key}
                    direction={props.order}
                    onClick={() => {props.onRequestSort(header.key)}}>
                    {header.label}
                </TableSortLabel>
            </TableCell>);
    });
    if (props.includeControls) {
        headers.push(<TableCell className={classes.tableHeaderCell} key='controlHeader' numeric={false} padding='none' />);
    }
    return (
        <TableHead>
            <TableRow>
                {headers}
            </TableRow>
        </TableHead>
    );
};

export default withStyles(styles)(tableHeader);
