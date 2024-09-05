import useCountDown from '../../../../../helper/countdown';

const ViewCountDownEnd = () => {
    const { maskDays, maskHours, maskMinutes, maskSeconds } = useCountDown({
        time: 3600,
        validation: true,
        onTimesUp: () => { console.log(); },
    })
    return (
        <>
            <h2>Pre-Order end in</h2>
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

export default ViewCountDownEnd;
