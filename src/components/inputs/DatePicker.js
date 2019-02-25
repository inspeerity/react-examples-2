import 'react-datepicker/dist/react-datepicker.css';

import { withStyles } from '@material-ui/core/styles';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import React from 'react';
import ReactDatePicker from 'react-datepicker';

import classNames from 'classnames';

import { CSS } from '../../constants';

const styles = theme => ({
    icon: {
        cursor: 'pointer',
        color: CSS.colors.gray6,
        position: 'absolute',
        top: CSS.verticalSpacing + 8,
        right: 18
    },
    input: {
        cursor: 'pointer',
        width: '100%',
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
    inputInvalid: {
        color: CSS.colors.red,
        borderColor: CSS.colors.red,
        '&:focus': {
            borderColor: CSS.colors.red
        }
    },
    inputValid: {
        borderColor: CSS.colors.green,
        '&:focus': {
            borderColor: CSS.colors.green
        }
    }
});

class InputComponent extends React.Component {
    render() {
        return (
            <React.Fragment>
                <input
                    readOnly
                    onClick={this.props.onClick}
                    value={this.props.value}
                    className={this.props.inputClasses}
                    placeholder={this.props.inputPlaceholder}
                />
                <CalendarTodayIcon className={this.props.classes.icon} onClick={this.props.onClick} />
            </React.Fragment>
        );
    }
}

function DatePicker(props) {
    const { classes, input, placeholder } = props;

    const inputInvalid = props.meta && props.meta.dirty && props.meta.invalid;
    const inputValid = props.meta && props.meta.dirty && props.meta.valid;

    const inputClasses = classNames(
        classes.input,
        { [classes.inputInvalid]: inputInvalid },
        { [classes.inputValid]: inputValid }
    );

    const onChangeProxy = e => props.input.onChange(e.format('YYYY.MM.DD'));

    return (
        <React.Fragment>
            <ReactDatePicker
                {...props}
                {...input}
                placeholder={placeholder}
                onChange={onChangeProxy}
                customInput={
                    <InputComponent
                        classes={classes}
                        inputClasses={inputClasses}
                        inputPlaceholder={placeholder}
                    />
                }
            />
        </React.Fragment>
    );
}

export default withStyles(styles)(DatePicker);
