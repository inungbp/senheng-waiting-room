import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const ModalOffers = () => {
    const [show, setShow] = React.useState(false);
    const [contentOffers, setContentOffers] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button className="modal-offers__title" onClick={handleShow}>
                Learn More {">"}
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                className="modal-offers"
                size="lg"
            >
                <Modal.Header>
                    <h3>Pre-Order offers.</h3>
                    <h4 onClick={handleClose}>X</h4>
                </Modal.Header>
                <Modal.Body>
                <Tabs
                    defaultActiveKey="content1"
                    id="uncontrolled-tab-example"
                    className="mb-3"
                >
                    <Tab eventKey="content1" title="Enjoy up to 3 years warranty">
                        Up to 3 Year warranty* for valid and paid PlusOne members
                    </Tab>
                    <Tab eventKey="content2" title="0% EPP 60 months in store exclusive">
                        <img src="https://magento.senheng.com.my/media/pdf/shsq/Aug-2024-offline-payment-plan.jpg" alt="epp-exclusive" />
                    </Tab>
                    <Tab eventKey="content3" title="0% EPP up to 60 months for online">
                        <img src="https://magento.senheng.com.my/media/pdf/shsq/Aug-2024-online-payment-plan.jpg" alt="epp-online" />
                    </Tab>
                    <Tab eventKey="content4" title="Bank Point Redemption">
                        <ol>
                            <li>Ambank AmBonus Points RM1 = 600pts*</li>
                            <li>CIMB Bank Bonus Points = 500pts*</li>
                            <li>Hong Leong Rewards Points RM1 = 500pts*</li>
                            <li>Maybank TreatsPoints RM1 = 500pts*</li>
                            <li>RHB Reward Points RM1 = 500pts*</li>
                        </ol>
                    </Tab>
                    <Tab eventKey="content5" title="Trade Up and Save More">
                        <p>Trade-Up</p>    
                        <p>get additional rebate up to RM1,100* upon purchase.</p>
                        <div className="learn-more">
                            <button>
                                <a href="https://www.senheng.com.my/trade-in-rebate" targer="_blank">Learn More</a>
                            </button>
                        </div>
                    </Tab>
                    <Tab eventKey="content6" title="Free Shipping*">
                        Free shipping is only valid for Google Pixel campaign and from 14th August 2024 - 13 September 2024 *
                    </Tab>
                </Tabs>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )

}

export default ModalOffers;