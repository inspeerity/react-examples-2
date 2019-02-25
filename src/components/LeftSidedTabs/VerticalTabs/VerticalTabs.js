import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List/List';
import SquareTab from './SquareTab/SquareTab';

const styles = theme => ({
    verticalTabs: {
        margin: 0,
        padding: 0,
        float: 'left',
        backgroundColor: 'white'
    }
});

const verticalTabs = (props) => {
    const { classes } = props;

    const tabs = props.tabsToRender.map((tab) => {
        return <SquareTab key={tab.id}
                          label={tab.label}
                          active={props.activeTab === tab.id ? true : null}
                          clicked={() => props.clicked(tab.id)}>{tab.icon}</SquareTab>
    });

    return (
        <div>
            <List component="nav" className={classes.verticalTabs}>
                {tabs}
            </List>
        </div>
    );
};

export default withStyles(styles)(verticalTabs);
