import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import FilterElement from './FilterElement/FilterElement';

const styles = theme => ({
    filters: {
        margin: '15px 0px',
        display: 'flex'
    }
});

const filterElements = (props) => {
    const {classes} = props;
    const filterElements = props.elements.map(filter => {
        return <FilterElement key={filter.key} label={filter.label} active={filter.active} toggleFilter={props.toggleFilter} id={filter.key}/>
    });
    return (
        <div className={classes.filters}>
            {filterElements}
        </div>
    );
};

export default withStyles(styles)(filterElements);
