'use client';
import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { BiHomeAlt2 } from 'react-icons/bi';
import { PiMonitor } from 'react-icons/pi';
import { MdMovieCreation } from 'react-icons/md';
import { FiTrendingUp } from 'react-icons/fi';
import { GoPlus } from 'react-icons/go';
import { MdFavorite } from 'react-icons/md';
import { CiLogout } from 'react-icons/ci';
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/navigation';

export default function SideBar() {
  const router = useRouter();
  async function logout() {
    const response = await fetch('/api/logout');
    if (response.ok) {
      toast.success('Logout successful');
      router.push('/login');
      console.log('logout successful');
    } else {
      console.log('Error logging out');
    }
  }
  return (
    <div>
      <Toaster />
      <div className='sidebar'>
        <a href='/search'>
          <FiSearch title='Search' className='p' />
        </a>
        <a href='/home'>
          <BiHomeAlt2 title='Home' className='p' />
        </a>
        <a href='/TV'>
          {' '}
          <PiMonitor title='TV' className='p' />
        </a>
        <a href='/movies'>
          <MdMovieCreation title='Movies' className='p' />
        </a>
        {/* <a href="/trending"> <FiTrendingUp title='Trending' className='p' /></a> */}
        {/* <a href="/watchlist"><GoPlus title='Add to watchlist' className='p' /> </a>   */}
        <a href='/favourites'>
          <MdFavorite title='Favourites' className='p' />
        </a>
        <CiLogout title='Logout' onClick={logout} className='p' />
      </div>
    </div>
  );
}
