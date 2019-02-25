import React from 'react';
import FilterPanel from './FilterPanel/FilterPanel';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button/Button';
import Checkbox from '../inputs/Checkbox';
import {CSS} from '../../constants';
import TextInput from '../inputs/TextInput';

const styles = theme => ({
    filters: {
        margin: '50px 50px 0px 50px'
    },
    bottomFilters: {
        display: 'flex',
        marginBottom: '10px'
    },
    searchBar: {
        width: '300px',
        margin: 'auto 0'
    },
    saveButton: {
        color: CSS.colors.lightBlue,
        textTransform: 'none',
        marginLeft: '20px'
    },
    checkbox: {
        display: 'flex',
        marginLeft: 'auto',
        marginRight: '10px'
    },
    checkboxLabel: {
        color: CSS.colors.gray7,
        margin: 'auto',
        fontSize: '17px'
    }
});

const filters = (props) => {
    const {classes} = props;
    const filters = props.filters.map((filter, index) => {
        return <FilterPanel
            key={index}
            collapsedLabel={filter.collapsedLabel}
            expandedLabel={filter.expandedLabel}
            filterElements={filter.filterElements}
            onFilterChange={(filterKey) => props.onFilterChange(index, filterKey)}/>
    });
    return (
        <div className={classes.filters}>
            {filters}
            <div className={classes.bottomFilters}>
                <div className={classes.searchBar}>
                    <TextInput onChange={props.onSearchBoxChange} icon={'search'}/>
                </div>
                <Button className={classes.saveButton}>Save filters</Button>
                <div className={classes.checkbox}>
                    <Checkbox checked={props.showHidden} onChange={props.showHiddenChange}/>
                    <label className={classes.checkboxLabel}>Show hidden</label>
                </div>
            </div>
        </div>
    );
};

export default withStyles(styles)(filters);
