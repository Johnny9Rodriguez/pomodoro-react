import React from 'react';
import { FiX, FiMinus } from 'react-icons/fi';
// import { FiMenu, FiRotateCcw, FiSettings } from 'react-icons/fi';

function Header() {
    return (
        <div className='flex justify-between w-full'>
            <img src='/images/icon.png' alt='icon' className='w-8 h-8' />
            <div className=' flex items-center gap-2'>
                <FiMinus className='text-xl' />
                <FiX className='text-xl' />
            </div>
        </div>
    );
}

export default Header;
