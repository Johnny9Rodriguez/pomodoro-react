import React, { useEffect, useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { FiSave } from 'react-icons/fi';
import { useSettingsStore } from '../stores/settingsStore';
import SettingsInput from './SettingsInput';

function Settings() {
    const { isOpen, closeSettings } = useSettingsStore();
    const [userConfig, setUserConfig] = useState({});
    const [backupConfig, setBackupConfig] = useState({});

    useEffect(() => {
        const fetchUserConfig = async () => {
            const res = await window.pomodoro.getUserConfig();
            setUserConfig(res);
            setBackupConfig(res);
        };

        fetchUserConfig();
    }, []);

    return (
        <div
            className={`absolute top-10 left-0 ${
                isOpen ? 'translate-x-0' : '-translate-x-52'
            } transition-transform duration-[500ms]`}
        >
            <div className='p-4 flex flex-col gap-3 noto-sans bg-purple-200 rounded-r-lg border border-l-0 border-purple-400'>
                <SettingsInput
                    id={'workTime'}
                    value={userConfig.workTime}
                    name={'Work'}
                    setUserConfig={setUserConfig}
                />
                <SettingsInput
                    id={'shortBreak'}
                    value={userConfig.shortBreak}
                    name={'Short Break'}
                    setUserConfig={setUserConfig}
                />
                <SettingsInput
                    id={'longBreak'}
                    value={userConfig.longBreak}
                    name={'Lonk Break'}
                    setUserConfig={setUserConfig}
                />
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
