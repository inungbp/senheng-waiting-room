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

    return {
        maskDays: days < 10 ? `${days}` : days.toString(),
        maskHours: hours < 10 ? `${hours}` : hours.toString(),
        maskMinutes: minutes < 10 ? `${minutes}` : minutes.toString(),
        maskSeconds: seconds < 10 ? `${seconds}` : seconds.toString(),
    }
};

export default useCountDown;
