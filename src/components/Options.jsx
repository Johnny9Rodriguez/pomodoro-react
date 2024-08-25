import React from 'react';
import { FiRotateCcw, FiSettings } from 'react-icons/fi';

function Options({ reset }) {
    const style = {
        transition: 'color 0.17s ease-in-out',
    };

    const handleReset = async () => {
        await window.pomodoro.resetTimer();
    };

    return (
        <div className='absolute w-full bottom-0 z-50 flex justify-between px-2 text-xl drop-shadow-md'>
            <FiSettings
                className='hover:cursor-pointer text-purple-800 hover:text-purple-600'
                style={style}
            />
            <FiRotateCcw
                className='hover:cursor-pointer text-purple-800 hover:text-purple-600'
                style={style}
                onClick={handleReset}
            />
        </div>
    );
}

export default Options;
