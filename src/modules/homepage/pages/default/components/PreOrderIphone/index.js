/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
import { useRouter } from 'next/router';
import { useMutation } from '@apollo/client';
import React from 'react';
import Cookies from 'js-cookie';
import { v4 as uuidv4 } from 'uuid';
import { customerEnterPageQueue } from '../../../../services/graphql/schema';
import { hostPreorderIphone, hostWaitingRoom } from '@config';
import PreOrderView from './view';

const PreOrderIphone = (props) => {
    const { setLineQueue } = props;
    const router = useRouter();
    const [messageError, setMessageError] = React.useState('');

    const [mutationEnterPageQueue] = useMutation(customerEnterPageQueue);

    const handleSubmitWaitingRoom = async (series) => {
        // const response = await fetch('https://dummyjson.com/posts/1');
        // const response = await fetch('https://infinite-linode.testingnow.me/webhook/queue/add?browser_id=inung-01', {
        //     method: 'POST',
        //     headers: {
        //         Authorization: 'Bearer ccc5383c54fa47f50c02f131436d29e7',
        //         Accept: 'application/json',
        //     },
        // });
        // const profileData = await response.json();
        // if (profileData) {
        //     console.log(profileData);
        // }
        fetch('https://channel-service.apollo.testingnow.me/queue/add/40', {
            method: 'GET',
            headers: {
              'Authorization': 'Bearer ccc5383c54fa47f50c02f131436d29e7',
              'Content-Type': 'application/json',
            },
          })
          .then(response => response.json())
          .then(data => console.log(data))
          .catch(error => console.error('Error:', error));
        // mutationEnterPageQueue({
        //     variables: {
        //         browserId: Cookies.get('preOrderUid'),
        //         urlDestination: `${hostPreorderIphone}/${series}.html`,
        //     },
        // }).then((res) => {
        //     if (res) {
        //         Cookies.set('preOrderId', res.data.enterPageQueue.id);
        //         if (res.data.enterPageQueue.allow_to_pdp) {
        //             setLineQueue(res.data.enterPageQueue.id);
        //             router.push(`/?browserId=${Cookies.get('preOrderUid')}&id=${res.data.enterPageQueue.id}`);
        //             // const urlRedirect = new URL(res.data.enterPageQueue.url_destination);
        //             // router.push(`${urlRedirect.href}?browserId=${res.data.enterPageQueue.browser_id}&id=${res.data.enterPageQueue.id}`);
        //         } else {
        //             setLineQueue(res.data.enterPageQueue.id);
        //             router.push(`/?browserId=${Cookies.get('preOrderUid')}&id=${res.data.enterPageQueue.id}`);
        //         }
        //     }
        // }).catch((e) => {
        //     setMessageError(e.message.split(':')[1])
        // });
    };

    const handlePhoneSelection = async (series) => {
        if (!Cookies.get('preOrderUid')) {
            await Cookies.set('preOrderUid', uuidv4());
            handleSubmitWaitingRoom(series);
        } else {
            handleSubmitWaitingRoom(series);
        }
    };

    const buttonDisabled = false;

    return (
        <div>
            <PreOrderView
                handlePhoneSelection={handlePhoneSelection}
                buttonDisabled={buttonDisabled}
                messageError={messageError}
            />
        </div>
    );
};

export default PreOrderIphone;
