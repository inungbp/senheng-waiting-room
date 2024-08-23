import { useLazyQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import Component from './components'
import { CustomerGetWaitingStatus } from '../../services/graphql/schema';
import PreOrderIphone from './components/PreOrderIphone';
import Cookies from 'js-cookie';

const Microsite = () => {
    const router = useRouter();
    const [getWaitingStatus, responseWaitingStattus] = useLazyQuery(CustomerGetWaitingStatus);

    if (!router.query.browserId && !router.query.id) {
        return (
            <div><PreOrderIphone /></div>
        );
    }

    return <div><Component data={responseWaitingStattus?.data} getWaitingStatus={getWaitingStatus} router={router} /></div>
};

export default Microsite;
