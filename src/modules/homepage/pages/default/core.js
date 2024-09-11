import React from 'react';
import { useRouter } from 'next/router';
import Component from './components'
import dynamic from 'next/dynamic'
import TagManager from 'react-gtm-module';
import { GTMSenheng, GTMSenq, storeCode } from '@config';

const Microsite = () => {
    const PreOrderIphone = dynamic(() => import('./components/PreOrderIphone'), { ssr: false });
    const [lineQueue, setLineQueue] = React.useState(0);
    const [seriesIphone, setSeriesIphone] = React.useState('');
    const [estimation, setEstimation] = React.useState(0);

    const router = useRouter();

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
                    setLineQueue={setLineQueue}
                    seriesIphone={seriesIphone}
                    setSeriesIphone={setSeriesIphone}
                    setEstimation={setEstimation}
                    estimation={estimation}
                />
            </div>
        );
    }

    return (
        <div>
            <Component
                router={router}
                lineQueue={lineQueue}
                seriesIphone={seriesIphone}
                setSeriesIphone={setSeriesIphone}
                setEstimation={setEstimation}
                estimation={estimation}
            />
        </div>);
};

export default Microsite;
