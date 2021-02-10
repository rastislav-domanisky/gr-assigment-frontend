import React, { useState } from 'react';
import PropTypes from "prop-types";
import "./PageIndicator.scss";

const PageIndicator = (props) => {
    let indicators = [];
    for(let i=0; i<props.count; i++) {
        indicators.push(
            <div className={
                i === props.current
                    ? "pIndicator pIndicatorCurrent"
                    : "pIndicator"
            } key={i} />
        );
    }

    return (
        <div className="PageIndicator">
            {indicators}
        </div>
    );
}

PageIndicator.propTypes = {
    count: PropTypes.number.isRequired,
    current: PropTypes.number.isRequired,
}

export default PageIndicator;
