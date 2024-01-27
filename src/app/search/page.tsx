import React from 'react';
import SideBar from '@/components/SideBar';
import MainContent from '@/components/MainContent';

export default function page() {
  return (
    <section className='bg-black h-screen text-white'>
      <div className='flex justify-between items-start bg-black'>
        <div className='w-[15%] mt-24'>
          <SideBar />
        </div>
        <div className='w-[85%] mt-4'>
          <h1 className='text-4xl mt-6'>Search Movies</h1>
          <input type="text" title='search' className='focus:outline-none border-b my-4 bg-black border-white py-3 w-[60%]' />
          <button className='py-2 px-8 bg-red-600 hover:bg-red-700 rounded-full'>Search</button>
        </div>
      </div>
    </section>
  );
}
