import useCountDown from '../../../../../helper/countdown';

const ViewCountDownEnd = () => {
    const startDate = new Date();
    const endDate = new Date('September 19, 2024 23:59:59');
    const endPreoder = (endDate - startDate) / 1000;
    const { maskDays, maskHours, maskMinutes, maskSeconds } = useCountDown({
        time: Math.trunc(endPreoder),
        validation: true,
        onTimesUp: () => { console.log(); },
    })
    return (
        <>
            <h2>Pre-Order end in</h2>
            <div className="countdown-timer">
                <div>
                    <p>{maskDays}</p>
                    <p className="text">Days</p>
                </div>
                <div>
                    <p>{maskHours}</p>
                    <p className="text">Hours</p>
                </div>
                <div>
                    <p>{maskMinutes}</p>
                    <p className="text">Minutes</p>
                </div>
                <div>
                    <p>{maskSeconds}</p>
                    <p className="text">Seconds</p>
                </div>
            </div>
        </>
    );
};

export default ViewCountDownEnd;
