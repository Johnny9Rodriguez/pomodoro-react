import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { FiSave } from 'react-icons/fi';
import { useSettingsStore } from '../stores/settingsStore';

function Settings() {
    const { isOpen, closeSettings } = useSettingsStore();

    return (
        <div
            className={`absolute top-10 left-0 ${
                isOpen ? 'translate-x-0' : '-translate-x-52'
            } transition-transform duration-[500ms]`}
        >
            <div className='p-4 flex flex-col gap-3 noto-sans bg-purple-200 rounded-r-lg border border-l-0 border-purple-400'>
                <div className='time-input flex gap-2 items-center'>
                    <div className='w-1/2 flex justify-end'>
                        <div className='text-sm font-bold'>Work</div>
                    </div>
                    <input type='number' min={1} max={99} />
                    <div className='text-sm'>min</div>
                </div>
                <div className='time-input flex gap-2 items-center'>
                    <div className='w-1/2 flex justify-end'>
                        <div className='text-sm font-bold'>Short Break</div>
                    </div>
                    <input type='number' min={1} max={99} />
                    <div className='text-sm'>min</div>
                </div>
                <div className='time-input flex gap-2 items-center'>
                    <div className='w-1/2 flex justify-end'>
                        <div className='text-sm font-bold'>Long Break</div>
                    </div>
                    <input type='number' min={1} max={99} />
                    <div className='text-sm'>min</div>
                </div>
                <div className='flex gap-4 justify-between text-white text-lg'>
                    <button
                        className='w-1/2 flex-shrink flex justify-center py-1 bg-purple-800 rounded-full hover:bg-purple-600'
                        onClick={closeSettings}
                    >
                        <IoIosArrowBack />
                    </button>
                    <button className='w-1/2 flex-shrink flex justify-center py-1 bg-purple-800 rounded-full hover:bg-purple-600'>
                        <FiSave />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Settings;
