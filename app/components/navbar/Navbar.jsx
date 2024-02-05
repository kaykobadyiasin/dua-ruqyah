import React from 'react';
import logo from '@/public/assets/logo.png';
import Link from 'next/link';



const Navbar = () => {


    return (
        <div className='w-full bg-white min-h-[800px] p-5 rounded-xl'>
            <div className='flex justify-center'>
                <img
                    src={logo.src}  // Use logo.src here
                    width={logo.width}
                    height={logo.height}
                    alt="Picture of the author"
                />
            </div>
            <div>
                <ul className='flex flex-col gap-5 font-semibold my-10'>
                    <Link href={'/'}>
                        <li className='bg-[#F7F8FA] text-[#868686] px-3 py-4 rounded-xl'>
                            Home
                        </li>
                    </Link>
                    <Link href={'/all-duas'}>
                        <li className='bg-[#F7F8FA] text-[#868686] px-3 py-4 rounded-xl'>
                            All Duas
                        </li>
                    </Link>
                    <Link href={'/memorize'}>
                        <li className='bg-[#F7F8FA] text-[#868686] px-3 py-4 rounded-xl'>
                            Memorize
                        </li>
                    </Link>
                    <Link href={'/bookmark'}>
                        <li className='bg-[#F7F8FA] text-[#868686] px-3 py-4 rounded-xl'>
                            Bookmark
                        </li>
                    </Link>
                    <Link href={'/ruqyah'}>
                        <li className='bg-[#F7F8FA] text-[#868686] px-3 py-4 rounded-xl'>
                            Ruqyah
                        </li>
                    </Link>
                    <Link href={'/dua-info'}>
                        <li className='bg-[#F7F8FA] text-[#868686] px-3 py-4 rounded-xl'>
                            Dua-info
                        </li>
                    </Link>
                    <Link href={'/books'}>
                        <li className='bg-[#F7F8FA] text-[#868686] px-3 py-4 rounded-xl'>
                            Books
                        </li>
                    </Link>

                </ul>
            </div>
            <button className='bg-[#1FA45B] text-white px-8 py-3 w-full rounded-xl'>I Want To Support</button>
        </div>
    );
};

export default Navbar;
