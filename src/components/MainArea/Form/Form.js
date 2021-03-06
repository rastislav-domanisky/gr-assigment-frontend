import React from 'react';
import './Form.scss';
import PageIndicator from './PageIndicator/PageIndicator';
import { connect } from 'react-redux';
import FormOptions from './FormOptions/FormOptions';
import Button from '../../Button/Button';
import FormInput from './FormInput/FormInput';
import * as actionTypes from '../../../store/actions';
import amountValidator from '../../../models/AmountValidator';
import nameValidator from '../../../models/NameValidator';
import lastNameValidator from '../../../models/LastNameValidator';
import emailValidator from '../../../models/EmailValidator';
import telNumberValidator from '../../../models/TelNumberValidator';
import DetailsCheck from './DetailsCheck/DetailsCheck';
import Shelter from '../../../models/Shelter';

const Form = (props) => {

    const shelter = new Shelter();

    const hideAlertDialog = async () => {
        props.onHideAlertDialog();
        props.onResetState();
    }

    const sendData = () => {
        let data = {
            "firstName": props.name,
            "lastName": props.lastName,
            "email": props.email,
            "phone": props.tel,
            "value": props.amount,
        };
        if(props.choosedShelter !== null) {
            data = {
                ...data,
                "shelterID": props.choosedShelter,
            }
        }
        shelter.createContrib(data).then((result) => {
            props.onShowAlertDialog(result["message"]);
            props.onPageSet(0);
            setTimeout(hideAlertDialog, 3000);
        });
    }

    const canContinue = () => {
        // PAGE 1
        if (props.currentPage === 0) {
            if (props.currentOption === "SPECIFIC" && props.choosedShelter === null) {
                return false;
            }
            if (props.amount <= 0 || !amountValidator(props.amount)) {
                return false;
            }
        }
        // PAGE 2
        if (props.currentPage === 1) {
            if (!nameValidator(props.name)) {
                return false;
            }
            if (!lastNameValidator(props.lastName)) {
                return false;
            }
            if (!emailValidator(props.email)) {
                return false;
            }
            if (!telNumberValidator(props.tel)) {
                return false;
            }
        }
        // PAGE 3
        if (props.currentPage === 2) {
            if (!props.acceptedPersonalData) {
                return false;
            }
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
                        <FormInput label="O vás" isRequired={false} inputType="contact" />
                    </div>
                );
            case 2:
                return (
                    <div>
                        <DetailsCheck />
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
                    props.currentPage >= props.pages.length - 1
                        ? <Button text="Odoslať formulár" isDisabled={
                            !canContinue()
                        } isMain={true} method={sendData} />
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
        onShowAlertDialog: (data) => dispatch({ type: actionTypes.SHOW_ALERT_DIALOG, payload: data }),
        onPageSet: (data) => dispatch({ type: actionTypes.PAGE_SET, payload: data }),
        onHideAlertDialog: () => dispatch({ type: actionTypes.HIDE_ALERT_DIALOG }),
        onResetState: () => dispatch({ type: actionTypes.RESET_STATE }),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
