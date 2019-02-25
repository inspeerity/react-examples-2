import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import VerticalTabs from './VerticalTabs/VerticalTabs';
import { CSS } from '../../constants';
import Card from '@material-ui/core/Card/Card';

const styles = theme => ({
    container: {
        backgroundColor: CSS.colors.secondaryBackground,
        overflow: 'hidden',
        display: 'flex',
        borderRadius: 0
    },
    verticalTabs: {
        margin: 0,
        padding: 0
    },
    tabContent: {
        flexGrow: 1,
        padding: 20,
        backgroundColor: 'white'
    }
});

class LeftSidedTabs extends Component {
    changeTabHandler = (index) => {
        this.props.onLeftTabChange(this.props.id, index);
    };

    render() {
        const { classes } = this.props;
        return (
            <Card className={classes.container}>
                <VerticalTabs tabsToRender={this.props.tabsToRender} activeTab={this.props.activeTab} clicked={this.changeTabHandler}/>
                <div className={classes.tabContent}>
                    {this.props.tabsToRender[this.props.activeTab].componentToRender}
                </div>
            </Card>
        );
    }
}

export default withStyles(styles)(LeftSidedTabs);
