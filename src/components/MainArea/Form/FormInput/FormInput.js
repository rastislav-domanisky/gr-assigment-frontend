import React from 'react';
import "./FormInput.scss";
import PropTypes from 'prop-types';

import InputList from './InputList/InputList';
import InputAmount from './InputAmount/InputAmount';
import InputContact from './InputContact/InputContact';

const getInputComponent = (type) => {
    switch (type) {
        case "list":
            return (
                <InputList
                    tag="Útulok"
                    subText="Vyberte útulok zo zoznamu"
                />
            );
        case "amount":
            return (
                <InputAmount amounts={[5, 10, 20, 30, 50, 100]} currency="€" />
            );
        case "contact":
            return (
                <InputContact />
            );
    }
}

const FormInput = (props) => {
    return (
        <div className="FormInput">
            <div className="labelArea">
                <p className="label">{ props.label }</p>
                <p className="requiredText">{
                    props.isRequired === true ? "" : "Nepovinné"
                }</p>
            </div>
            {
                getInputComponent(props.inputType)
            }
        </div>
    );
}

FormInput.propTypes = {
    label: PropTypes.string.isRequired,
    isRequired: PropTypes.bool.isRequired,
    inputType: PropTypes.string.isRequired, // list/text/amount
};

export default FormInput;
