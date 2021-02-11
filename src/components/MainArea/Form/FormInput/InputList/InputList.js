import React, { useState } from 'react';
import './InputList.scss';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actionTypes from '../../../../../store/actions';

const InputList = (props) => {
    const [state, setState] = useState({
        isOpened: false,
    });

    const toggleList = () => {
        setState((current) => {
            return {
                ...current,
                isOpened: !current.isOpened,
            };
        });
    };

    if (state.isOpened) {
        return (
            <div className="InputListOpened">
                {
                    props.shelters.map((shelter, index) => {
                        return (
                            <div className="inputListTags" key={shelter.id} onClick={() => {
                                props.onChooseShelter(index);
                                toggleList();
                            }}>
                                <p className="shelterItem">{shelter.name}</p>
                            </div>
                        );
                    })
                }
            </div>
        );
    } else {
        if (props.choosedShelter === null) {
            return (
                <div className="InputList" onClick={toggleList}>
                    <div className="inputListTags">
                        <p className="tag">{props.tag}</p>
                        <p className="subText">{props.subText}</p>
                    </div>
                    <svg width="14" height="7" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.9393 1L7.30164 6L1.664 1" stroke="#DFDFDF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            );
        } else {
            return (
                <div className="InputList" onClick={toggleList}>
                    <div className="inputListTags">
                        <p className="tag">{props.shelters[props.choosedShelter]["name"]}</p>
                    </div>
                    <svg width="14" height="7" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.9393 1L7.30164 6L1.664 1" stroke="#DFDFDF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            );
        }
    }
}

InputList.propTypes = {
    tag: PropTypes.string.isRequired,
    subText: PropTypes.string.isRequired,
}

const mapStateToProps = state => {
    return {
        shelters: state.shelters,
        choosedShelter: state.choosedShelter,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onChooseShelter: (id) => dispatch({ type: actionTypes.CHOOSE_SHELTER, payload: id }),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(InputList);
