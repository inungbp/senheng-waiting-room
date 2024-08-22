import { useLazyQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import Component from './components'
import { CustomerGetWaitingStatus } from '../../services/graphql/schema';
import PreOrderIphone from './components/PreOrderIphone';
import Cookies from 'js-cookie';

const Microsite = () => {
    const router = useRouter();
    const [getWaitingStatus, responseWaitingStattus] = useLazyQuery(CustomerGetWaitingStatus);

    if (!Cookies.get('preOrderUid')) {
        return (
            <div><PreOrderIphone /></div>
        );
    }

    return <Component data={responseWaitingStattus?.data} getWaitingStatus={getWaitingStatus} router={router} />
};

export default Microsite;
