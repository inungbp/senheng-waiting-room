import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import Component from './components'
import { CustomerGetWaitingStatus } from '../../services/graphql/schema';

const Microsite = () => {
    const router = useRouter();
    const { data, loading, error, refetch: refetchDataCustomer } = useQuery(CustomerGetWaitingStatus, {
        variables: {
            browserId: 'browser123',
            customerId: 1,
        }
    });

    if (loading || error) {
        return (
            <div className="wrapper-loader">
                <div className="loader"></div>
            </div>
        );
    }

    return <Component data={data} refetchDataCustomer={refetchDataCustomer} router={router} />
};

export default Microsite;
