import React from 'react';
import './AlertDialog.scss';
import { connect } from 'react-redux';

const AlertDialog = (props) => {
    if(props.alertDialogShowed) {
        return (
            <div className="AlertDialogBg" style={{
                height: document.body.scrollHeight+"px",
            }}>
                <div className="AlertDialog">
                    <p className="AlertDialogMsg">{props.alertDialogMsg}</p>
                </div>
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
        alertDialogMsg: state.alertDialogMsg,
        alertDialogShowed: state.alertDialogShowed,
    }
};

export default connect(mapStateToProps)(AlertDialog);
