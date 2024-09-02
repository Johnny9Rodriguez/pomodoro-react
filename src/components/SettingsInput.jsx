import React from 'react';

function SettingsInput({ id, value, name, setUserConfig }) {
    const handleChange = (e) => {
        const newValue = e.target.value * 60;
        setUserConfig((prevConfig) => ({
            ...prevConfig,
            [id]: newValue,
        }));
    };

    const handleKeyDown = (e) => {
        // Prevent input of negative sign, comma, and point
        if (e.key === '-' || e.key === ',' || e.key === '.') {
            e.preventDefault();
        }
    };

    const handleInput = (e) => {
        // Ensure the value is within the range 1 to 99
        const value = e.target.value;
        if (value < 1) {
            e.target.value = 1;
        } else if (value > 99) {
            e.target.value = 99;
        }
    };

    return (
        <div className='time-input flex gap-2 items-center'>
            <div className='w-1/2 flex justify-end'>
                <div className='text-sm font-bold'>{name}</div>
            </div>
            <input
                type='number'
                min={1}
                max={99}
                value={value ? value / 60 : 0}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                onInput={handleInput}
            />
            <div className='text-sm'>min</div>
        </div>
    );
}

export default SettingsInput;
