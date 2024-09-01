import React from 'react';
import Header from './components/Header';
import Timer from './components/Timer';
import Settings from './components/Settings';

function Layout() {
    return (
        <div className='relative flex flex-col items-center h-min w-min p-2 pt-1'>
            <Header />
            <Timer />
            <Settings />
        </div>
    );
}

export default Layout;
