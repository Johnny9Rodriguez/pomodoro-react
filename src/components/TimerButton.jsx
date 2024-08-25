import React, { useEffect, useState } from 'react';

function TimerButtons() {
    const [isPaused, setIsPaused] = useState(true);
    const [label, setLabel] = useState('Work');

    useEffect(() => {
        window.pomodoro.onUpdateTimer((count) => {
            setIsPaused(true);
            if (count === 7) {
                setLabel('Long Break!');
            } else if (count % 2 === 0) {
                setLabel('Work');
            } else {
                setLabel('Break');
            }
        });
    }, []);

    const handleClick = async () => {
        const timerState = await window.pomodoro.toggleTimer();
        setIsPaused(!timerState);
    };

    return (
        <button
            className='noto-sans-mono w-full rounded-full py-1.5 text-white font-bold drop-shadow-sm bg-purple-800 hover:bg-purple-600'
            style={{
                transition: 'background-color 0.17s ease-in-out',
            }}
            onClick={handleClick}
            tabIndex={-1}
        >
            {isPaused ? label : 'Pause'}
        </button>
    );
}

export default TimerButtons;
