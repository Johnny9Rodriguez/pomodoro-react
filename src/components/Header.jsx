import React from 'react';
// import { FiX, FiMinus } from 'react-icons/fi';
import { FiX } from 'react-icons/fi';
// import { FiMenu, FiRotateCcw, FiSettings } from 'react-icons/fi';

function Header() {
    // const handleClose = () => {
    //     window.pomodoro.quitApp();
    // };

    const handleMinimize = () => {
        window.pomodoro.minimizeApp();
    };

    return (
        <div className='flex justify-between w-full draggable'>
            <img
                src='./images/icon.png'
                alt='icon'
                className='w-8 h-8 drop-shadow-md'
            />
            <div className=' flex items-center gap-2 not-draggable'>
                {/* <FiMinus
                    className='text-xl hover:cursor-pointer hover:text-purple-600'
                    onClick={handleMinimize}
                    style={{
                        transition: 'color 0.17s ease-in-out',
                    }}
                /> */}
                <FiX
                    className='text-xl hover:cursor-pointer hover:text-purple-600'
                    onClick={handleMinimize}
                    style={{
                        transition: 'color 0.17s ease-in-out',
                    }}
                />
            </div>
        </div>
    );
}

export default Header;
