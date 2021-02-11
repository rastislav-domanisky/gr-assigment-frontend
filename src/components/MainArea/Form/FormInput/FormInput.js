import React from 'react';
import "./FormInput.scss";
import PropTypes from 'prop-types';

import InputList from './InputList/InputList';

const getInputComponent = (type) => {
    switch (type) {
        case "list":
            return (
                <InputList
                    tag="Útulok"
                    subText="Vyberte útulok zo zoznamu"
                />
            )
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
