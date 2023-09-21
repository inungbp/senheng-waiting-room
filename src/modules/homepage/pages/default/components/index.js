/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
import { intervalCheckStatus } from '@config';
import React from 'react';

const Microsite = (props) => {
    const { data, refetchDataCustomer = () => {}, router } = props;

    // Directly to PDP if allow_to_pdp is true, otherwise, the setInterval function will keep checking the status
    // if (data && data.getWaitingStatus && data.getWaitingStatus.allow_to_pdp) {
    //     router.push(data.getWaitingStatus.url_destination);
    // }

    // setInterval(() => {
    //     if (data && data.getWaitingStatus && data.getWaitingStatus.allow_to_pdp) {
    //         clearInterval();
    //         router.push(data.getWaitingStatus.url_destination);
    //     } else {
    //         refetchDataCustomer();
    //     }
    // }, parseInt(intervalCheckStatus));

    return (
        <div className="container-microsite">
            <h2>Pre-order Offers.</h2>
            <div className="preorder-offers">
                <div className="preorder-offers--items">
                    <img src="/assets/img/USP_1.webp" />
                    <h4>Up to 3</h4>
                    <p>Year Warranty</p>
                </div>
                <div className="preorder-offers--items">
                    <img src="/assets/img/USP_2.webp" />
                    <h4>Same Day Delivery</h4>
                    <p>& Free Delivery*</p>
                </div>
                <div className="preorder-offers--items">
                    <img src="/assets/img/USP_3.webp" />
                    <h4>0% EPP 60 months</h4>
                    <p>in store exclusive</p>
                </div>
                <div className="preorder-offers--items">
                    <img src="/assets/img/USP_4.webp" />
                    <h4>Bank Point</h4>
                    <p>Redemption</p>
                </div>
                <div className="preorder-offers--items">
                    <img src="/assets/img/USP_5.webp" />
                    <h4>Trade Up and get Extra</h4>
                    <p>Saving up to RM400</p>
                </div>
                <div className="preorder-offers--items">
                    <img src="/assets/img/USP_6.webp" />
                    <h4>Total Vouchers</h4>
                    <p>worth up to RM1,544*</p>
                </div>
            </div>
            <div className="microsite-description">
                <h2>The next is soon.</h2>
                <h4>You're now in line to pre-order the iPhone 15.</h4>
                <div className="container">
                    <h4>Loading</h4>
                    <div className="row">
                        <div className="col-3">
                            <div className="snippet" data-title="dot-pulse">
                                <div className="stage">
                                    <div className="dot-pulse" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <p>Thank you for your patience and support.</p>
                <h2 className="loading-reload">Please do not refresh the page while waiting.</h2>
            </div>
            <style jsx>
                {`
                .preorder-offers {
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                    gap: 40px;
                    justify-content: center;
                }
                .preorder-offers .preorder-offers--items {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    width: 180px;
                }
                .preorder-offers .preorder-offers--items img {
                    width: 100%;
                    height: auto;
                    margin-bottom: 12px;
                }
                .preorder-offers .preorder-offers--items h4 {
                    color: #000000;
                    margin: 2px 0;
                    font-size: 15px;
                    text-align: center;
                }
                .preorder-offers .preorder-offers--items p {
                    color: #000000;
                    font-size: 16px;
                    text-align: center;
                    font-weight: 400;
                    margin: 0;
                }
                .container-microsite {
                    min-height: 100vh;
                    width: 100vw;
                    display: flex;
                    justify-content: center;
                    background: #FFFFFF;
                    align-items: center;
                    flex-direction: column;
                    position: relative;
                }
                .img-center {
                    margin-bottom: 20px;
                    width: 100%;
                    max-width: 600px;
                    height: auto;
                }
                .microsite-description {
                    height: fit-content;
                    text-align: center;
                    margin: 40px auto;
                    color: #000000;
                }
                h2 {
                    margin: 20px 0;
                    font-size: 40px;
                }
                h4 {
                    font-size: 20px;
                    margin-top: 0;
                }
                p {
                    margin: 10px  0;
                    color: #7F7F7F;
                    font-size: 20px;
                    font-weight: bold;
                }
                .container {
                    display: flex;
                    align-items: center;
                    gap: 20px;
                    justify-content: center;
                }
                .loading-reload {
                    color: #7F7F7F;
                    font-size: 20px;
                    font-weight: 400;
                    margin: 8px 0;
                }
                @media only screen and (max-width: 600px) {
                    .preorder-offers {
                        gap: 12px;
                    }
                    .preorder-offers .preorder-offers--items h4 {
                        font-size: 12px;
                    }
                    .preorder-offers .preorder-offers--items p {
                        font-size: 12px;
                    }
                    .img-logo{
                        max-width: 100px;
                    }
                    .img-center {
                        width: 250px;
                        height: auto;
                    }
                    h2 {
                        font-size: 20px;
                    }
                    h4 {
                        font-size: 12px;
                    }
                    p {
                        font-size: 12px;
                    }
                }
                @media only screen and (max-width: 580px) {
                    .preorder-offers .preorder-offers--items {
                        width: 140px;
                    }
                    .preorder-offers .preorder-offers--items img {
                        margin-bottom: 4px;
                    }
                }
                @media only screen and (max-width: 375px) {
                    .preorder-offers .preorder-offers--items {
                        width: 90px;
                    }
                    .preorder-offers .preorder-offers--items img {
                        margin-bottom: 4px;
                    }
                }
            `}
            </style>
        </div>
    );
};

export default Microsite;
