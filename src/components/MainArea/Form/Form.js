import React from 'react';
import './Form.scss';
import PageIndicator from './PageIndicator/PageIndicator';
import { connect } from 'react-redux';
import FormOptions from './FormOptions/FormOptions';
import Button from '../../Button/Button';
import FormInput from './FormInput/FormInput';
import * as actionTypes from '../../../store/actions';

const Form = (props) => {
    return (
        <div className="Form">
            <PageIndicator count={props.pages.length} current={props.currentPage} />
            <div className="MainFormArea">
                <div className="heading">
                    <h1>{props.pages[props.currentPage].heading}</h1>
                </div>
                <FormOptions />
                <FormInput label="Najviac mi záleží na útulku" isRequired={
                    props.currentOption === "GENERAL"
                        ? false
                        : true
                } inputType="list" />
                <FormInput label="Suma, ktorou chcem prispieť" isRequired={true} inputType="amount" />
            </div>
            <div className="buttonsArea">
                {
                    props.currentPage <= 0
                        ? <div />
                        : <Button text="Späť" isDisabled={false} isMain={false} method={props.onPageBack} />
                }
                {
                    props.currentPage >= props.pages.length
                        ? <div />
                        : <Button text="Pokračovať" isDisabled={false} isMain={true} method={props.onPageForward} />
                }
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        currentPage: state.currentPage,
        pages: state.pages,
        currentOption: state.currentOption,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onPageBack: () => dispatch({type: actionTypes.PAGE_BACK}),
        onPageForward: () => dispatch({type: actionTypes.PAGE_FORWARD}),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
