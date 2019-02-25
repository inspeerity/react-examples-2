import { withStyles } from '@material-ui/core/styles';
import CheckIcon from '@material-ui/icons/Check';
import MuiCheckbox from '@material-ui/core/Checkbox';
import React from 'react';

import classNames from 'classnames';

import { CSS } from '../../constants';

const styles = theme => ({
    broderlessIcon: {
        width: 22,
        height: 22,
        border: `solid 1px ${CSS.colors.gray4}`,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2
    },
    icon: {
        width: 15,
        height: 15,
        border: `solid 2px ${CSS.colors.waterBlue}`,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
        '&>div': {
            width: 9,
            height: 9,
            border: `solid 2px ${CSS.colors.lightBlue}`,
            borderRadius: 2,
            backgroundColor: CSS.colors.darkBlue
        }
    },
    checkbox: {
        marginTop: CSS.verticalSpacing,
        marginBottom: CSS.verticalSpacing
    }
});

function Checkbox(props) {
    const { classes, input, className } = props;

    const { checkedIcon, icon } = {
        standard: {
            checkedIcon: (
                <div className={classes.icon}>
                    <div />
                </div>
            ),
            icon: <div className={classes.icon} />
        },
        borderless: {
            checkedIcon: <CheckIcon style={{ color: CSS.colors.lightBlue }} />,
            icon: <div className={classes.broderlessIcon} />
        }
    }[props.inputType || 'standard'];

    const checked = props.hasOwnProperty('checked') ? props.checked : input && input.checked;
    const onChange = props.hasOwnProperty('onChange') ? props.onChange : input && input.onChange;

    return (
        <MuiCheckbox
            {...input}
            checked={checked}
            onChange={onChange}
            id={props.id}
            value={props.value}
            classes={{ root: classNames(classes.checkbox, className) }}
            checkedIcon={checkedIcon}
            icon={icon}
            color="default"
        />
    );
}

export default withStyles(styles)(Checkbox);
