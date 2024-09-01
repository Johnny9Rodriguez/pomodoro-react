import React, { useState, useEffect } from 'react';
import { FiRotateCcw, FiSettings } from 'react-icons/fi';
import { useSettingsStore } from '../stores/settingsStore';

function Options() {
    const [spinReset, setSpinReset] = useState(false);
    const [spinSettings, setSpinSettings] = useState('');

    const { isOpen, openSettings, closeSettings } = useSettingsStore();

    const style = {
        transition: 'color 0.17s ease-in-out',
    };

    const handleReset = async () => {
        if (spinReset) return;
        setSpinReset(true);
        await window.pomodoro.resetTimer();
        setTimeout(() => setSpinReset(false), 1000);
    };

    useEffect(() => {
        if (isOpen) {
            setSpinSettings('animate-spin-cog');
        } else {
            setSpinSettings('animate-spin-cog-neg');
        }
        setTimeout(() => {
            setSpinSettings('');
        }, 500);
    }, [isOpen]);

    return (
        <div className='absolute w-full bottom-0 z-50 flex justify-between px-2 text-xl'>
            <FiSettings
                className={`hover:cursor-pointer text-purple-800 hover:text-purple-600 ${spinSettings}`}
                style={style}
                onClick={() => {
                    if (spinSettings !== '') return;
                    isOpen ? closeSettings() : openSettings();
                }}
            />
            <FiRotateCcw
                className={`hover:cursor-pointer text-purple-800 hover:text-purple-600 ${
                    spinReset ? 'animate-spin-neg' : ''
                }`}
                style={style}
                onClick={handleReset}
            />
        </div>
    );
}

export default Options;
