import React from 'react';
import { useRouter } from 'next/router';
import Component from './components'
import dynamic from 'next/dynamic'

const Microsite = () => {
    const PreOrderIphone = dynamic(() => import('./components/PreOrderIphone'), { ssr: false });
    const [lineQueue, setLineQueue] = React.useState(0);
    const [seriesIphone, setSeriesIphone] = React.useState('');

    const router = useRouter();

    if (!router.query.browser_id && !router.query.position) {
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
