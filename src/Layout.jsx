import React from 'react';
import Header from './components/Header';
import Timer from './components/Timer';

function Layout() {
    return (
        <div className='flex flex-col items-center h-min w-min p-2 pt-1'>
            <Header />
            <Timer />
        </div>
    );
}

export default Layout;
