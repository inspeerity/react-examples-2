import AssessmentIcon from '@material-ui/icons/Assessment';
import FolderIcon from '@material-ui/icons/Folder';
import InfoIcon from '@material-ui/icons/Info';
import NotesIcon from '@material-ui/icons/Notes';
import React, { Component } from 'react';

import Attachments from './Attachments/Attachments';
import Details from './Details/Details';
import LeftSidedTabs from '../../../components/LeftSidedTabs/LeftSidedTabs';
import Notes from './Notes/Notes';
import Overview from './Overview/Overview';

class Enquiry extends Component {
    render() {
        const tabs = [
            {
                id: 0,
                label: 'Overview',
                icon: <InfoIcon />,
                componentToRender: (
                    <Overview
                        data={this.props.data}
                        showForm={this.props.leftTabForms[0]}
                        mainTabIndex={this.props.id}
                        leftTabIndex={0}
                        setLeftTabForm={this.props.setLeftTabForm}
                    />
                )
            },
            {
                id: 1,
                label: 'Details',
                icon: <AssessmentIcon />,
                componentToRender: (
                    <Details
                        data={this.props.data}
                        showForm={this.props.leftTabForms[1]}
                        mainTabIndex={this.props.id}
                        leftTabIndex={1}
                        setLeftTabForm={this.props.setLeftTabForm}
                    />
                )
            },
            {
                id: 2,
                label: 'Attachments',
                icon: <FolderIcon />,
                componentToRender: (
                    <Attachments
                        data={this.props.data}
                        showForm={this.props.leftTabForms[2]}
                        mainTabIndex={this.props.id}
                        leftTabIndex={2}
                        setLeftTabForm={this.props.setLeftTabForm}
                    />
                )
            },
            {
                id: 3,
                label: 'Notes',
                icon: <NotesIcon />,
                componentToRender: (
                    <Notes
                        data={this.props.data}
                        showForm={this.props.leftTabForms[3]}
                        mainTabIndex={this.props.id}
                        leftTabIndex={3}
                        setLeftTabForm={this.props.setLeftTabForm}
                    />
                )
            }
        ];
        return (
            <React.Fragment>
                <LeftSidedTabs
                    id={this.props.id}
                    activeTab={this.props.activeLeftTab}
                    onLeftTabChange={this.props.onLeftTabChange}
                    tabsToRender={tabs}
                />
            </React.Fragment>
        );
    }
}

export default Enquiry;
