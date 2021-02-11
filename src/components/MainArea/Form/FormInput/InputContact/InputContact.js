import React from 'react';
import './InputContact.scss';

const InputContact = (props) => {
    return (
        <div className="InputContact">
            <div className="iContactInput">
                <p className="iContactTag">Meno</p>
                <input className="iContactText" type="text" placeholder="Zadajte Vaše meno"/>
            </div>
        </div>
    );
}

export default InputContact;
