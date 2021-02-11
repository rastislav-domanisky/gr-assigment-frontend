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
                    ? "FormOption Left notChoosed"
                    : "FormOption Left"
                : props.isChoosed === true
                    ? "FormOption Right notChoosed"
                    : "FormOption Right"
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
