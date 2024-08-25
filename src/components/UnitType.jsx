import React from 'react';
import { FiCrosshair, FiCoffee } from 'react-icons/fi';

function UnitType({ isWork }) {
    return (
        <div className={`absolute flex gap-4 z-50 text-2xl bottom-10`}>
            <FiCrosshair
                className={`${
                    isWork ? 'text-white' : 'text-purple-400 font-extralight'
                }`}
            />
            <FiCoffee
                className={`${
                    !isWork ? 'text-white' : 'text-purple-400 font-extralight'
                }`}
            />
        </div>
    );
}

export default UnitType;
