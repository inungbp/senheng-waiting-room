import React from 'react';
import ViewCountDownStart from './ViewCountDownStartIphone';
import ViewCountDownEnd from './ViewCountDownEndIphone';
import ItemIphone from './itemIphone';
import ModalOffers from './modalOffers';
import { storeCode, urlIphone16 } from '@config';
import Outlet from './Outlet';

const PreOrderView = (props) => {
    const { buttonDisabled, handlePhoneSelection, setStartPreOrder, startPreOrder  } = props;

    return (
        <div className="container" id="pre-order">
            <div className="main-logo">
                <a href={`https://${storeCode === "senheng_malay_en_US" ? "senheng" : "senq"}.com.my`} target="_blank">
                    <img src={storeCode === "senheng_malay_en_US" ? "/assets/img/senheng_logo.webp" : "/assets/img/senq_logo.webp"} />
                </a>
            </div>
            <div className="row banner-content">
                <div className="col-lg-8 banner-content__image">
                    <img src="/assets/img/banner-iphone16.webp" />
                </div>
                <div className="col-lg-4 banner-content__desc text-center">
                    <div>
                        <h5>Pre-order starts on</h5>
                        <h3>13 September 2024,<br />8:00 PM.</h3>
                        <p>Available from 20 Sept 2024 onwards</p>
                        {startPreOrder && (
                            <a href="#choose-iphone">PRE-ORDER NOW</a>
                        )}
                    </div>
                </div>
            </div>
            <div className="preorder-offers__wrapper">
                <div className="preorder-offers__title">
                    <h2>Our Offers. Only at {storeCode === "senheng_malay_en_US" ? "Senheng" : "senQ"}</h2>
                    <ModalOffers />
                </div>
                <div className="preorder-offers custom-scrollbar">
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
            <div className="countdown">
                {
                    !startPreOrder ? (
                        <ViewCountDownStart startPreOrder={startPreOrder} setStartPreOrder={setStartPreOrder}/>
                    ) : (
                        <ViewCountDownEnd />
                    )
                }
                
            </div>
            {
                startPreOrder && (
                    <>
                        <div className="choose-iphone" id="choose-iphone">
                            <h2 className="font-weight-bold mb-5 heading-title">Choose your iPhone.</h2>
                            <div className="choose-iphone__wrapper custom-scrollbar">
                                <ItemIphone
                                    imageUrl="/assets/img/iPhone_16_Pro_Max.webp"
                                    handlePhoneSelection={handlePhoneSelection}
                                    buttonDisabled={buttonDisabled}
                                    title="iPhone 16 Pro Max"
                                    price="From RM5,999"
                                    memory="256GB | 512GB | 1TB"
                                    color={[
                                        "m-1 ccircle desert-titanium",
                                        "m-1 ccircle natural-titanium",
                                        "m-1 ccircle white-titanium",
                                        "m-1 ccircle black-titanium"
                                    ]}
                                    urlIphone={`${urlIphone16}-promax`}
                                />
                                <ItemIphone
                                    imageUrl="/assets/img/iPhone_16_Pro.webp"
                                    handlePhoneSelection={handlePhoneSelection}
                                    buttonDisabled={buttonDisabled}
                                    title="iPhone 16 Pro"
                                    price="From RM4,999"
                                    memory="128GB | 256GB | 512GB | 1TB"
                                    color={[
                                        "m-1 ccircle desert-titanium",
                                        "m-1 ccircle natural-titanium",
                                        "m-1 ccircle white-titanium",
                                        "m-1 ccircle black-titanium"
                                    ]}
                                    urlIphone={`${urlIphone16}-pro`}
                                />
                                <ItemIphone
                                    imageUrl="/assets/img/iPhone_16_Plus.webp"
                                    handlePhoneSelection={handlePhoneSelection}
                                    buttonDisabled={buttonDisabled}
                                    title="iPhone 16 Plus"
                                    price="From RM4,499"
                                    memory="128GB | 256GB | 512GB"
                                    color={[
                                        "m-1 ccircle ultramarine",
                                        "m-1 ccircle teal",
                                        "m-1 ccircle pink",
                                        "m-1 ccircle white",
                                        "m-1 ccircle black"
                                    ]}
                                    urlIphone={`${urlIphone16}-plus`}
                                />
                                <ItemIphone
                                    imageUrl="/assets/img/iPhone_16.webp"
                                    handlePhoneSelection={handlePhoneSelection}
                                    buttonDisabled={buttonDisabled}
                                    title="iPhone 16"
                                    price="From RM3,999"
                                    memory="128GB | 256GB | 512GB"
                                    color={[
                                        "m-1 ccircle ultramarine",
                                        "m-1 ccircle teal",
                                        "m-1 ccircle pink",
                                        "m-1 ccircle white",
                                        "m-1 ccircle black"
                                    ]}
                                    urlIphone={`${urlIphone16}`}
                                />
                            </div>
                        </div>
                        <div className="compare-models">
                            <div className="row banner-content">
                                <div className="col-lg-4 banner-content__desc">
                                    <div>
                                        <h2 className='font-weight-bold'>Compare Models</h2>
                                        <p>Explore the differences between iPhone models to find the one that suits your needs</p>
                                        <a href="https://www.senheng.com.my/iphone-comparison-learn-more" target="_blank">COMPARE iPHONE {">"}</a>
                                    </div>
                                </div>
                                <div className="col-lg-8 banner-content__image">
                                    <img src="/assets/img/compare_iphone_models.webp" />
                                </div>
                            </div>
                        </div>
                    </>
                )
            }

            <div className="partnership">
                <h2 className="mb-5">More Offers</h2>
                <div className="partnership-wrapper">
                    <div className="partnership-item">
                        <img src="/assets/img/grab.webp" alt="grab" />
                    </div>
                    <div className="partnership-item">
                        <img src="/assets/img/atome.webp" alt="grab" />
                    </div>
                    <div className="partnership-item">
                        <img src="/assets/img/spay.webp" alt="grab" />
                    </div>
                    <div className="partnership-item">
                        <img src="/assets/img/maybank.webp" alt="grab" />
                    </div>
                    <div className="partnership-item">
                        <img src="/assets/img/uob.webp" alt="grab" />
                    </div>
                    <div className="partnership-item">
                        <img src="/assets/img/affin.webp" alt="grab" />
                    </div>
                    <div className="partnership-item">
                        <img src="/assets/img/aeon.webp" alt="grab" />
                    </div>
                </div>
            </div>
            <Outlet />
            <style jsx>
                {`
                    @media only screen and (max-width: 280px) {
                        .col-fold-12 {
                            -ms-flex: 0 0 100%;
                            flex: 0 0 100%;
                            max-width: 100%;
                        }
                        .img-fluid {
                            height: 200px !important;
                            width: auto !important;
                        }
                        .card-body {
                            padding: 1.25rem 0.25rem;
                        }
                    }
                    @media only screen and (min-width: 281px) and (max-width: 716px) {
                        .card-body {
                            padding: 1rem 0;
                        }
                        .px-0-mobile {
                            padding-left: 0px !important;
                            padding-right: 0px !important;
                        }
                        .card-body {
                            padding: 1.25rem 0rem;
                        }
                    }
                    @media only screen and (min-width: 281px) and (max-width: 400px) {
                        .spacing-mobile {
                            height: 1rem;
                            content: '';
                        }
                    }
                    @media only screen and (min-width: 281px) and (max-width: 411px) {
                        .img-fluid {
                            height: 96px !important;
                            width: auto !important;
                        }
                    }
                    @media only screen and (min-width: 412px) and (max-width: 480px) {
                        .img-fluid {
                            height: 110px !important;
                            width: auto !important;
                        }
                    }
                    @media only screen and (min-width: 481px) and (max-width: 539px) {
                        .img-fluid {
                            height: 120px !important;
                            width: auto !important;
                        }
                    }
                    @media only screen and (min-width: 540px) and (max-width: 716px) {
                        .img-fluid {
                            height: 200px !important;
                            width: auto !important;
                        }
                    }
                    @media only screen and (min-width: 717px) and (max-width: 719px) {
                        .img-fluid {
                            height: 200px !important;
                            width: auto !important;
                        }
                        .spacing-mobile-2 {
                            height: 1.5rem;
                            content: '';
                        }
                    }
                    @media only screen and (min-width: 720px) and (max-width: 1023px) {
                        .img-fluid {
                            height: 300px !important;
                            width: auto !important;
                        }
                    }
                    @media only screen and (min-width: 1024px) {
                        .img-fluid {
                            height: 200px !important;
                            width: auto !important;
                        }
                    }
                    .img-center {
                        margin-bottom: 20px;
                        width: 100%;
                        max-width: 600px;
                        height: auto;
                    }
                    .error-description {
                        height: fit-content;
                        text-align: center;
                        margin: 0 auto;
                        color: #000000;
                    }
                    .prod-desc {
                        font-size: 0.8rem;
                    }
                    .card-title {
                        color: black;
                        margin-bottom: 8px !important;
                    }
                    .heading-title {
                        color: black;
                    }
                `}
            </style>
        </div>
    );
};

export default PreOrderView;
