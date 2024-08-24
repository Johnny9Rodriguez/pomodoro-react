import { useEffect, useState } from 'react';
import useAudioClip from './useAudioClip';
import { eventEmitter } from '../utils/eventEmitter';

function useTimer() {
    const [timer, setTimer] = useState(null);
    const [time, setTime] = useState(25 * 60);
    const [count, setCount] = useState(null);

    const { playAudio } = useAudioClip();

    useEffect(() => {
        return () => clearInterval(timer);
    }, [timer]);

    useEffect(() => {
        if (timer && time === 0) {
            playAudio(count === 6 ? 'alarmBig' : 'alarmSmall');

            clearInterval(timer);
            setTimer(null);
            eventEmitter.emit('timer-end');

            setCount((prevCount) => (count === 7 ? 0 : prevCount + 1));
        }
    }, [timer, time, playAudio, count]);

    useEffect(() => {
        if (!count) return;

        let isWork;
        if (count === 7) {
            setTime(25 * 60);
            isWork = false;
        } else if (count % 2 === 0) {
            setTime(25 * 60);
            isWork = true;
        } else {
            setTime(5 * 60);
            isWork = false;
        }
        eventEmitter.emit('set-clock-label', isWork);
    }, [count]);

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
