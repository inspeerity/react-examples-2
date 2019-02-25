import { connect } from 'react-redux';
import React, { Component } from 'react';

import {
    changeEnquiryLeftTab,
    selectEnquiryTab,
    setLeftTabForm,
    changeCloseDialogOpen
} from '../../redux/enquiries/actions';
import { removeEnquiryTab } from '../../redux/enquiries/thunks';
import CloseDialog from '../../components/CloseDialog';
import Enquiry from './Enquiry/Enquiry';
import EnquiryDashboard from './EnquiryDashboard/EnquiryDashboard';
import Layout from '../../components/Layout/Layout';
import MainTabs from '../../components/MainTabs/MainTabs';

const mapStateToProps = state => ({
    tabs: state.enquiries.tabs,
    selectedTabId: state.enquiries.selectedTab,
    closeDialogOpen: state.enquiries.closeDialogOpen
});

const mapDispatchToProps = dispatch => ({
    setLeftTabForm: (mainTabIndex, leftTabIndex, show) =>
        dispatch(setLeftTabForm(mainTabIndex, leftTabIndex, show)),
    onMainTabChange: (e, id) => dispatch(selectEnquiryTab(id)),
    onMainTabClose: (e, index) => dispatch(removeEnquiryTab(index)),
    onLeftTabChange: (mainTabIndex, leftTabIndex) =>
        dispatch(changeEnquiryLeftTab(mainTabIndex, leftTabIndex)),
    onCloseCloseDialog: () => dispatch(changeCloseDialogOpen(false)),
    onMainTabForceClose: (e, index) => dispatch(removeEnquiryTab(index, true))
});

class Enquiries extends Component {
    render() {
        let componentToRender = <EnquiryDashboard />;
        if (this.props.selectedTabId > 0) {
            const tab = this.props.tabs.find(tab => {
                if (tab.id === this.props.selectedTabId) {
                    return tab;
                }
                return null;
            });
            componentToRender = (
                <Enquiry
                    id={this.props.selectedTabId}
                    data={tab.data}
                    activeLeftTab={tab.selectedLeftTab}
                    onLeftTabChange={this.props.onLeftTabChange}
                    leftTabForms={tab.leftTabForms}
                    setLeftTabForm={this.props.setLeftTabForm}
                />
            );
        }
        return (
            <Layout>
                <MainTabs
                    mainLabel="Enquiries"
                    tabs={this.props.tabs}
                    selectedTabId={this.props.selectedTabId}
                    onChange={this.props.onMainTabChange}
                    tabClose={this.props.onMainTabClose}
                />
                {componentToRender}
                <CloseDialog
                    title="There are unsaved changes!"
                    content="Are you sure you want close this tab without save?"
                    open={this.props.closeDialogOpen}
                    handleClose={this.props.onCloseCloseDialog}
                    handleOk={this.props.onMainTabForceClose}
                />
            </Layout>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Enquiries);
