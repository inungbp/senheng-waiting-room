import React from 'react';
import ViewCountDownStart from './ViewCountDownStartIphone';
import ViewCountDownEnd from './ViewCountDownEndIphone';
import ItemIphone from './itemIphone';
import ModalOffers from './modalOffers';

const PreOrderView = (props) => {
    const { buttonDisabled, handlePhoneSelection, setStartPreOrder, startPreOrder  } = props;

    return (
        <div className="container" id="pre-order">
            <div className="row banner-content">
                <div className="col-lg-8 banner-content__image">
                    <img src="/assets/img/iphone16.webp" />
                </div>
                <div className="col-lg-4 banner-content__desc text-center">
                    <div>
                        <h2 className='font-weight-bold'>Iphone 16</h2>
                        <h2 className='font-weight-bold'>Name Mock</h2>
                        <p>Pre-order and enjoy up to 3 years warranty* Pay 0% interest up to 60 months</p>
                        <a href="#choose-iphone">SHOP NOW</a>
                    </div>
                </div>
            </div>
            <div className="preorder-offers__wrapper">
                <div className="preorder-offers__title">
                    <h2>Our Offers. Only at Senheng</h2>
                    <ModalOffers />
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
            <div className="countdown">
                {
                    !startPreOrder ? (
                        <ViewCountDownStart startPreOrder={startPreOrder} setStartPreOrder={setStartPreOrder}/>
                    ) : (
                        <ViewCountDownEnd />
                    )
                }
                
            </div>
            <div className="choose-iphone" id="choose-iphone">
                <h2 className="font-weight-bold mb-5 heading-title">Choose your iPhone.</h2>
                <div className="choose-iphone__wrapper">
                    <ItemIphone
                        imageUrl="https://magento.senheng.com.my/media/wysiwyg/m2_images/m2_cat/brand-banner/apple/iphone15-pro/header_iphone_15_pro_max_tigry_large_2x.png"
                        handlePhoneSelection={handlePhoneSelection}
                        buttonDisabled={buttonDisabled}
                        title="iPhone 16 Pro"
                        price="from RM5499"
                        memory="128GB | 256GB | 512GB | 1TB"
                        color={[
                            "m-1 ccircle pro-swatch-natural-titanium",
                            "m-1 ccircle pro-swatch-blue-titanium",
                            "m-1 ccircle pro-swatch-white-titanium",
                            "m-1 ccircle pro-swatch-black-titanium"
                        ]}
                        urlIphone="apple-iphone-16-pro"
                    />
                    <ItemIphone
                        imageUrl="https://magento.senheng.com.my/media/wysiwyg/m2_images/m2_cat/brand-banner/apple/iphone15-pro/header_iphone_15_pro_max_tigry_large_2x.png"
                        handlePhoneSelection={handlePhoneSelection}
                        buttonDisabled={buttonDisabled}
                        title="iPhone 16 Pro Max"
                        price="from RM6499"
                        memory="256GB | 512GB | 1TB"
                        color={[
                            "m-1 ccircle pro-swatch-natural-titanium",
                            "m-1 ccircle pro-swatch-blue-titanium",
                            "m-1 ccircle pro-swatch-white-titanium",
                            "m-1 ccircle pro-swatch-black-titanium"
                        ]}
                        urlIphone="apple-iphone-16-pro-max"
                    />
                    <ItemIphone
                        imageUrl="https://magento.senheng.com.my/media/wysiwyg/m2_images/m2_cat/brand-banner/apple/iphone15-pro/header_iphone_15_pro_max_tigry_large_2x.png"
                        handlePhoneSelection={handlePhoneSelection}
                        buttonDisabled={buttonDisabled}
                        title="iPhone 16"
                        price="from RM4399"
                        memory="128GB | 256GB | 512GB"
                        color={[
                            "m-1 ccircle regular-swatch-pink",
                            "m-1 ccircle regular-swatch-yellow",
                            "m-1 ccircle regular-swatch-green",
                            "m-1 ccircle regular-swatch-blue",
                            "m-1 ccircle regular-swatch-black"
                        ]}
                        urlIphone="apple-iphone-16"
                    />
                    <ItemIphone
                        imageUrl="https://magento.senheng.com.my/media/wysiwyg/m2_images/m2_cat/brand-banner/apple/iphone15-pro/header_iphone_15_pro_max_tigry_large_2x.png"
                        handlePhoneSelection={handlePhoneSelection}
                        buttonDisabled={buttonDisabled}
                        title="iPhone 16 Plus"
                        price="from RM4899"
                        memory="128GB | 256GB | 512GB"
                        color={[
                            "m-1 ccircle regular-swatch-pink",
                            "m-1 ccircle regular-swatch-yellow",
                            "m-1 ccircle regular-swatch-green",
                            "m-1 ccircle regular-swatch-blue",
                            "m-1 ccircle regular-swatch-black"
                        ]}
                        urlIphone="apple-iphone-16-plus"
                    />
                </div>
            </div>
            <div className="compare-models">
                <div className="row banner-content">
                    <div className="col-lg-4 banner-content__desc">
                        <div>
                            <h2 className='font-weight-bold'>Compare Models</h2>
                            <p>Explore the differences between iPhone models to find the one that suits your needs</p>
                            <a href="https://senheng.com.my" target="_blank">COMPARE iPHONE {">"}</a>
                        </div>
                    </div>
                    <div className="col-lg-8 banner-content__image">
                        <img src="/assets/img/iphone16.webp" />
                    </div>
                </div>
            </div>

            <div className="partnership">
                <div className="partnership-item">
                    <h2>Bank & Partnership Slider</h2>
                </div>
                <div className="partnership-item">
                    <h2>Trade-In get SCoin How to</h2>
                </div>
                <div className="partnership-item">
                    <h2>EPP</h2>
                </div>
                <div className="partnership-item">
                    <h2>Offline S-Coin Redemption</h2>
                </div>
            </div>
            
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
