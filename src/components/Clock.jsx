import React, { useEffect, useState, useRef } from 'react';
import { FiCrosshair, FiCoffee } from 'react-icons/fi';
import Options from './Options';

function Clock() {
    const [time, setTime] = useState(null);
    const [displayTime, setDisplayTime] = useState(null);
    const [isWork, setIsWork] = useState(true);
    const [deg, setDeg] = useState(0);
    const timeRef = useRef(null);

    useEffect(() => {
        const getInitTime = async () => {
            const initTime = await window.pomodoro.getTime();
            setTime(initTime);
            timeRef.current = initTime;
        };
        getInitTime();
        window.pomodoro.onUpdateTime((newTime) => {
            setTime(newTime);
        });
        window.pomodoro.onUpdateTimer((count, newTime) => {
            setIsWork(count % 2 === 0);
            setTime(newTime);
            timeRef.current = newTime;
        });
    }, []);

    useEffect(() => {
        const renderDisplayTime = () => {
            const min = Math.floor(time / 60);
            const sec = time % 60;

            const dMin = min < 10 ? '0' + min : min;
            const dSec = sec < 10 ? '0' + sec : sec;

            setDisplayTime(`${dMin}:${dSec}`);
        };
        renderDisplayTime();

        if (timeRef.current) {
            const deg = (360 / timeRef.current) * (timeRef.current - time);
            setDeg(deg);
        }
    }, [time]);

    return (
        <div className='relative flex justify-center items-center w-52 h-52 drop-shadow-sm'>
            <div className='z-50 noto-sans-mono font-light text-5xl text-white'>
                {displayTime}
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
            <div
                className='absolute z-30 w-full h-full rounded-full'
                style={{
                    background: `conic-gradient(transparent, #9333ea ${deg}deg, transparent ${deg}deg)`,
                }}
            />
            <div className='absolute z-20 w-full h-full rounded-full bg-purple-200' />
            <Options />
        </div>
    );
}

export default Clock;
