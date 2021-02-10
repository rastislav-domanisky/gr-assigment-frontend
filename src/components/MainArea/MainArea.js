import React from 'react';
import "./MainArea.scss";
import Form from './Form/Form';

import dogImg from '../../assets/dog.png';

const MainArea = () => {
    return (
        <main className="MainArea">
            <Form />
            <div className="dogImage">
                <img alt="Dog" src={dogImg} />
            </div>
        </main>
    );
}

export default MainArea;
