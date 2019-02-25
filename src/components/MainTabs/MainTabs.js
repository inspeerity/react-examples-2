import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { CSS } from '../../constants';
import Tabs from '@material-ui/core/Tabs';
import MainTab from './MainTab/MainTab';

const StyledTabs = withStyles({
    root: {
        color: CSS.colors.gray7,
        boxShadow: '0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -5px rgba(0, 0, 0, 0.12)'
    },
    indicator: {
        backgroundColor: CSS.colors.lightBlue
    }
})(Tabs);

const mainTabs = (props) => {
    const tabs = props.tabs.map(tab => <MainTab label={tab.label} key={tab.id} onClose={props.tabClose} value={tab.id} dirty={tab.dirty} />);

    return (
        <React.Fragment>
            <StyledTabs
                value={props.selectedTabId}
                onChange={props.onChange}
                scrollable={false}
                scrollButtons="auto">
                <MainTab label={props.mainLabel} static />
                {tabs}
            </StyledTabs>
            {props.children}
        </React.Fragment>
    );
}

export default mainTabs;
