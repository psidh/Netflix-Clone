import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { BiHomeAlt2 } from 'react-icons/bi';
import { PiMonitor } from 'react-icons/pi';
import { MdMovieCreation } from 'react-icons/md';
import { FiTrendingUp } from 'react-icons/fi';
import { GoPlus } from 'react-icons/go';
import { MdFavorite } from 'react-icons/md';

export default function SideBar() {
  return (
    <div>
      <div className='flex flex-col justify-center items-center px-8 py-4 bg-black text-white text-4xl'>
        <FiSearch  className='my-6 hover:underline hover:underline-offset-2 hover:text-red-600 ' />
        <BiHomeAlt2 className='my-6 hover:underline hover:underline-offset-2 hover:text-red-600 ' />
        <PiMonitor className='my-6 hover:underline hover:underline-offset-2 hover:text-red-600 ' />
        <MdMovieCreation className='my-6 hover:underline hover:underline-offset-2 hover:text-red-600 ' />
        <FiTrendingUp className='my-6 hover:underline hover:underline-offset-2 hover:text-red-600 ' />
        <GoPlus className='my-6 hover:underline hover:underline-offset-2 hover:text-red-600 ' />
        <MdFavorite className='my-6 hover:underline hover:underline-offset-2 hover:text-red-600 ' />
      </div>
    </div>
  );
}
