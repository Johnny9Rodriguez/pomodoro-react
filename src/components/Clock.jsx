import React, { useEffect, useState } from 'react';
import { eventEmitter } from '../utils/eventEmitter';
import { FiCrosshair, FiCoffee } from 'react-icons/fi';

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
            <div className={`absolute flex gap-4 z-50 text-2xl bottom-10`}>
                <FiCrosshair
                    className={`${
                        isWork
                            ? 'text-white'
                            : 'text-purple-400 font-extralight'
                    }`}
                />
                <FiCoffee
                    className={`${
                        !isWork
                            ? 'text-white'
                            : 'text-purple-400 font-extralight'
                    }`}
                />
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
