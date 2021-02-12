import React, { useState } from 'react';
import './InputContact.scss';
import { connect } from 'react-redux';
import * as actionTypes from '../../../../../store/actions';

import skImg from '../../../../../assets/slovakia.png';
import czImg from '../../../../../assets/czech-republic.png';

const InputContact = (props) => {
    const [state, setState] = useState({
        isSK: true,
    });

    const toggleCountry = () => {
        setState((current) => {
            return {
                ...current,
                isSK: !current.isSK,
            };
        });
    }

    return (
        <div className="InputContact">
            <div className="iContactInput">
                <p className="iContactTag">Meno</p>
                <input
                    className="iContactText"
                    type="text"
                    placeholder="Zadajte Vaše meno"
                    minLength="2"
                    maxLength="20"
                    value={props.name}
                    onChange={
                        (e) => {
                            props.onUpdateName(e.target.value.trim());
                        }
                    }
                />
            </div>
            <div className="iContactInput">
                <p className="iContactTag">Priezvisko</p>
                <input
                    className="iContactText"
                    type="text"
                    placeholder="Zadajte Vaše priezvisko"
                    minLength="2"
                    maxLength="30"
                    value={props.lastName}
                    onChange={
                        (e) => {
                            props.onUpdateLastName(e.target.value.trim());
                        }
                    }
                />
            </div>
            <div className="iContactInput">
                <p className="iContactTag">E-mailová adresa</p>
                <input
                    className="iContactText"
                    type="email"
                    placeholder="Zadajte Váš e-mail"
                    minLength="2"
                    maxLength="50"
                    value={props.email}
                    onChange={
                        (e) => {
                            props.onUpdateEmail(e.target.value.trim().toLowerCase());
                        }
                    }
                />
            </div>
            <div className="iContactInput">
                <p className="iContactTag">Telefónne číslo</p>
                <div className="iContactRow">
                    {
                        state.isSK
                            ? <img alt="SK" src={skImg} className="iContactCountry" onClick={toggleCountry}/>
                            : <img alt="CZ" src={czImg} className="iContactCountry" onClick={toggleCountry}/>
                    }
                    <input
                        className="iContactText"
                        type="tel"
                        placeholder={
                            state.isSK
                                ? "+421"
                                : "+420"
                        }
                        minLength="1"
                        maxLength="13"
                        value={props.tel}
                        onChange={
                            (e) => {
                                props.onUpdateTel(e.target.value.trim());
                            }
                        }
                    />
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        name: state.name,
        lastName: state.lastName,
        email: state.email,
        tel: state.tel,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onUpdateName: (data) => dispatch({ type: actionTypes.UPDATE_NAME, payload: data }),
        onUpdateLastName: (data) => dispatch({ type: actionTypes.UPDATE_LAST_NAME, payload: data }),
        onUpdateEmail: (data) => dispatch({ type: actionTypes.UPDATE_EMAIL, payload: data }),
        onUpdateTel: (data) => dispatch({ type: actionTypes.UPDATE_TEL, payload: data }),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(InputContact);
