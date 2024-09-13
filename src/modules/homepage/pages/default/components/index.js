/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Cookies from 'js-cookie';
import {
    intervalCheckStatus,
    hostPreorderIphone,
    apiCheckQueue,
    tokenApi,
    storeCode,
    urlIphone16,
} from '@config';
import ModalOffers from './PreOrderIphone/modalOffers';
import ViewCountDownEnd from './PreOrderIphone/ViewCountDownEndIphone';
import ViewCountDownStart from './PreOrderIphone/ViewCountDownStartIphone';
import ItemIphone from './PreOrderIphone/itemIphone';
import Outlet from './PreOrderIphone/Outlet';

let globalInterval = null;
const Microsite = (props) => {
    const {
        router,
        startPreOrder,
        setStartPreOrder,
        handlePhoneSelection,
        buttonDisabled
    } = props;

    const checkQueue = async () => {
        const response = await fetch(`${apiCheckQueue}?key=${Cookies.get('preOrderUid')}&series=${Cookies.get('seriesIphone16')}`, {
            headers: {
                Authorization: `Bearer ${tokenApi}`,
                Accept: 'application/json',
            },
        });
        const dataQueue = await response.json();
        if (dataQueue) {
            if (dataQueue && dataQueue.is_pdp) {
                // redirect pdp
                router.push(`${hostPreorderIphone}/${Cookies.get('seriesIphone16')}.html?key=${Cookies.get('preOrderUid')}&series=${Cookies.get('seriesIphone16')}`);
                Cookies.remove('line');
                Cookies.remove('time');
            } else {
                // update line & estimation
                Cookies.set('line', dataQueue?.position);
                Cookies.set('time', dataQueue?.estimation);
            }
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
            <div className="main-logo">
                <a href={`https://${storeCode === "senheng_malay_en_US" ? "senheng" : "senq"}.com.my`} target="_blank">
                    <img src={storeCode === "senheng_malay_en_US" ? "/assets/img/senheng_logo.webp" : "/assets/img/senq_logo.webp"} />
                </a>
            </div>
            <div className="wrapper-countdown">
                <div className="wrapper-countdown__content">
                    <div className="wrapper-countdown__content--desc">
                        <h2>You are now in line</h2>
                        <p>Sit tight! Your turn is almost here. When it comes, you’ll have 20 minutes to browse & purchase. Please do not close or refresh the page.</p>
                        <div>
                            <p>Your number in line: {Cookies.get('line')}</p>
                            <p>Your estimated wait time: {Cookies.get('time')} minutes</p>
                        </div>
                    </div>
                    <div className="wrapper-countdown__content--img">
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/7iFGFMX3PVs?si=2X-VkaZoWVLAzDfx"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        />
                    </div>
                </div>
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
                        <a href="#choose-iphone">PRE-ORDER NOW</a>
                    </div>
                </div>
            </div>
            <div className="preorder-offers__wrapper">
                <div className="preorder-offers__title">
                    <h2>Our Offers. Only at Senheng</h2>
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
        </div>
    );
};

export default Microsite;
