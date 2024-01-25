'use client';

import Image from 'next/image';

export default function StaticNavbar() {
  return (
    <div className='absolute z-10 w-full '>
      <div className='flex justify-between items-center px-10'>
        <Image src={'/logo.png'} width={200} height={200} alt='Logo' />
        <a
          href='/login'
          className='rounded-md bg-[#E50914] px-5 py-2 font-semibold'
        >
          Sign In
        </a>
      </div>
      <hr />
    </div>
  );
}
