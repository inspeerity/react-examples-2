import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { withStyles } from '@material-ui/core';
import React from 'react';

import { CSS } from '../../../../constants';
import {
    cities,
    states,
    countries,
    genFakeData,
    statuses,
    currencies
} from '../../../../fakedata';
import { setEnquiryDirty } from '../../../../redux/enquiries/actions';
import EnquiryHeader from '../Commons/EnquiryHeader/EnquiryHeader';
import InputRow from '../../../../components/Form/InputRow';

const styles = {
    container: {
        padding: '10px 0 30px 36px',
        color: CSS.colors.gray8
    },
    content: {
        padding: '24px'
    },
    form: {
        width: '80%'
    }
};

function OverviewForm(props) {
    const { classes, handleSubmit } = props;
    return (
        <div className={classes.container}>
            <EnquiryHeader
                label="Overview"
                buttonOnClick={props.onPreview}
                buttonText="Save"
            />
            <div className={classes.content}>
                <form onSubmit={handleSubmit} className={classes.form}>
                    <InputRow
                        label="Company Name"
                        name="company"
                        inputSize="auto"
                        placeholder="Company"
                    />
                    <InputRow
                        label="Registered address"
                        name="street"
                        inputSize="auto"
                        placeholder="Street"
                    />
                    <InputRow
                        inputSize="auto"
                        name="city"
                        placeholder="City"
                        type="select"
                        items={cities}
                        nameSecond="province"
                        placeholderSecond="State/Province"
                        typeSecond="select"
                        itemsSecond={states}
                    />
                    <InputRow
                        inputSize="auto"
                        name="zip"
                        placeholder="Zip Code"
                        nameSecond="country"
                        placeholderSecond="Country/Region"
                        typeSecond="select"
                        itemsSecond={countries}
                    />

                    <InputRow
                        label="Select territories"
                        inputSize="auto"
                        name="territory"
                        placeholder="Territories"
                        type="select"
                        items={genFakeData('Territory')}
                    />

                    <InputRow
                        label="Choose a status"
                        inputSize="auto"
                        name="status"
                        placeholder="Status"
                        type="select"
                        items={statuses}
                    />

                    <InputRow
                        label="Date of incorporation"
                        inputSize="auto"
                        name="dateOfIncorporation"
                        placeholder="Date of incorporation"
                        type="date"
                    />

                    <InputRow
                        label="Contact person name"
                        inputSize="auto"
                        name="contactFirstName"
                        placeholder="Name"
                        nameSecond="contactLastName"
                        placeholderSecond="Surname"
                    />

                    <InputRow
                        label="Job Title"
                        inputSize="auto"
                        name="jobTitle"
                        placeholder="Job Title"
                    />

                    <InputRow
                        label="Email address"
                        inputSize="auto"
                        name="email"
                        placeholder="Email address"
                    />

                    <InputRow
                        inputSize="auto"
                        label="Phone number"
                        name="phone"
                        placeholder="Phone number"
                    />

                    <InputRow
                        inputSize="auto"
                        label="Industry"
                        name="industry"
                        placeholder="Industry"
                        type="select"
                        items={genFakeData('Industry')}
                    />

                    <InputRow
                        inputSize="auto"
                        label="Class of business"
                        name="classOfBusiness"
                        placeholder="Class of business"
                        type="select"
                        items={genFakeData('Class_of_business')}
                    />

                    <InputRow
                        inputSize="auto"
                        label="Annual revenue"
                        name="revenueCurrency"
                        placeholder="Annual revenue"
                        type="select"
                        items={currencies}
                        nameSecond="revenue"
                        placeholderSecond="Annual revenue"
                    />

                    <InputRow
                        inputSize="auto"
                        label="Products required"
                        name="productsRequired"
                        placeholder="Products required"
                    />

                    <InputRow
                        inputSize="auto"
                        label="Target Premium"
                        placeholder="Target Premium"
                        name="targetPremium"
                    />

                    <InputRow
                        inputSize="auto"
                        label="Target Deductible"
                        placeholder="Target Deductible"
                        name="targetDeductible"
                    />

                    <InputRow
                        inputSize="auto"
                        label="Commission"
                        placeholder="Commission"
                        name="commission"
                    />
                </form>
            </div>
        </div>
    );
}

const log = values => console.log(values);

const mapDispatchToProps = dispatch => ({
    onSubmit: log,
    onChange: (values, dispatch, props, previousValues) => {
        props.dirty && dispatch(setEnquiryDirty());
    }
});

export default connect(
    null,
    mapDispatchToProps
)(reduxForm({ destroyOnUnmount: false })(withStyles(styles)(OverviewForm)));
