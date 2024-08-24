import { useEffect, useState } from 'react';
import useAudioClip from './useAudioClip';

function useTimer() {
    const [timer, setTimer] = useState(null);
    const [time, setTime] = useState(3);

    const { playAudio } = useAudioClip();

    useEffect(() => {
        return () => clearInterval(timer);
    }, [timer]);

    useEffect(() => {
        if (timer && time === 0) {
            clearInterval(timer);
            playAudio('alarmSmall');
        }
    }, [timer, time, playAudio]);

    const toggleTimer = () => {
        if (timer) {
            clearInterval(timer);
            setTimer(null);
        } else {
            const interval = setInterval(() => {
                setTime((prevTime) => prevTime - 1);
            }, 1000);

            setTimer(interval);
        }
        return !timer;
    };

    return { time, toggleTimer };
}

export default useTimer;
