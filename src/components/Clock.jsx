import React, { useEffect, useState } from 'react';

function Clock({ time }) {
    const [displayTime, setDisplayTime] = useState('01:00');

    useEffect(() => {
        const renderDisplayTime = () => {
            const min = Math.floor(time / 60);
            const sec = time % 60;

            const dMin = min < 10 ? '0' + min : min;
            const dSec = sec < 10 ? '0' + sec : sec;

            setDisplayTime(`${dMin}:${dSec}`);
        };
        renderDisplayTime();
    }, [time]);

    return (
        <div className='relative flex justify-center items-center w-52 h-52 drop-shadow-sm'>
            <div className='z-50 noto-sans-mono font-light text-5xl text-white'>
                {displayTime}
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
