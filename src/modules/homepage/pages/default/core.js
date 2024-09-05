import React from 'react';
import { useRouter } from 'next/router';
import Component from './components'
import dynamic from 'next/dynamic'
import TagManager from 'react-gtm-module';
import { GTM } from '@config';

const Microsite = () => {
    const PreOrderIphone = dynamic(() => import('./components/PreOrderIphone'), { ssr: false });
    const [lineQueue, setLineQueue] = React.useState(0);
    const [seriesIphone, setSeriesIphone] = React.useState('');

    const router = useRouter();

    // GTM & GA
    const tagManagerArgs = {
        gtmId:
            typeof publicRuntimeConfig !== 'undefined' && GTM.gtmId[publicRuntimeConfig.appEnv]
                ? GTM.gtmId[publicRuntimeConfig.appEnv]
                : GTM.gtmId,
    };

    React.useEffect(() => {
        if (GTM.enable) {
            TagManager.initialize(tagManagerArgs);
            TagManager.dataLayer({
                dataLayer: {
                    pageName: 'senheng-waiting-room',
                    pageType: 'homepage',
                    event: 'page_view_waiting_room',
                    page_view_home: 'senheng-waiting-room',
                },
            });
        };
    }, [GTM]);

    if (!router.query.key && !router.query.position) {
        return (
            <div>
                <PreOrderIphone
                    setLineQueue={setLineQueue}
                    seriesIphone={seriesIphone}
                    setSeriesIphone={setSeriesIphone}
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
            />
        </div>);
};

export default Microsite;
