import { useMutation, useQuery } from '@apollo/client';
import Component from './components'
import { CustomerGetWaitingStatus } from '../../services/graphql/schema';

const Microsite = () => {
    // const [dataWaitingStatus] = useMutation(CustomerGetWaitingStatus);

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

    return <Component data={data} refetchDataCustomer={refetchDataCustomer} />
};

export default Microsite;
