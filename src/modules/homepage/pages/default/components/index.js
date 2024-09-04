/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Cookies from 'js-cookie';
import {
    intervalCheckStatus,
    hostPreorderIphone,
    apiCheckQueue,
    tokenApi
} from '@config';

let globalInterval = null;
const Microsite = (props) => {
    const { router, lineQueue, seriesIphone } = props;

    const checkQueue = async () => {
        const response = await fetch(`${apiCheckQueue}?key=${Cookies.get('preOrderUid')}&series${seriesIphone}`, {
            headers: {
                Authorization: `Bearer ${tokenApi}`,
                Accept: 'application/json',
            },
        });
        const dataQueue = await response.json();
        if (dataQueue && dataQueue.is_pdp) {
            router.push(`${hostPreorderIphone}/${seriesIphone}.html?key=${Cookies.get('preOrderUid')}`);
        }
    };

    React.useEffect(() => {
        globalInterval = setInterval(() => {
            if (router.query.key && router.query.position) {
                checkQueue();
            }
        }, parseInt(intervalCheckStatus));
    }, [router?.query?.key, router?.query?.position]);

    return (
        <div className="container-microsite">
            <div className="wrapper-countdown">
                <div className="wrapper-countdown__content">
                    <div className="wrapper-countdown__content--desc">
                        <h2>You are now in line</h2>
                        <p>Sit tight! Your turn is almost here. When it comes, you’ll have 20 minutes to browse & purchase. Please do not close or refresh the page.</p>
                        <div>
                            <p>Your number in line: {lineQueue}</p>
                            <p>Your estimated wait time: 5 minutes</p>
                        </div>
                    </div>
                    <div className="wrapper-countdown__content--img">
                        <img src="/assets/img/banner-iphone.png" />
                    </div>
                </div>
            </div>
            <div className="row banner-content">
                <div className="col-lg-8 banner-content__image">
                    <img src="/assets/img/iphone16.webp" />
                </div>
                <div className="col-lg-4 banner-content__desc text-center">
                    <div>
                        <h2 className='font-weight-bold'>Iphone 16</h2>
                        <h2 className='font-weight-bold'>Name Mock</h2>
                        <p>Pre-order and enjoy up to 3 years warranty* Pay 0% interest up to 60 months</p>
                        <a href="https://senheng.com.my" target="_blank">SHOP NOW</a>
                    </div>
                </div>
            </div>
            <div className="preorder-offers__wrapper">
                <div className="preorder-offers__title">
                    <h2>Our Offers. Only at Senheng</h2>
                    <a href="https://senheng.com.my">LEARN MORE {">"}</a>
                </div>
                <div className="preorder-offers">
                    <div className="preorder-offers--items">
                        <img src="/assets/img/USP_1.webp" />
                        <h4 className='font-weight-bold'>Enjoy up to 3 years warranty</h4>
                        <p>Exclusively for paid PlusOne® members.</p>
                    </div>
                    <div className="preorder-offers--items">
                        <img src="/assets/img/USP_2.webp" />
                        <h4 className='font-weight-bold'>Nationwide Free Delivery*</h4>
                        <p>Free Delivery for iPhone 16 from 13 September - 12 October 2024</p>
                    </div>
                    <div className="preorder-offers--items">
                        <img src="/assets/img/USP_3.webp" />
                        <h4 className='font-weight-bold'>0% Instalment Up To 60 months*</h4>
                        <p>Choose an installment period from available options.</p>
                    </div>
                    <div className="preorder-offers--items">
                        <img src="/assets/img/USP_4.webp" />
                        <h4 className='font-weight-bold'>Get RM200 S-Coin Cashback* for selected financial partners.</h4>
                        <p>Choose from selected banks & buy now pay later to enjoy cashback.</p>
                    </div>
                    <div className="preorder-offers--items">
                        <img src="/assets/img/USP_5.webp" />
                        <h4 className='font-weight-bold'>Trade Up to get additional rebate up to RM500* upon purchase.</h4>
                        <p>Trade-in your old device and get trade-up additional rebates.</p>
                    </div>
                    <div className="preorder-offers--items">
                        <img src="/assets/img/USP_6.webp" />
                        <h4 className='font-weight-bold'>Anniversary Vouchers worth up to RM1,660*</h4>
                        <p>Get next purchase vouchers during our Anniversary campaign.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Microsite;
