import React, { useState } from 'react';

function TimerButtons({ startTimer, pauseTimer, stopTimer }) {
    const [isActive, setIsActive] = useState(false);
    const [isRunning, setIsRunning] = useState(false);

    const handleStart = () => {
        startTimer();
        setIsActive(true);
        setIsRunning(true);
    };

    const handlePause = () => {
        pauseTimer();
        setIsRunning(false);
    };

    const handleStop = () => {
        stopTimer();
        setIsActive(false);
        setIsRunning(false);
    };

    const btnNormal = 'w-1/2 flex-shrink bg-purple-600 py-1.5 rounded-full drop-shadow-sm';
    const btnHover = 'hover:bg-purple-800';
    const btnStop = isActive ? 'hover:bg-purple-800' : '!bg-purple-200';

    const btnStyle = { transition: 'background-color 0.2s ease-in-out' };

    return (
        <div className='flex gap-4 justify-center text-white text-sm noto-sans-mono font-bold'>
            {!isRunning ? (
                <button
                    className={`${btnNormal} ${btnHover}`}
                    style={btnStyle}
                    onClick={handleStart}
                >
                    Start
                </button>
            ) : (
                <button
                    className={`${btnNormal} ${btnHover}`}
                    style={btnStyle}
                    onClick={handlePause}
                >
                    Pause
                </button>
            )}
            <button
                className={`${btnNormal} ${btnStop}`}
                style={btnStyle}
                onClick={handleStop}
            >
                Stop
            </button>
        </div>
    );
}

export default TimerButtons;
