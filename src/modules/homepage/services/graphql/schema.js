import { gql } from '@apollo/client';

export const CustomerGetWaitingStatus = gql`
    query getWaitingStatus($browserId: String!, $customerId: Int!) {
        getWaitingStatus(browser_id: $browserId, id: $customerId){
            id
            browser_id
            url_destination
            must_wait
            allow_to_pdp
            visitor_count
            status
        }
    }
`;

export const customerEnterPageQueue = gql`
mutation enterPageQueue(
    $browserId: String!,
    $urlDestination: String!,
) {
    enterPageQueue(browser_id: $browserId, url_destination: $urlDestination){
        id
        browser_id
        url_destination
        must_wait
        allow_to_pdp
        visitor_count
        status
    }
  }
`;
