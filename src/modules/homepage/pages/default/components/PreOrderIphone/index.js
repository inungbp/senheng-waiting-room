/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
import { useRouter } from 'next/router';
import React from 'react';
import Cookies from 'js-cookie';
import { v4 as uuidv4 } from 'uuid';
import { hostPreorderIphone, apiAddQueue, tokenApi } from '@config';
import PreOrderView from './view';
import TagManager from 'react-gtm-module';

const PreOrderIphone = (props) => {
    const { setLineQueue, setSeriesIphone } = props;
    const router = useRouter();
    const [messageError, setMessageError] = React.useState('');

    const handleSubmitWaitingRoom = async (series) => {
        setSeriesIphone(series);
        const response = await fetch(`${apiAddQueue}?key=${Cookies.get('preOrderUid')}&series=${series}`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${tokenApi}`,
                Accept: 'application/json',
            },
        });
        const dataQueue = await response.json();
        if (dataQueue) {
            setLineQueue(dataQueue?.position);
            TagManager.dataLayer({
                dataLayer: {
                    pageName: 'senheng-waiting-room',
                    pageType: 'guest',
                    event: 'add_data_user_iphone16',
                    data_user_iphone16: Cookies.get('preOrderUid'),
                    data_series_user_iphone16: series,
                },
            });
            if (dataQueue?.is_pdp) {
                router.push(`${hostPreorderIphone}/${series}.html?key=${Cookies.get('preOrderUid')}&series=${series}`);
            } else {
                router.push(`/?key=${Cookies.get('preOrderUid')}&position=${dataQueue?.position}`);
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
