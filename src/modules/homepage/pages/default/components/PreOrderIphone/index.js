/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
import { useRouter } from 'next/router';
import React from 'react';
import Cookies from 'js-cookie';
import { v4 as uuidv4 } from 'uuid';
import { hostPreorderIphone, apiAddQueue, tokenApi } from '@config';
import PreOrderView from './view';

const PreOrderIphone = (props) => {
    const { setLineQueue, setSeriesIphone } = props;
    const router = useRouter();
    const [messageError, setMessageError] = React.useState('');

    const handleSubmitWaitingRoom = async (series) => {
        setSeriesIphone(series);
        const response = await fetch(`${apiAddQueue}?browser_id=${Cookies.get('preOrderUid')}`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${tokenApi}`,
                Accept: 'application/json',
            },
        });
        const dataQueue = await response.json();
        if (dataQueue) {
            setLineQueue(dataQueue?.position);
            if (dataQueue?.is_pdp) {
                router.push(`${hostPreorderIphone}/${series}.html?browser_id=${Cookies.get('preOrderUid')}`);
            } else {
                router.push(`/?browser_id=${Cookies.get('preOrderUid')}&position=${dataQueue?.position}`);
            }
        }
    };

    const handlePhoneSelection = async (series) => {
        if (!Cookies.get('preOrderUid')) {
            await Cookies.set('preOrderUid', uuidv4());
            handleSubmitWaitingRoom(series);
        } else {
            handleSubmitWaitingRoom(series);
        }
    };

    const buttonDisabled = false;

    return (
        <div>
            <PreOrderView
                handlePhoneSelection={handlePhoneSelection}
                buttonDisabled={buttonDisabled}
                messageError={messageError}
            />
        </div>
    );
};

export default PreOrderIphone;
