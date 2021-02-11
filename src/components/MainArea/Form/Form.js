import React from 'react';
import './Form.scss';
import PageIndicator from './PageIndicator/PageIndicator';
import { connect } from 'react-redux';
import FormOptions from './FormOptions/FormOptions';
import Button from '../../Button/Button';
import FormInput from './FormInput/FormInput';

const Form = (props) => {
    return (
        <div className="Form">
            <PageIndicator count={props.pages.length} current={props.currentPage} />
            <div className="MainFormArea">
                <div className="heading">
                    <h1>{props.pages[props.currentPage].heading}</h1>
                </div>
                <FormOptions />
                <FormInput label="Najviac mi záleží na útulku" isRequired={false} inputType="list" />
                <FormInput label="Suma, ktorou chcem prispieť" isRequired={true} inputType="amount" />
            </div>
            <div className="buttonsArea">
                <Button text="Späť" isDisabled={false} isMain={false} />
                <Button text="Pokračovať" isDisabled={false} isMain={true} />
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        currentPage: state.currentPage,
        pages: state.pages,
    };
};

export default connect(mapStateToProps)(Form);
