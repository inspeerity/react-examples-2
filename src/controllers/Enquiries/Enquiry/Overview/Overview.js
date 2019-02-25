import { withStyles } from '@material-ui/core';
import React from 'react';

import { CSS } from '../../../../constants';
import EnquiryHeader from '../Commons/EnquiryHeader/EnquiryHeader';
import OverviewForm from './OverviewForm';
import RowElement from './RowElement/RowElement';

const styles = {
    container: {
        padding: '10px 0 30px 36px',
        color: CSS.colors.gray8
    },
    content: {
        padding: '24px'
    }
};

const overview = props => {
    const { classes, data } = props;

    const onEdit = () => {
        props.setLeftTabForm(props.mainTabIndex, props.leftTabIndex, true);
    };

    const onPreview = () => {
        props.setLeftTabForm(props.mainTabIndex, props.leftTabIndex, false);
    };

    const overview = (
        <div className={classes.container}>
            <EnquiryHeader label="Overview" buttonOnClick={onEdit} buttonText="Edit" />
            <div className={classes.content}>
                <RowElement label="Company Name">{data.company}</RowElement>
                <RowElement label="Registered address">{data.location}</RowElement>
                <RowElement label="Territories">{data.territory}</RowElement>
                <RowElement label="Status">{data.status}</RowElement>
                <RowElement label="Date of incorporation">{data.company}</RowElement>
                <RowElement label="Contact person name">{data.company}</RowElement>
                <RowElement label="Job Title">{data.company}</RowElement>
                <RowElement label="Email address">{data.company}</RowElement>
                <RowElement label="Phone number">{data.telephone}</RowElement>
                <RowElement label="Industry">{data.industry}</RowElement>
                <RowElement label="Class of business">
                    {data.classOfBusiness}
                </RowElement>
                <RowElement label="Annual revenue">{data.annualRevenue}</RowElement>
                <RowElement label="Products required">{data.products}</RowElement>
                <RowElement label="Target Premium">{data.company}</RowElement>
                <RowElement label="Target Deductible">{data.company}</RowElement>
                <RowElement label="Commission">{data.company}</RowElement>
            </div>
        </div>
    );

    const form = <OverviewForm
        initialValues={data}
        onPreview={onPreview}
        form={`OverviewForm_${props.mainTabIndex}`}
    />;


    return props.showForm ? form : overview;
};

export default withStyles(styles)(overview);
