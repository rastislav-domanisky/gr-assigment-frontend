import React from 'react';
import "./FormOption.scss";
import PropTypes from 'prop-types';

const FormOption = (props) => {
    return (
        <div
        onClick={
            () => {
                props.click(props.value);
            }
        }
        className={
            props.isLeft === true
                ? props.isChoosed === true
                    ? "FormOption Left"
                    : "FormOption Left notChoosed"
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
    click: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
}

export default FormOption;
