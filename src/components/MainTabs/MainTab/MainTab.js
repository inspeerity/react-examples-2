import React from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Icon from '@material-ui/icons/Close';
import { CSS } from '../../../constants';

const styles = theme => ({
    tab: {
        backgroundColor: CSS.colors.white,
        border: `solid 1px ${CSS.colors.gray}`,
        borderBottom: `solid 2px ${CSS.colors.gray}`,
        opacity: 1,
        textTransform: 'none'
    },
    tabStatic: {
        backgroundColor: CSS.colors.gray1,
        minWidth: 119,
        maxWidth: 119,
        borderLeft: 0
    },
    tabSelected: {
        color: CSS.colors.lightBlue
    },
    closeIcon: {
        fontSize: 20,
        lineHeight: '29px',
        marginLeft: 9,
        padding: '0 3px'
    },
    label: {
        display: 'inline-block',
        width: '100px',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden'
    },
    labelContainer: {
        padding: 0
    }
});

const mainTab = (props) => {
    const { classes } = props;

    const onClose = (e) => {
        e.stopPropagation();
        props.onClose(e, props.value);
    };

    const label = <span>
        <span className={classes.label}>{props.label}{props.dirty && ' *'}</span>
        {!props.static && <Icon className={classes.closeIcon} onClick={onClose}>close</Icon>}
    </span>;

    return (
        <Tab
            onChange={props.onChange}
            value={props.value}
            label={label}
            classes={{labelContainer: classes.labelContainer}}
            className={classNames(classes.tab, {[classes.tabStatic]: props.static}, {[classes.tabSelected]: props.selected})}
        />
    );
};

export default withStyles(styles)(mainTab);
