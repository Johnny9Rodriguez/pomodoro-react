import React, { useState } from 'react';
import useAudioClip from '../hooks/useAudioClip';
import { eventEmitter } from '../utils/eventEmitter';

function TimerButtons({ handleClick }) {
    const [name, setName] = useState('Start');

    const { playAudio } = useAudioClip();

    eventEmitter.addListener('timer-end', () => setName('Start'));

    const onClick = () => {
        const res = handleClick();
        if (res) {
            setName('Pause');
            playAudio('start');
        } else {
            setName('Start');
            playAudio('pause');
        }
    };

    return (
        <button
            className='noto-sans-mono w-full rounded-full py-1.5 text-white font-bold drop-shadow-sm bg-purple-600 hover:bg-purple-800'
            onClick={onClick}
        >
            {name}
        </button>
    );
}

export default TimerButtons;
