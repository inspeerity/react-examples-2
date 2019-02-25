import React from 'react';
import Row from '../../../../../components/Layout/Position/Row';
import Box from '../../../../../components/Layout/Position/Box';
import Label from '../../../../../components/inputs/Label';

const rowElement = (props) => {
    return (
        <Row>
            <Box size={'medium2'}>
                <Label>{props.label}</Label>
            </Box>
            <Box>
                <Label>{props.children}</Label>
            </Box>
        </Row>
    );
};

export default rowElement;
