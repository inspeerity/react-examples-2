import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Collapse from '@material-ui/core/Collapse';
import FilterPanelHeader from './FilterPanelHeader/FilterPanelHeader';
import FilterElements from './FilterElements/FilterElements';

const styles = theme => ({
    container: {
        padding: '15px 0px'
    }
});

class FilterPanel extends Component {
    state = {
        expanded: true
    };

    handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }));
    };

    render () {
        const {classes} = this.props;
        return (
            <div className={classes.container}>
                <FilterPanelHeader label={this.state.expanded ? this.props.expandedLabel : this.props.collapsedLabel} expanded={this.state.expanded} toggleExpanded={this.handleExpandClick}/>
                <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                    <FilterElements elements={this.props.filterElements} toggleFilter={this.props.onFilterChange}/>
                </Collapse>
            </div>
        );
    }
}

export default withStyles(styles)(FilterPanel);
