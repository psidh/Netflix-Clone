import React from 'react';
import SideBar from '@/components/SideBar';
import MainContent from '@/components/MainContent';

export default function Page() {
  return (
    <section className='bg-black h-screen'>
      <div className='flex justify-between items-start bg-black'>
        <div className='w-[15%] mt-24'>
          <SideBar />
        </div>
        <div className='w-[85%] mt-4'>
          <MainContent />
        </div>
      </div>
    </section>
  );
}
