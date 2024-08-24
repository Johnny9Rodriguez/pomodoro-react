import React, { useEffect, useState } from 'react';
import Clock from './Clock';
import TimerButtons from './TimerButtons';

function Timer() {
    const [timer, setTimer] = useState(null);
    const [time, setTime] = useState(1 * 60);

    useEffect(() => {
        return () => {
            if (timer) clearInterval(timer);
        };
    }, [timer]);

    const startTimer = () => {
        const interval = setInterval(() => {
            setTime((prevTime) => prevTime - 1);
        }, 1000);

        setTimer(interval);
    };

    const pauseTimer = () => {
        if (timer) {
            clearInterval(timer);
            setTimer(null);
        }
    };

    const stopTimer = () => {
        if (timer) {
            clearInterval(timer);
            setTimer(null);
            setTime(1 * 60);
        }
    };

    return (
        <div className='flex flex-col gap-4'>
            <Clock time={time} />
            <TimerButtons startTimer={startTimer} pauseTimer={pauseTimer} stopTimer={stopTimer} />
        </div>
    );
}

export default Timer;
