import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Button from '@material-ui/core/Button/Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {CSS} from '../../../../constants';

const styles = theme => ({
    button: {
        textTransform: 'none',
        color: CSS.colors.gray7,
        borderRadius: '8px 8px 0px 0px',
        borderBottom: `1px solid ${CSS.colors.background}`
    },
    expand: {
        color: CSS.colors.gray7,
        transform: 'rotate(0deg)',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
        marginLeft: 'auto',
        [theme.breakpoints.up('sm')]: {
            marginRight: -8,
        },
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
});

const filterPanelHeader = (props) => {
    const {classes} = props;
    return (
        <Button className={classes.button} onClick={props.toggleExpanded}>
            {props.label}
            <ExpandMoreIcon className={classnames(classes.expand, {[classes.expandOpen]: props.expanded})} aria-expanded={props.expanded}/>
        </Button>
    );
};

export default withStyles(styles)(filterPanelHeader);
