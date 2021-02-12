import React from 'react';
import './SnackBar.scss';
import { connect } from 'react-redux';

const SnackBar = (props) => {
    if(props.snackBarShowed) {
        return (
            <div className="SnackBar">
                <p className="SnackBarMsg">{props.snackBarMsg}</p>
            </div>
        );
    } else {
        return (
            <div></div>
        );
    }
}

const mapStateToProps = state => {
    return {
        snackBarMsg: state.snackBarMsg,
        snackBarShowed: state.snackBarShowed,
    }
};

export default connect(mapStateToProps)(SnackBar);
