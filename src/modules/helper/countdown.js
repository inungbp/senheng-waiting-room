import {
    useCallback, useEffect, useState, useRef,
} from 'react';

const useCountDown = ({ time = 0, validation, onTimesUp }) => {
    const [remainSeconds, setRemainSeconds] = useState(time || 0);
    const intervalRef = useRef();
    const isMountedRef = useRef(true);

    const runCountdown = useCallback(() => {
        setRemainSeconds((prevremainSeconds) => {
            if (prevremainSeconds <= 1) {
                if (isMountedRef.current && onTimesUp) {
                    onTimesUp();
                }

                clearInterval(intervalRef.current);
                return 0;
            }
            return prevremainSeconds - 1;
        });
    }, []);

    useEffect(() => {
        if (validation) {
            isMountedRef.current = true;
            intervalRef.current = setInterval(runCountdown, 1000);

            return () => {
                isMountedRef.current = false;
                clearInterval(intervalRef.current);
            };
        }
        return null;
    }, [runCountdown, validation]);

    const days = Math.floor(remainSeconds / 86400);
    const hours = Math.floor((remainSeconds - (days * 86400)) / 3600);
    const minutes = Math.floor((remainSeconds - (days * 86400) - (hours * 3600)) / 60);
    const seconds = remainSeconds % 60;

    return (
        <div className="countdown-timer">
            <div>
                <p>{days < 10 ? `0${days}` : days.toString()}</p>
                <p>Days</p>
            </div>
            <div>
                <p>{hours < 10 ? `0${hours}` : hours.toString()}</p>
                <p>Hours</p>
            </div>
            <div>
                <p>{minutes < 10 ? `0${minutes}` : minutes.toString()}</p>
                <p>Minutes</p>
            </div>
            <div>
                <p>{seconds < 10 ? `0${seconds}` : seconds.toString()}</p>
                <p>Seconds</p>
            </div>
        </div>
    );
};

export default useCountDown;
