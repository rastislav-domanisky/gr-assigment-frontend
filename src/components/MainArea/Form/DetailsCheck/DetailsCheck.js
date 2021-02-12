import React from 'react';
import './DetailsCheck.scss';
import { connect } from 'react-redux';

const DetailsCheck = (props) => {
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
        </div>
    );
}

const mapStateToProps = state => {
    return {
        ...state,
    }
};

export default connect(mapStateToProps)(DetailsCheck);
