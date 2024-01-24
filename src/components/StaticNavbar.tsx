'use client';

import Image from 'next/image';

export default function StaticNavbar() {
  return (
    <div className='absolute z-10  w-full'>
      <div className='flex justify-between items-center px-20'>
        <Image src={'/logo.png'} width={240} height={240} alt='Logo' />
        <a
          href='/login'
          className='rounded-md bg-red-600 hover:bg-red-700 px-5 py-2 font-semibold'
        >
          Sign In
        </a>
      </div>
    </div>
  );
}
