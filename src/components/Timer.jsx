import React from 'react';
import Clock from './Clock';
import TimerButton from './TimerButton';
import useTimer from '../hooks/useTimer';

function Timer() {
    const { time, toggleTimer } = useTimer();

    return (
        <div className='flex flex-col gap-4'>
            <Clock time={time} />
            <TimerButton handleClick={toggleTimer} />
        </div>
    );
}

export default Timer;
