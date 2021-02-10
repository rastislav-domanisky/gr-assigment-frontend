import React from 'react';
import "./FormOption.scss";
import PropTypes from 'prop-types';

const FormOption = (props) => {
    return (
        <div className={
            props.isLeft === true
                ? props.isChoosed === true
                    ? "FormOption Left Choosed"
                    : "FormOption Left"
                : props.isChoosed === true
                    ? "FormOption Right"
                    : "FormOption Right notChoosed"
        }>
        {props.children}
        </div>
    );
}

FormOption.propTypes = {
    isLeft: PropTypes.bool.isRequired,
    isChoosed: PropTypes.bool.isRequired,
}

export default FormOption;
