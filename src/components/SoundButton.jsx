import React from 'react';

function SoundButton() {
    const onClick = () => {
        // window.pomodoro.test();
        const audio = new Audio('/audio/alarm.wav');
        audio.play();
    };

    return (
        <button
            className='px-6 py-1 rounded-full font-bold bg-purple-600 hover:bg-purple-800'
            style={{
                transition: 'background-color 200ms ease-in-out',
            }}
            onClick={onClick}
        >
            Play
        </button>
    );
}

export default SoundButton;
