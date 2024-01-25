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
        <FiSearch title='Search' className='p' />
        <BiHomeAlt2 title='Home'className='p' />
        <PiMonitor title='TV' className='p' />
        <MdMovieCreation title='Movies' className='p' />
        <FiTrendingUp title='Trending' className='p' />
        <GoPlus title='Add to WishList' className='p' />
        <MdFavorite title='Favourites' className='p' />
        <CiLogout title='Logout' onClick={logout} className='p' />
      </div>
    </div>
  );
}
