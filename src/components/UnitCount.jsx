import React from 'react';
import { FaRegCircle, FaCircle } from 'react-icons/fa';

function UnitCount({ count }) {
    return (
        <div className='absolute flex gap-2 z-50 top-12 text-purple-400'>
            {count > 0 ? <FaCircle /> : <FaRegCircle />}
            {count > 2 ? <FaCircle /> : <FaRegCircle />}
            {count > 4 ? <FaCircle /> : <FaRegCircle />}
            {count > 6 ? <FaCircle /> : <FaRegCircle />}
        </div>
    );
}

export default UnitCount;
