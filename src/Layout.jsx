import React from 'react';
import Header from './components/Header';
import Timer from './components/Timer';

function Layout() {
    return (
        <div className='flex flex-col items-center gap-4 p-4 h-full bg-slate-200'>
            <Header />
            <Timer />
        </div>
    );
}

export default Layout;
