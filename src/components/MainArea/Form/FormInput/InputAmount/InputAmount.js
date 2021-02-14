import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './InputAmount.scss';
import * as actionTypes from '../../../../../store/actions';

const InputAmount = (props) => {

    const updateAmount = (val) => {
        props.onUpdateAmount(val);
    }

    return (
        <div className="InputAmount">
            {
                props.amounts.map((amnt, index) => {
                    return (
                        <div className={
                            props.amount === amnt
                                ? "amnt selectedAmnt"
                                : "amnt"
                        }
                            key={index}
                            onClick={
                                () => {
                                    updateAmount(amnt);
                                }
                            }
                        >
                            {
                                amnt + " " + props.currency
                            }
                        </div>
                    );
                })
            }
            <div className="amntInput">
                <input type="number" value={props.amount} onChange={
                    (e) => {
                        updateAmount(e.target.value.trim());
                    }
                } />
                €
            </div>
        </div>
    );
}

InputAmount.propTypes = {
    amounts: PropTypes.array, // Arrray of numbers
    currency: PropTypes.string.isRequired, // €/$
}

const mapStateToProps = state => {
    return {
        amount: state.amount,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onUpdateAmount: (value) => dispatch({ type: actionTypes.UPDATE_AMOUNT, payload: value }),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(InputAmount);
