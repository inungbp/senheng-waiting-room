import useCountDown from '../../../../../helper/countdown';

const ViewCountDownStart = (props) => {
    const { setStartPreOrder } = props;
    const startDate = new Date();
    const endDate = new Date('September 13, 2024 20:00:00');
    const releaseDate = (endDate - startDate) / 1000;
    const { maskDays, maskHours, maskMinutes, maskSeconds } = useCountDown({
        time: Math.trunc(releaseDate),
        validation: true,
        onTimesUp: () => { setStartPreOrder(true); },
    })

    return (
        <>
            <h2>Pre-Order start in</h2>
            <div className="countdown-timer">
                <div>
                    <p>{maskDays}</p>
                    <p>Days</p>
                </div>
                <div>
                    <p>{maskHours}</p>
                    <p>Hours</p>
                </div>
                <div>
                    <p>{maskMinutes}</p>
                    <p>Minutes</p>
                </div>
                <div>
                    <p>{maskSeconds}</p>
                    <p>Seconds</p>
                </div>
            </div>
        </>
    );
};

export default ViewCountDownStart;
