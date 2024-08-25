import React from 'react';

function TimerButtons() {
    return (
        <button
            className='noto-sans-mono w-full rounded-full py-1.5 text-white font-bold drop-shadow-sm bg-purple-800 hover:bg-purple-600'
            style={{
                transition: 'background-color 0.17s ease-in-out',
            }}
            tabIndex={-1}
        >
            Start
        </button>
    );
}

export default TimerButtons;
