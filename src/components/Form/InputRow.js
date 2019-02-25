import { Field } from 'redux-form';
import { withStyles } from '@material-ui/core/styles';
import React from 'react';

import {
    DatePicker,
    Label,
    Select,
    TextInput
} from '../inputs';

import Row from '../Layout/Position/Row';
import Box from '../Layout/Position/Box';

const styles = {};

function InputRow(props) {
    const {
        inputSize,
        items,
        label,
        layout,
        name,
        placeholder,
        type,
        nameSecond,
        placeholderSecond,
        itemsSecond,
        typeSecond
    } = props;

    const component = {
        date: DatePicker,
        select: Select,
        text: TextInput
    }[type || 'text'];

    const componentSecond = {
        date: DatePicker,
        select: Select,
        text: TextInput
    }[typeSecond || 'text'];

    const labelSize = layout === 'toLeft' ? 'small' : 'medium2';

    return (
        <Row>
            <Box size={labelSize}>
                { label && <Label>{label}</Label>}
            </Box>
            <Box size={inputSize}>
                <Field
                    name={name}
                    component={component}
                    placeholder={placeholder}
                    items={items}
                />
            </Box>
            {nameSecond && <Box size={inputSize}>
                <Field
                    name={nameSecond}
                    component={componentSecond}
                    placeholder={placeholderSecond}
                    items={itemsSecond}
                />
            </Box>}
        </Row>
    );
}

export default withStyles(styles)(InputRow);
