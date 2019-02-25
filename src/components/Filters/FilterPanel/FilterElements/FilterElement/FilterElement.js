import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card/Card';
import { CSS } from '../../../../../constants';

const styles = theme => ({
    filterCard: {
        backgroundColor: CSS.colors.filtersBackground,
        cursor: 'pointer',
        minWidth: 120,
        marginLeft: 5,
        marginRight: 15,
        borderRadius: 0,
        color: CSS.colors.darkBlue,
        '&:hover': {
            backgroundColor: CSS.colors.background
        }
    },
    filterCardActive: {
        backgroundColor: CSS.colors.darkBlue,
        color: CSS.colors.white,
        '&:hover': {
            backgroundColor: CSS.colors.darkerBlue
        }
    },
    label: {
        margin: 'auto',
        padding: 25,
        textAlign: 'center'
    }
});

const filterElement = (props) => {
    const {classes} = props;
    return (
        <Card className={classnames(classes.filterCard, {[classes.filterCardActive]: props.active})} onClick={() => props.toggleFilter(props.id)}>
            <div className={classes.label}>
                {props.label}
            </div>
        </Card>
    );
};

export default withStyles(styles)(filterElement);
