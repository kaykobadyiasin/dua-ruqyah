import Link from 'next/link';
import React from 'react';

const Settings = () => {
    return (
        <div className='bg-white min-h-[800px] p-5 rounded-xl'>
            <h2 className='text-center font-semibold mb-5'>Settings</h2>
            <ul className='flex flex-col gap-5'>
                <Link href={'/'}>
                    <li className='bg-[#F7F8FA] px-3 py-4 rounded-xl'>
                        Language Settings
                    </li>
                </Link>
                <Link href={'/general-settings'}>
                    <li className='bg-[#F7F8FA] px-3 py-4 rounded-xl'>
                        General Settings
                    </li>
                </Link>
                <Link href={'/font-settings'}>
                    <li className='bg-[#F7F8FA] px-3 py-4 rounded-xl'>
                        Font Settings
                    </li>
                </Link>
                <Link href={'/appearance Settings'}>
                    <li className='bg-[#F7F8FA] px-3 py-4 rounded-xl'>
                        Appearance Settings
                    </li>
                </Link>
            </ul>
        </div>
    );
};

export default Settings;