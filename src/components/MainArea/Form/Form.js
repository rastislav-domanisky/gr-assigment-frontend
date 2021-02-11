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
                <FormInput label="Najviac mi záleží na útulku" isRequired={
                    props.currentOption === "GENERAL"
                        ? false
                        : true
                } inputType="list" />
                <FormInput label="Suma, ktorou chcem prispieť" isRequired={true} inputType="amount" />
            </div>
            <div className="buttonsArea">
                {
                    props.currentPage <= 0
                        ? <div />
                        : <Button text="Späť" isDisabled={false} isMain={false} />
                }
                {
                    props.currentPage >= props.pages.length
                        ? <div />
                        : <Button text="Pokračovať" isDisabled={false} isMain={true} />
                }
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        currentPage: state.currentPage,
        pages: state.pages,
        currentOption: state.currentOption,
    };
};

export default connect(mapStateToProps)(Form);
