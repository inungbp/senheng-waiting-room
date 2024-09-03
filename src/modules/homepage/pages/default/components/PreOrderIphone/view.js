import React from 'react';
import useCountDown from '../../../../../helper/countdown';

const PreOrderView = (props) => {
    const { buttonDisabled, handlePhoneSelection, messageError } = props;

    const startDate = new Date();
    const endDate = new Date('September 12, 2024 01:00:00');
    const releaseDate = (endDate - startDate) / 1000;

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
            <div className="countdown">
                <h2>Pre-Order ends in</h2>
                {
                    useCountDown({
                        time: Math.trunc(releaseDate),
                        validation: true,
                        onTimesUp: () => { console.log('waktu habis') },
                    })
                }
            </div>
            <div className="choose-iphone__wrapper">
                <h2 className="font-weight-bold ml-5 mb-5 heading-title">Choose your iPhone.</h2>
                <div className="row justify-content-center p-2">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12 col-fold-12">
                        <div className="card mb-3 shadow rounded-lg py-4 grow card-wrapper">
                            <div className="row g-0 mx-4 card-parent">
                                <div className="col-lg-5 col-md-12 col-sm-12 col-12 my-auto">
                                    <img
                                        src="https://magento.senheng.com.my/media/wysiwyg/m2_images/m2_cat/brand-banner/apple/iphone15-pro/header_iphone_15_pro_tigry_large_2x.png"
                                        className="img-fluid rounded-lg-start"
                                        alt="..."
                                    />
                                </div>
                                <div className="col-lg-7 col-md-12 col-sm-12 col-12 my-auto px-0-mobile">
                                    <div className="card-body">
                                        <h5 className="card-title font-weight-bold mb-4">iPhone 16 Pro</h5>
                                        <div className="spacing-mobile" />
                                        <p className="card-text prod-desc mb-0">from RM5499</p>
                                        <p className="card-text prod-desc mb-0">128GB | 256GB | 512GB | 1TB</p>
                                        <div className="d-flex mb-4 justfiy-content-center color-picker">
                                            <div className="m-1 ccircle pro-swatch-natural-titanium" />
                                            <div className="m-1 ccircle pro-swatch-blue-titanium" />
                                            <div className="m-1 ccircle pro-swatch-white-titanium" />
                                            <div className="m-1 ccircle pro-swatch-black-titanium" />
                                        </div>
                                        <button
                                            disabled={buttonDisabled}
                                            className={buttonDisabled ? 'dialog-button-disabled' : 'dialog-button'}
                                            onClick={() => handlePhoneSelection('apple-iphone-16-pro')}
                                        >
                                            {buttonDisabled ? 'COMING SOON' : 'PRE-ORDER NOW'}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12 col-fold-12">
                        <div className="card mb-3 shadow rounded-lg py-4 grow card-wrapper">
                            <div className="row g-0 mx-4 card-parent">
                                <div className="col-lg-5 col-md-12 col-sm-12 col-12 my-auto">
                                    <img
                                        src="https://magento.senheng.com.my/media/wysiwyg/m2_images/m2_cat/brand-banner/apple/iphone15-pro/header_iphone_15_pro_max_tigry_large_2x.png"
                                        className="img-fluid rounded-lg-start"
                                        alt="..."
                                    />
                                </div>
                                <div className="col-lg-7 col-md-12 col-sm-12 col-12 my-auto px-0-mobile">
                                    <div className="card-body">
                                        <h5 className="card-title font-weight-bold mb-4">iPhone 16 Pro Max</h5>
                                        <p className="card-text prod-desc mb-0">from RM6499</p>
                                        <p className="card-text prod-desc mb-0">256GB | 512GB | 1TB</p>
                                        <div className="d-flex mb-4 justfiy-content-center color-picker">
                                            <div className="m-1 ccircle pro-swatch-natural-titanium" />
                                            <div className="m-1 ccircle pro-swatch-blue-titanium" />
                                            <div className="m-1 ccircle pro-swatch-white-titanium" />
                                            <div className="m-1 ccircle pro-swatch-black-titanium" />
                                        </div>
                                        <button
                                            disabled={buttonDisabled}
                                            className={buttonDisabled ? 'dialog-button-disabled' : 'dialog-button'}
                                            onClick={() => handlePhoneSelection('apple-iphone-16-pro-max')}
                                        >
                                            {buttonDisabled ? 'COMING SOON' : 'PRE-ORDER NOW'}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12 col-fold-12">
                        <div className="card mb-3 shadow rounded-lg py-4 grow card-wrapper">
                            <div className="row g-0 mx-4 card-parent">
                                <div className="col-lg-5 col-md-12 col-sm-12 col-12 my-auto">
                                    <img
                                        src="https://magento.senheng.com.my/media/wysiwyg/m2_images/m2_cat/brand-banner/apple/iphone15/header_iphone_15_pink_large_2x.png"
                                        className="img-fluid rounded-lg-start"
                                        alt="..."
                                    />
                                </div>
                                <div className="col-lg-7 col-md-12 col-sm-12 col-12 my-auto px-0-mobile">
                                    <div className="card-body">
                                        <h5 className="card-title font-weight-bold mb-4">iPhone 16</h5>
                                        <div className="spacing-mobile-2" />
                                        <p className="card-text prod-desc mb-0">from RM4399</p>
                                        <p className="card-text prod-desc mb-0">128GB | 256GB | 512GB</p>
                                        <div className="d-flex mb-4 justfiy-content-center color-picker">
                                            <div className="m-1 ccircle regular-swatch-pink" />
                                            <div className="m-1 ccircle regular-swatch-yellow" />
                                            <div className="m-1 ccircle regular-swatch-green" />
                                            <div className="m-1 ccircle regular-swatch-blue" />
                                            <div className="m-1 ccircle regular-swatch-black" />
                                        </div>
                                        <button
                                            disabled={buttonDisabled}
                                            className={buttonDisabled ? 'dialog-button-disabled' : 'dialog-button'}
                                            onClick={() => handlePhoneSelection('apple-iphone-16')}
                                        >
                                            {buttonDisabled ? 'COMING SOON' : 'PRE-ORDER NOW'}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12 col-fold-12">
                        <div className="card mb-3 shadow rounded-lg py-4 grow card-wrapper">
                            <div className="row g-0 mx-4 card-parent">
                                <div className="col-lg-5 col-md-12 col-sm-12 col-12 my-auto">
                                    <img
                                        src="https://magento.senheng.com.my/media/wysiwyg/m2_images/m2_cat/brand-banner/apple/iphone15/header_iphone_15_plus_blue_large_2x.png"
                                        className="img-fluid rounded-lg-start"
                                        alt="..."
                                    />
                                </div>
                                <div className="col-lg-7 col-md-12 col-sm-12 col-12 my-auto px-0-mobile">
                                    <div className="card-body">
                                        <h5 className="card-title font-weight-bold mb-4">iPhone 16 Plus</h5>
                                        <p className="card-text prod-desc mb-0">from RM4899</p>
                                        <p className="card-text prod-desc mb-0">128GB | 256GB | 512GB</p>
                                        <div className="d-flex mb-4 justfiy-content-center color-picker">
                                            <div className="m-1 ccircle regular-swatch-pink" />
                                            <div className="m-1 ccircle regular-swatch-yellow" />
                                            <div className="m-1 ccircle regular-swatch-green" />
                                            <div className="m-1 ccircle regular-swatch-blue" />
                                            <div className="m-1 ccircle regular-swatch-black" />
                                        </div>
                                        <button
                                            disabled={buttonDisabled}
                                            className={buttonDisabled ? 'dialog-button-disabled' : 'dialog-button'}
                                            onClick={() => handlePhoneSelection('apple-iphone-16-plus')}
                                        >
                                            {buttonDisabled ? 'COMING SOON' : 'PRE-ORDER NOW'}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p>{messageError}</p>
                    </div>
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
                    .pro-swatch-natural-titanium {
                        background-color: #837f7d;
                    }
                    .pro-swatch-blue-titanium {
                        background-color: #2f4452;
                    }
                    .pro-swatch-white-titanium {
                        background-color: #dddddd;
                    }
                    .pro-swatch-black-titanium {
                        background-color: #1b1b1b;
                    }
                    .regular-swatch-pink {
                        background-color: #e3c8ca;
                    }
                    .regular-swatch-yellow {
                        background-color: #e6e0c1;
                    }
                    .regular-swatch-green {
                        background-color: #cad4c5;
                    }
                    .regular-swatch-blue {
                        background-color: #d4dde0ff;
                    }
                    .regular-swatch-black {
                        background-color: #35393b;
                    }
                    .prod-desc {
                        font-size: 0.8rem;
                    }
                    .ccircle {
                        width: 15px;
                        height: 15px;
                        border-radius: 100%;
                        border: none;
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
