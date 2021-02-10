import React from 'react';
import PropTypes from 'prop-types';
import './FooterContent.scss';

const FooterContent = (props) => {
    return (
        <div className="FooterContent">
            <p>{props.title}</p>
            <div className="FooterContentChildren">
                {props.children}
            </div>
        </div>
    );
}

FooterContent.propTypes = {
    title: PropTypes.string.isRequired,
}

export default FooterContent;
