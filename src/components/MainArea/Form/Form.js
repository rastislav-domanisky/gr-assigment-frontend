import React from 'react';
import './Form.scss';
import PageIndicator from './PageIndicator/PageIndicator';
import { connect } from 'react-redux';
import FormOptions from './FormOptions/FormOptions';

const Form = (props) => {
    return (
        <div className="Form">
            <PageIndicator count={props.pages.length} current={props.currentPage} />
            <div className="heading">
                <h1>{props.pages[props.currentPage].heading}</h1>
            </div>
            <FormOptions />
        </div>
    );
}

const mapStateToProps = state => {
    return {
        currentPage: state.currentPage,
        pages: state.pages,
    };
};

export default connect(mapStateToProps)(Form);
