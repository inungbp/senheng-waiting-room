import React from 'react';
import { useLazyQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import Component from './components'
import { CustomerGetWaitingStatus } from '../../services/graphql/schema';
import dynamic from 'next/dynamic'

const Microsite = () => {
    const PreOrderIphone = dynamic(() => import('./components/PreOrderIphone'), { ssr: false });
    const [lineQueue, setLineQueue] = React.useState(0);

    const router = useRouter();
    const [getWaitingStatus, responseWaitingStattus] = useLazyQuery(CustomerGetWaitingStatus);

    if (!router.query.browserId && !router.query.id) {
        return (
            <div><PreOrderIphone setLineQueue={setLineQueue}/></div>
        );
    }

    return (
        <div>
            <Component
                data={responseWaitingStattus?.data}
                getWaitingStatus={getWaitingStatus}
                router={router}
                lineQueue={lineQueue}
            />
        </div>);
};

export default Microsite;
