import React from 'react';
import { useRouter } from 'next/router';
import Component from './components'
import dynamic from 'next/dynamic'
import TagManager from 'react-gtm-module';
import { GTMSenheng, GTMSenq, storeCode } from '@config';
import Cookies from 'js-cookie';
import { v4 as uuidv4 } from 'uuid';
import { hostPreorderIphone, apiAddQueue, tokenApi } from '@config';

const Microsite = () => {
    const PreOrderIphone = dynamic(() => import('./components/PreOrderIphone'), { ssr: false });
    const [seriesIphone, setSeriesIphone] = React.useState('');
    const [estimation, setEstimation] = React.useState(0);
    const [startPreOrder, setStartPreOrder] = React.useState(false);

    const router = useRouter();
    const buttonDisabled = false;

    const handleSubmitWaitingRoom = async (series) => {
        setSeriesIphone(series);
        Cookies.set('seriesIphone16', series);
        const response = await fetch(`${apiAddQueue}?key=${Cookies.get('preOrderUid')}&series=${series}`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${tokenApi}`,
                Accept: 'application/json',
            },
        });
        const dataQueue = await response.json();
        if (dataQueue) {
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
                // router.push(`/?key=${Cookies.get('preOrderUid')}&position=${dataQueue?.position}`);
                router.push(`${hostPreorderIphone}/${series}.html?key=${Cookies.get('preOrderUid')}&series=${series}`);
            } else {
                // enter line & estimation
                Cookies.set('line', dataQueue?.position);
                Cookies.set('time', dataQueue?.estimation);
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

    // GTM & GA
    const tagManagerArgs = {
        gtmId:
            typeof publicRuntimeConfig !== 'undefined' && GTMSenheng.gtmId[publicRuntimeConfig.appEnv]
                ? GTMSenheng.gtmId[publicRuntimeConfig.appEnv]
                : GTMSenheng.gtmId,
    };
    const tagManagerArgsSenq = {
        gtmId:
            typeof publicRuntimeConfig !== 'undefined' && GTMSenq.gtmId[publicRuntimeConfig.appEnv]
                ? GTMSenq.gtmId[publicRuntimeConfig.appEnv]
                : GTMSenq.gtmId,
    };

    React.useEffect(() => {
        if (GTMSenheng.enable) {
            TagManager.initialize(storeCode === 'senheng_malay_en_US' ? tagManagerArgs : tagManagerArgsSenq);
            TagManager.dataLayer({
                dataLayer: {
                    pageName: storeCode === 'senheng_malay_en_US' ? 'senheng-waiting-room' : 'senq-waiting-room',
                    pageType: 'homepage',
                    event: 'page_view_waiting_room',
                    page_view_home: storeCode === 'senheng_malay_en_US' ? 'senheng-waiting-room' : 'senq-waiting-room',
                },
            });
        };
    }, [GTMSenheng]);

    if (!router.query.key && !router.query.position) {
        return (
            <div>
                <PreOrderIphone
                    seriesIphone={seriesIphone}
                    setSeriesIphone={setSeriesIphone}
                    setEstimation={setEstimation}
                    estimation={estimation}
                    startPreOrder={startPreOrder}
                    setStartPreOrder={setStartPreOrder}
                    handlePhoneSelection={handlePhoneSelection}
                    buttonDisabled={buttonDisabled}
                />
            </div>
        );
    }

    return (
        <div>
            <Component
                router={router}
                seriesIphone={seriesIphone}
                setSeriesIphone={setSeriesIphone}
                setEstimation={setEstimation}
                estimation={estimation}
                startPreOrder={startPreOrder}
                setStartPreOrder={setStartPreOrder}
                handlePhoneSelection={handlePhoneSelection}
                buttonDisabled={buttonDisabled}
            />
        </div>);
};

export default Microsite;
