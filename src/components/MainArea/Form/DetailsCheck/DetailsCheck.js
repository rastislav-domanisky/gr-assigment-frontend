import React from 'react';
import './DetailsCheck.scss';
import { connect } from 'react-redux';
import * as actionTypes from '../../../../store/actions';

const DetailsCheck = (props) => {

    const toggleCheckBtn = () => {
        props.onIUpdatePersonalData(!props.acceptedPersonalData);
    }

    return (
        <div className="DetailsCheck">
            <div className="detailArea">
                <p className="detailLabel">Akou formou chcem pomôcť</p>
                <p className="detailValue">
                    {
                        props.currentOption === "GENERAL"
                            ? "Chcem finančne prispieť celej nadácii"
                            : "Chcem finančne prispieť konkrétnemu útulku"
                    }
                </p>
            </div>
            <div className="detailArea">
                <p className="detailLabel">Najviac mi záleží na útulku</p>
                <p className="detailValue">
                    {
                        props.choosedShelter === null
                            ? ""
                            : props.shelters[props.choosedShelter]["name"]
                    }
                </p>
            </div>
            <div className="detailArea">
                <p className="detailLabel">Suma ktorou chcem pomôcť</p>
                <p className="detailValue">
                    {
                        props.amount + " €"
                    }
                </p>
            </div>
            <div className="detailArea">
                <p className="detailLabel">Meno a priezvisko</p>
                <p className="detailValue">
                    {
                        props.name + " " + props.lastName
                    }
                </p>
            </div>
            <div className="detailArea">
                <p className="detailLabel">E-mailová adresa</p>
                <p className="detailValue">
                    {
                        props.email
                    }
                </p>
            </div>
            <div className="detailArea">
                <p className="detailLabel">Telefónne číslo</p>
                <p className="detailValue">
                    {
                        props.tel
                    }
                </p>
            </div>
            <div className="checkArea">
                <div className="checkBtn" onClick={
                    toggleCheckBtn
                }>
                    {
                        props.acceptedPersonalData
                            ? (
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17 1L6 12L1 7" stroke="#AB7455" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            )
                            : null
                    }
                </div>
                Súhlasím so spracovaním mojich osobných údajov
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        ...state,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onIUpdatePersonalData: (data) => dispatch({type: actionTypes.UPDATE_PERSONAL_DATA, payload: data}),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailsCheck);
