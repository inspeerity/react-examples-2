import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiTable from '@material-ui/core/Table/Table';
import Card from '@material-ui/core/Card/Card';
import TableHeader from './TableHeader/TableHeader';
import TableData from './TableData/TableData';
import TablePagination from '@material-ui/core/TablePagination/TablePagination';

function desc(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function stableSort(array, cmp) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = cmp(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    return stabilizedThis.map(el => el[0]);
}

function getSorting(order, orderBy) {
    return order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy);
}

const styles = theme => ({
    tableCard: {
        margin: '0px 50px 70px 50px',
        borderRadius: 0
    },
});

class Table extends Component {
    render () {
        const {classes} = this.props;
        const dataToRender = stableSort(this.props.data, getSorting(this.props.table.order, this.props.table.orderBy)).slice(
            this.props.table.page * this.props.table.rowsPerPage, this.props.table.page * this.props.table.rowsPerPage + this.props.table.rowsPerPage);
        return (
            <Card className={classes.tableCard}>
                <MuiTable>
                    <TableHeader headers={this.props.table.headers}
                                 order={this.props.table.order}
                                 orderBy={this.props.table.orderBy}
                                 onRequestSort={this.props.onRequestSort}
                                 includeControls={this.props.rowControls}/>
                    <TableData headers={this.props.table.headers} data={dataToRender} controls={this.props.rowControls}/>

                </MuiTable>
                <TablePagination
                    component="div"
                    count={this.props.data.length}
                    rowsPerPage={this.props.table.rowsPerPage}
                    page={this.props.table.page}
                    backIconButtonProps={{
                        'aria-label': 'Previous Page',
                    }}
                    nextIconButtonProps={{
                        'aria-label': 'Next Page',
                    }}
                    onChangePage={this.props.onChangePage}
                    onChangeRowsPerPage={this.props.onChangeRowsPerPage}
                />
            </Card>
        );
    }
}

export default withStyles(styles)(Table);
