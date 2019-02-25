import React from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { CSS }  from '../../constants';

const styles = (theme) => ({
    textarea: {
        marginTop: CSS.verticalSpacing,
        marginBottom: CSS.verticalSpacing,
        outline: 'none',
        fontSize: 14,
        borderRadius: 2,
        color: CSS.colors.gray8,
        border: `1px solid ${CSS.colors.gray4}`,
        boxSizing: 'border-box',
        minHeight: 100,
        padding: 25,
        resize: 'none',
        '&:focus': {
            borderColor: CSS.colors.lightBlue
        }
    },
    textareaInvalid: {
        borderColor: CSS.colors.red,
        color: CSS.colors.red,
        '&:focus': {
            borderColor: CSS.colors.red
        }
    },
    textareaValid: {
        borderColor: CSS.colors.green,
        '&:focus': {
            borderColor: CSS.colors.green
        }
    }
});

function Textarea(props) {
    const { classes, input, className } = props;

    const inputInvalid = props.meta && props.meta.dirty && props.meta.invalid;
    const inputValid = props.meta && props.meta.dirty && props.meta.valid;

    const textareaClasses = classNames(
        classes.textarea,
        className,
        {[classes.textareaInvalid]: inputInvalid},
        {[classes.textareaValid]: inputValid}
    );

    return (
        <textarea
            {...input}
            className={textareaClasses}
            placeholder={props.placeholder}
            style={{width: props.width ? props.width : '100%' }}
            id={props.id}
        >
        </textarea>
    );
}

export default withStyles(styles)(Textarea);
