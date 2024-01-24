import React from 'react';
import Image from 'next/image';
import Login from './Login';
export default function Home() {
  return (
    <div className='bg-cover bg-center h-screen bg-opacity-50 relative' style={{ backgroundImage: `url('/bg.jpg')` }}>
      
      <div className='flex justify-between items-center px-20 relative z-10'>
        <Image src={'/logo.png'} width={240} height={240} alt='Logo' />
        <a
          href='/login'
          className='rounded-md bg-red-600 hover:bg-red-700 px-5 py-2 font-semibold'
        >
          Sign In
        </a>
      </div>
      <Login />
    </div>
  );
}
