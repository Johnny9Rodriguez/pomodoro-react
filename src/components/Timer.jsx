import React from 'react';
import Clock from './Clock';
import TimerButton from './TimerButton';

function Timer() {
    return (
        <div className='flex flex-col gap-4'>
            <Clock />
            <TimerButton />
        </div>
    );
}

export default Timer;
