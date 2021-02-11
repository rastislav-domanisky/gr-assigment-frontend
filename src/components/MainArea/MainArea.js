import React, { useEffect } from 'react';
import "./MainArea.scss";
import Form from './Form/Form';
import { connect } from 'react-redux';
import dogImg from '../../assets/dog.png';
import Spinner from '../Spinner/Spinner';
import * as actionTypes from '../../store/actions';
import Shelter from '../../models/Shelter';

const MainArea = (props) => {

    const shelter = new Shelter();

    const loadShelters = async () => {
        let result = null;
        await shelter.getShelters().then((x) => {
            result = x;
        });
        props.onLoadShelters(result);
    }

    useEffect(() => {
        loadShelters();
    }, []);

    return (
        <main className="MainArea">
            {
                props.shelters === null
                    ? (
                        <div className="spinnerArea">
                            <Spinner />
                        </div>
                    )
                    : props.shelters === "ERROR" 
                        ? (
                            <div className="spinnerArea">
                                <h3>ERROR</h3>
                            </div>
                        )
                        : <Form />  
            }
            <div className="dogImage">
                <img alt="Dog" src={dogImg} />
            </div>
        </main>
    );
}

const mapStateToProps = state => {
    return {
        shelters: state.shelters,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onLoadShelters: (data) => dispatch({ type: actionTypes.LOAD_SHELTERS, payload: data }),
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(MainArea);
