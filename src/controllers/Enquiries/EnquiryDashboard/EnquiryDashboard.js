import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import {
    addEnquiryRecordNote,
    addEnquiryRecordToFavourites,
    changeEnquiriesTablePage,
    changeEnquiriesTableRowsPerPage,
    changeEnquiriesTableSort,
    contactEnquiry,
    hideEnquiryRecord,
    openEnquiryTab,
    requestEnquiryQuote,
    searchEnquiries,
    toggleEnquiriesFilter,
    toggleEnquiriesShowHidden,
    newEnquiry
} from '../../../redux/enquiries/actions';
import Card from '@material-ui/core/Card/Card';
import Table from '../../../components/Table/Table';
import Button from '@material-ui/core/Button/Button';
import { CSS } from '../../../constants';
import Filters from '../../../components/Filters/Filters';

const mapStateToProps = state => ({
    table: state.enquiries.table,
    data: state.enquiries.data
});

const mapDispatchToProps = dispatch => ({
    onFilterChange: (index, filterKey) =>
        dispatch(toggleEnquiriesFilter(index, filterKey)),
    onSearchBarChange: event => dispatch(searchEnquiries(event.target.value)),
    onShowHiddenChange: () => dispatch(toggleEnquiriesShowHidden()),
    onChangePage: (event, page) => dispatch(changeEnquiriesTablePage(page)),
    onChangeRowsPerPage: event =>
        dispatch(changeEnquiriesTableRowsPerPage(event.target.value)),
    onRequestSort: property => dispatch(changeEnquiriesTableSort(property)),
    onOpenAction: recordId => dispatch(openEnquiryTab(recordId)),
    onHideAction: recordId => dispatch(hideEnquiryRecord(recordId)),
    onAddToFavouritesAction: recordId =>
        dispatch(addEnquiryRecordToFavourites(recordId)),
    onAddNoteAction: recordId => dispatch(addEnquiryRecordNote(recordId)),
    onRequestQuote: recordId => dispatch(requestEnquiryQuote(recordId)),
    onContactAction: recordId => dispatch(contactEnquiry(recordId)),
    newEnquiry: () => dispatch(newEnquiry())
});

const styles = theme => ({
    container: {
        borderRadius: 0,
        position: 'relative'
    },
    newEnquiryButton: {
        backgroundColor: CSS.colors.lightBlue,
        color: CSS.colors.white,
        textTransform: 'none',
        padding: '5px 25px',
        borderRadius: '20px',
        position: 'absolute',
        right: '50px',
        top: '50px',
        '&:hover': {
            backgroundColor: CSS.colors.darkBlue
        }
    },
    filters: {
        margin: '50px 50px 0px 50px'
    }
});

class EnquiryDashboard extends Component {
  state = {
      rowActions: [
          { label: 'Open', action: this.props.onOpenAction },
          { label: 'Hide', action: this.props.onHideAction },
          {
              label: 'Add to favourites',
              action: this.props.onAddToFavouritesAction
          },
          { label: 'Add notes', action: this.props.onAddNoteAction },
          { label: 'Request a quote', action: this.props.onRequestQuote },
          { label: 'Contact', action: this.props.onContactAction }
      ]
  };

  render() {
      const { classes } = this.props;
      return (
          <Card className={classes.container}>
              <Button onClick={this.props.newEnquiry} className={classes.newEnquiryButton}>New enquiry</Button>
              <Filters
                  filters={this.props.table.filters}
                  onFilterChange={this.props.onFilterChange}
                  searchBox={this.props.table.searchBox}
                  onSearchBoxChange={this.props.onSearchBarChange}
                  showHidden={this.props.table.showHidden}
                  showHiddenChange={this.props.onShowHiddenChange}
              />
              <Table
                  table={this.props.table}
                  data={this.props.data}
                  onChangePage={this.props.onChangePage}
                  onChangeRowsPerPage={this.props.onChangeRowsPerPage}
                  onRequestSort={this.props.onRequestSort}
                  rowControls={this.state.rowActions}
              />
          </Card>
      );
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(EnquiryDashboard));
