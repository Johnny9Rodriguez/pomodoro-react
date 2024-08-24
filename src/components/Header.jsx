import React from 'react';
import { FiX } from 'react-icons/fi';
import { FiMinus } from 'react-icons/fi';
import { FiMenu } from 'react-icons/fi';

function Header() {
    return (
        <div className='flex justify-between w-full'>
            <div className='flex items-center gap-2'>
                <img src='/images/icon.png' alt='icon' className='w-8 h-8' />
                <FiMenu className='text-xl' />
            </div>
            <div className=' flex items-center gap-2'>
                <FiMinus className='text-xl' />
                <FiX className='text-xl' />
            </div>
        </div>
    );
}

export default Header;
