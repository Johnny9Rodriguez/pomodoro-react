import React from 'react';
import Clock from './Clock';
import TimerButtons from './TimerButtons';

function Timer() {
    return (
        <div className='flex flex-col gap-4'>
            <Clock />
            <TimerButtons />
        </div>
    );
}

export default Timer;
