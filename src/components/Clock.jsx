import React, { useEffect, useState } from 'react';
import { eventEmitter } from '../utils/eventEmitter';

function Clock({ time }) {
    const [dTime, setDTime] = useState(null);
    const [isWork, setIsWork] = useState(true);

    eventEmitter.addListener('set-clock-label', setIsWork);

    useEffect(() => {
        const displayTime = () => {
            const min = Math.floor(time / 60);
            const sec = time % 60;

            const dMin = min < 10 ? '0' + min : min;
            const dSec = sec < 10 ? '0' + sec : sec;

            setDTime(`${dMin}:${dSec}`);
        };
        displayTime();
    }, [time]);

    return (
        <div className='relative flex justify-center items-center w-52 h-52 drop-shadow-sm'>
            <div className='z-50 noto-sans-mono font-light text-5xl text-white'>
                {dTime}
            </div>
            <div
                className={`absolute z-50 ${
                    isWork ? 'text-white' : 'text-purple-400'
                } text-2xl font-extralight top-10`}
            >
                Work
            </div>
            <div
                className={`absolute z-50 ${
                    !isWork ? 'text-white' : 'text-purple-400'
                } text-2xl font-extralight bottom-10`}
            >
                Break
            </div>
            <div className='absolute z-40 p-1.5 w-full h-full'>
                <div className='w-full h-full rounded-full bg-purple-800' />
            </div>
            <div className='absolute z-30 w-full h-full rounded-full' />
            <div className='absolute z-20 w-full h-full rounded-full bg-purple-200' />
        </div>
    );
}

export default Clock;
