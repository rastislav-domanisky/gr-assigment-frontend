import React, { useState } from 'react';
import { connect } from 'react-redux';
import "./PageIndicator.scss";

const PageIndicator = (props) => {
    return (
        <div className="PageIndicator">
            {
                props.pages.map((page, index) => {
                    return (
                        <div className={
                            index === props.currentPage
                                ? "pIndicator pIndicatorCurrent"
                                : "pIndicator"
                        } key={index} />
                    );
                })
            }
        </div>
    );
}

const mapStateToProps = state => {
    return {
        pages: state.pages,
        currentPage: state.currentPage,
    };
};

export default connect(mapStateToProps)(PageIndicator);
