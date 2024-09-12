/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import PreOrderView from './view';

const PreOrderIphone = (props) => {
    const { startPreOrder, setStartPreOrder, handlePhoneSelection, buttonDisabled } = props;

    return (
        <div>
            <PreOrderView
                handlePhoneSelection={handlePhoneSelection}
                buttonDisabled={buttonDisabled}
                setStartPreOrder={setStartPreOrder}
                startPreOrder={startPreOrder}
            />
        </div>
    );
};

export default PreOrderIphone;
