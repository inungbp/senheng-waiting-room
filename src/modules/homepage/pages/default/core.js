import { useQuery } from '@apollo/client';
import { CMSPageInterest } from '@config';
import { useRouter } from 'next/router';
import Component from './components'
import { CustomerGetWaitingStatus } from '../../services/graphql/schema';

const Microsite = () => {
    const router = useRouter();
    const { data, loading, error, refetch: refetchDataCustomer } = useQuery(CustomerGetWaitingStatus, {
        variables: {
            browserId: router.query.browserId,
            customerId: parseInt(router.query.id),
        }
    });

    if (loading || error) {
        return (
            <div className="wrapper-loader">
                <div className="loader"></div>
                <h2>please select your iphone 15 first<a href={CMSPageInterest}>here</a></h2>
            </div>
        );
    }

    return <Component data={data} refetchDataCustomer={refetchDataCustomer} router={router} />
};

export default Microsite;
