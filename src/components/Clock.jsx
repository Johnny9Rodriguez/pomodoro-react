import React from 'react';

function Clock() {
    return (
        <div className='relative flex justify-center items-center w-52 h-52 drop-shadow-sm'>
            <div className='z-50 noto-sans-mono font-light text-5xl text-white'>
                25:00
            </div>
            <div className='absolute z-40 p-1.5 w-full h-full'>
                <div className='w-full h-full rounded-full bg-purple-800' />
            </div>
            <div className='absolute z-30 w-full h-full rounded-full' />
            <div className='absolute z-20 w-full h-full rounded-full bg-purple-200' />
        </div>
    );
}

export default Clock;
