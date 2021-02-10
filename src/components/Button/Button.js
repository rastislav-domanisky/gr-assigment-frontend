import React from 'react';
import "./Button.scss";
import PropTypes from "prop-types";

const Button = (props) => {
    return (
        <div className={
            props.isMain === true
                ? props.isDisabled
                    ? "Button Disabled"
                    : "Button Main"
                : props.isDisabled
                    ? "Button Disabled"
                    : "Button"
        }>
        {props.text}
        </div>
    );
}

Button.propTypes = {
    isMain: PropTypes.bool.isRequired,
    isDisabled: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
}

export default Button;
