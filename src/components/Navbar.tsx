'use client';

import Image from 'next/image';

export default function Navbar() {
  return (
    <div className='absolute z-10 bg-gradient-to-b from-black to-black/10 w-full'>
      <div className='flex justify-between items-center px-20'>
        <Image src={'/logo.png'} width={240} height={240} alt='Logo' />
        <a
          href='/login'
          className='rounded-md bg-[#E50914] px-5 py-2 font-semibold text-white'
        >
          Sign In
        </a>
      </div>
    </div>
  );
}
