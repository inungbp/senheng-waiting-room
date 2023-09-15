/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

const Microsite = (props) => {
    const { data, refetchDataCustomer = () => {}, router } = props;

    if (data && data.getWaitingStatus) {
        setInterval(() => {
            if (data.getWaitingStatus.allow_to_pdp) {
                clearInterval();
                router.push(data.getWaitingStatus.url_destination);
            } else {
                refetchDataCustomer();
            }
        }, 60000);
    }

    return (
        <div className="error-container">
            <img className="img-center" src="/assets/img/iphone15.jpeg" />
            <div className="error-description">
                <h2>Be patient, you are next.</h2>
                <h4>Please expect waiting time for less than 10 minutes.</h4>
                <h4>Loading...</h4>
                <p>(Please do not refresh this page while waiting.)</p>
                <button type="submit" onClick={() => submitMutationWaitingStatus()}>
                    GET WAITING STATUS
                </button>
            </div>
            <style jsx>
                {`
                .error-container {
                    min-height: 100vh;
                    width: 100vw;
                    display: flex;
                    justify-content: center;
                    background: #FFFFFF;
                    align-items: center;
                    padding: 30px;
                    flex-direction: column;
                    position: relative;
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
                h2 {
                    margin: 20px 0;
                    font-size: 40px;
                }
                h4 {
                    font-size: 20px;
                    margin-top: 0;
                    margin-bottom: 30px;
                }
                p {
                    margin: 10px  0;
                    color: #7F7F7F;
                    font-size: 20px;
                    font-weight: bold;
                }
                @media only screen and (max-width: 600px) {
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
            `}
            </style>
        </div>
    );
};

export default Microsite;
