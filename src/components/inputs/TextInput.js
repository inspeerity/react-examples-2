import React from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { CSS }  from '../../constants';
import SearchIcon from '@material-ui/icons/Search';

const styles = (theme) => ({
    'badgeInvalid': {
        backgroundColor: CSS.colors.red
    },
    'badgeValid': {
        backgroundColor: CSS.colors.green
    },
    'textInput': {
        marginTop: CSS.verticalSpacing,
        marginBottom: CSS.verticalSpacing,
        height: 40,
        fontSize: 14,
        paddingLeft: 25,
        paddingRight: 50,
        borderRadius: 2,
        outline: 'none',
        color: CSS.colors.gray8,
        border: `1px solid ${CSS.colors.gray4}`,
        '&::placeholder': {
            color: CSS.colors.gray5
        },
        '&:focus': {
            borderColor: CSS.colors.lightBlue
        }
    },
    'textInputInvalid': {
        color: CSS.colors.red,
        borderColor: CSS.colors.red,
        '&:focus': {
            borderColor: CSS.colors.red
        }
    },
    'textInputValid': {
        borderColor: CSS.colors.green,
        '&:focus': {
            borderColor: CSS.colors.green
        }
    },
    badgeContainer: {
        position: 'relative'
    },
    badge: {
        top: CSS.verticalSpacing + 8,
        right: 18,
        color: CSS.colors.white,
        fontWeight: 'bold',
        fontSize: 14,
        display: 'flex',
        width: 22,
        height: 22,
        position: 'absolute',
        flexWrap: 'wrap',
        alignItems: 'center',
        borderRadius: '50%',
        alignContent: 'center',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    icon: {
        top: CSS.verticalSpacing + 8,
        right: 18,
        color: CSS.colors.gray6,
        position: 'absolute'
    }
});

function TextInput(props) {
    const { classes, width, input, meta, dontValidate, ...rest } = props;

    const inputInvalid = !dontValidate && meta && meta.dirty && meta.invalid;
    const inputValid = !dontValidate && meta && meta.dirty && meta.valid;

    const inputClasses = classNames(
        classes.textInput,
        {[classes.textInputInvalid]: !dontValidate && inputInvalid},
        {[classes.textInputValid]: !dontValidate && inputValid}
    );

    const badgeClasses = classNames(
        classes.badge,
        {[classes.badgeInvalid]: !dontValidate && inputInvalid},
        {[classes.badgeValid]: !dontValidate && inputValid}
    );

    const icon = {
        search:  <SearchIcon />
    }[props.icon];

    return (
        <React.Fragment>
            <div className={classes.badgeContainer}>
                <input
                    {...rest}
                    {...input}
                    className={inputClasses}
                    style={{width: width ? props.width : '100%' }}
                />
                {icon ? (
                    <span className={classes.icon}>
                        {icon}
                    </span>
                ) : (
                    (inputInvalid || inputValid) && (
                        <span className={badgeClasses}>
                            { inputValid ? '✓' : '!' }
                        </span>
                    )
                )}
            </div>
        </React.Fragment>
    );
}

export default withStyles(styles)(TextInput);
