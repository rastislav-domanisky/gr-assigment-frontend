import React from 'react';
import './Form.scss';
import PageIndicator from './PageIndicator/PageIndicator';
import { connect } from 'react-redux';
import FormOptions from './FormOptions/FormOptions';
import Button from '../../Button/Button';
import FormInput from './FormInput/FormInput';
import * as actionTypes from '../../../store/actions';
import amountValidator from '../../../models/AmountValidator';

const Form = (props) => {

    const canContinue = () => {
        // PAGE 1
        if(props.currentPage === 0) {
            if(props.currentOption === "SPECIFIC" && props.choosedShelter === null) {
                return false;
            }
            if(props.amount <= 0 || !amountValidator(props.amount)) {
                return false;
            }
        }
        // PAGE 2
        if(props.currentPage === 1) {
            
        }
        // PAGE 3
        if(props.currentPage === 2) {
            
        }
        return true;
    }

    const getPageContext = (props, pageIndex) => {
        switch (pageIndex) {
            case 0:
                return (
                    <div>
                        <FormOptions />
                        <FormInput label="Najviac mi záleží na útulku" isRequired={
                            props.currentOption === "GENERAL"
                                ? false
                                : true
                        } inputType="list" />
                        <FormInput label="Suma, ktorou chcem prispieť" isRequired={true} inputType="amount" />
                    </div>
                );
            case 1:
                return (
                    <div>
                        <FormInput label="O vás" isRequired={true} inputType="contact" />
                    </div>
                );
            case 2:
                return (
                    <div>

                    </div>
                );
        }
    }

    return (
        <div className="Form">
            <PageIndicator count={props.pages.length} current={props.currentPage} />
            <div className="MainFormArea">
                <div className="heading">
                    <h1>{props.pages[props.currentPage].heading}</h1>
                </div>
                {
                    getPageContext(props, props.currentPage)
                }
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
                        : <Button text="Pokračovať" isDisabled={
                            !canContinue()
                        } isMain={true} method={props.onPageForward} />
                }
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        ...state,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onPageBack: () => dispatch({ type: actionTypes.PAGE_BACK }),
        onPageForward: () => dispatch({ type: actionTypes.PAGE_FORWARD }),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
