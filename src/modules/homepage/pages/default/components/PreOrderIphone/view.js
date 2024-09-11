import React from 'react';
import ViewCountDownStart from './ViewCountDownStartIphone';
import ViewCountDownEnd from './ViewCountDownEndIphone';
import ItemIphone from './itemIphone';
import ModalOffers from './modalOffers';
import Accordion from 'react-bootstrap/Accordion';
import { storeCode } from '@config';

const PreOrderView = (props) => {
    const { buttonDisabled, handlePhoneSelection, setStartPreOrder, startPreOrder  } = props;

    return (
        <div className="container" id="pre-order">
            <div className="main-logo">
                <img src={storeCode === "senheng_malay_en_US" ? "/assets/img/senheng_logo.webp" : "/assets/img/senq_logo.webp"} />
            </div>
            <div className="row banner-content">
                <div className="col-lg-8 banner-content__image">
                    <img src="/assets/img/banner-iphone16.webp" />
                </div>
                <div className="col-lg-4 banner-content__desc text-center">
                    <div>
                        <h5>Enjoy up to 3 years warranty & Free Shipping.</h5>
                        <h5>Pay 0% interest up to 60 months</h5>
                        <p>Available from 20 Sept 2024 onwards</p>
                        {startPreOrder && (
                            <a href="#choose-iphone">PRE-ORDER NOW</a>
                        )}
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
                                    price="from RM 5999"
                                    memory="256GB | 512GB | 1TB"
                                    color={[
                                        "m-1 ccircle desert-titanium",
                                        "m-1 ccircle natural-titanium",
                                        "m-1 ccircle white-titanium",
                                        "m-1 ccircle black-titanium"
                                    ]}
                                    urlIphone="apple-iphone-16-pro-max"
                                />
                                <ItemIphone
                                    imageUrl="/assets/img/iPhone_16_Pro.webp"
                                    handlePhoneSelection={handlePhoneSelection}
                                    buttonDisabled={buttonDisabled}
                                    title="iPhone 16 Pro"
                                    price="from RM 4999"
                                    memory="128GB | 256GB | 512GB | 1TB"
                                    color={[
                                        "m-1 ccircle desert-titanium",
                                        "m-1 ccircle natural-titanium",
                                        "m-1 ccircle white-titanium",
                                        "m-1 ccircle black-titanium"
                                    ]}
                                    urlIphone="apple-iphone-16-pro"
                                />
                                <ItemIphone
                                    imageUrl="/assets/img/iPhone_16_Plus.webp"
                                    handlePhoneSelection={handlePhoneSelection}
                                    buttonDisabled={buttonDisabled}
                                    title="iPhone 16 Plus"
                                    price="from RM 4499"
                                    memory="128GB | 256GB | 512GB"
                                    color={[
                                        "m-1 ccircle ultramarine",
                                        "m-1 ccircle teal",
                                        "m-1 ccircle pink",
                                        "m-1 ccircle white",
                                        "m-1 ccircle black"
                                    ]}
                                    urlIphone="apple-iphone-16-plus"
                                />
                                <ItemIphone
                                    imageUrl="/assets/img/iPhone_16.webp"
                                    handlePhoneSelection={handlePhoneSelection}
                                    buttonDisabled={buttonDisabled}
                                    title="iPhone 16"
                                    price="from RM 3999"
                                    memory="128GB | 256GB | 512GB"
                                    color={[
                                        "m-1 ccircle ultramarine",
                                        "m-1 ccircle teal",
                                        "m-1 ccircle pink",
                                        "m-1 ccircle white",
                                        "m-1 ccircle black"
                                    ]}
                                    urlIphone="apple-iphone-16"
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
                <h2 class="mb-5">More Offers</h2>
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

            <div className="outlet">
                <h2>Visit us at the nearest outlet.</h2>
                <div className="outlet-title">
                    <button>
                        <a href="https://www.senheng.com.my/find-nearest-store" target="_blank">Locate us | Senheng</a>
                    </button>
                    <button>
                        <a href="https://www.senq.com.my/find-nearest-store" target="_blank">Locate us | senQ</a>
                    </button>
                </div>
                <div className="outlet-content">
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>T&C</Accordion.Header>
                            <Accordion.Body>
                                <div class="mb-5">
                                    <h5 class="fw-bold mt-4">TERMS AND CONDITION</h5>
                                    <p>The Apple iPhone Pre-order Campaign ("Campaign") is organised by Senheng Electric (KL) Sdn. Bhd ("Senheng"). The terms and conditions and the Privacy Policy posted on this site will be construed as the terms and conditions ("Terms and Conditions") of this Campaign on which Senheng offers you ("Customer") access to and use of this site for the purposes of this Campaign.</p>

                                    <h5 class="fw-bold mt-4">Duration:</h5>
                                    <p>The Campaign will run from 13 September 2024 20:00 to 19 September 2024 23:59. Senheng reserves the right to shorten, extend or cancel the Campaign Period without prior notice.</p>

                                    <h5 class="fw-bold mt-4">Eligibility:</h5>
                                    <p>The Promotion is open to all Malaysian Citizens of 18 years old and above with Malaysia Identity Card; except Senheng’s employees (and their immediate families), its related agencies, retailers and dealers.</p>

                                    <h5 class="fw-bold mt-4">Payment:</h5>
                                    <p>Customer acknowledges, understands and agrees that all transactions are between Customer and iPay88. Customer is not allowed to cancel the order, change the selected device color or model and the selected store once Customer has successfully completed and confirmed the transaction via iPay88.</p>

                                    <h5 class="fw-bold mt-4">Privacy:</h5>
                                    <p>By providing Customer's personal data, Customer is indicating that he/she has read, understood and agreed that his/her personal data will be recorded, stored or otherwise processed in accordance to Senheng's Privacy Policy available at https://www.senheng.com.my/privacy-notice Senheng Electric (KL) Sdn Bhd (Senheng and/or senQ) reserves the right to change or revise or any part thereof or any part of the applicable terms and conditions from time to time, with or without any prior notice.</p>

                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>FAQ</Accordion.Header>
                            <Accordion.Body>
                                <div class="card-body text-left">
                                    <h5 class="fw-bold mt-4">FAQ</h5>

                                    <h5 class="fw-bold">(P1 - EXTRA 2 YEARS WARRANTY)</h5>
                                    <p>How can I enjoy extra 2 years warranty for this pre-order campaign for Apple iPhones?</p>
                                    <ul>
                                        <li>New Member = You need to sign up for our P1 membership (here) and pay a membership fee of RM12. Upon successful sign up, login to your account and start to make the purchase in order to ensure that your first sales entitles for the Extra 2 Years Warranty.</li>
                                        <li>Existing Member = You need to ensure that you login to your account and start to make purchase in order to ensure that your purchase entitles for the Extra 2 Years Warranty.</li>
                                    </ul>
                                
                                    <h5 class="fw-bold mt-4">Warranty:</h5>
                                    <p>What is the warranty offer?</p>
                                    <ul>
                                        <li>Non P1 member = Customer who is non P1 member will only entitle 1-year manufacturer warranty for smartphone in this campaign.</li>
                                        <li>P1 member = Customer who is already an active P1 member will enjoy 1-year manufacturer warranty, and on top, addition 2-years P1 warranty from Senheng (1 year + 2 years) for smartphone in this campaign, which means up to 3 years warranty</li>
                                    </ul>

                                    <p>After purchasing the first sales and receiving my device, how do I activate the warranty?</p>
                                    <ul>
                                        <li>The warranty of the device will start after the order has been invoiced and as of when the device has been activated.</li>
                                    </ul>                                
                                    <p>Can I change the device color during store pick up?</p>
                                    <ul>
                                        <li>Customer is not allowed to change the selected device color or model once the Customer has successfully completed and confirmed the transaction via iPay88.</li>
                                    </ul>
                                    <h5 class="fw-bold mt-4">Payment:</h5>
                                    <p>(0% INTEREST INSTALMENT) Can I pay the balance amount of my purchase via Instalment?</p>
                                    <ul>
                                        <li>Yes, you can pay RM300 deposit through our website and make balance payment at our nationwide showrooms for up to 60 months 0% Interest Instalment payment via all major banks.</li>
                                        <li>Eg. You have paid RM300 via online purchase for purchase, and you will only need to make balance payment at our nationwide showrooms.</li>
                                    </ul>
                                    <p>Can I make my purchase via Buy Now Pay Later (BNPL) payment mode?</p>
                                    <ul>
                                        <li>Yes, you may make purchase via PayLater by Grab, Atome, PAYLATER at both online and retail stores. SPayLater by Shopee and Boost PayFlex only applicable at retail stores.</li>
                                    </ul>

                                    <h5 class="fw-bold mt-4">Others:</h5>
                                    <p>(ACCESSORIES) During store pick-up, can I purchase other related accessories?</p>
                                    <ul>
                                        <li>Yes you can, all you need to do is to speak to our in-store sales personnel or call to Customer Care Centre for any inquries.</li>
                                    </ul>
                                    <p>(VCARE) What is VCARE?</p>
                                    <ul>
                                        <li>
                                            VCare is an optional extended warranty provided by Senheng for our P1 members. The extended warranty cover an additional 2 years on top of all warranty stated above, meaning a total of 5 years warranty coverage for iPhone. However, P1 members are required to purchase VCare in order to extend the warranty during purchase.
                                        </li>
                                    </ul>

                                    <p>(VCARE) During store pick-up, can I purchase V-Care for iPhone?</p>
                                    <ul>
                                        <li>Yes you can, however during your purchase, you need to ensure that you login to your P1 account to make the purchase. Any P1 sign-up during store pick-up, benefits will not be extended to the purchase. Same applies on V-Care purchase.</li>
                                    </ul>
                                    <p>What is Extended Warranty and Protection Plan Voucher?</p>
                                    <ul>
                                        <li>Voucher is redeemable at all Senheng and senQ physical stores only. </li>
                                        <li>Voucher applicable to Extended Warranty plan and also Mobile Protection Plan only. </li>
                                        <li>Voucher is redeemable at all Senheng and senQ physical stores only. </li>
                                        <li>Senheng &amp; senQ reserve the right to amend the stated terms &amp; conditions without prior notice. </li>                                 
                                    </ul>

                                
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
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
