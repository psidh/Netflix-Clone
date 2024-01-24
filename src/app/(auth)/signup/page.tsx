'use client'
import Navbar from '@/components/Navbar';
import { useState } from 'react';

export default function Page() {
  const [isFocused1, setIsFocused1] = useState<Boolean>(false);
  const [isFocused2, setIsFocused2] = useState<Boolean>(false);
  const [isFocused3, setIsFocused3] = useState<Boolean>(false);

  return (
    <section>
      <div
        className='bg-cover bg-center h-screen bg-opacity-50 relative'
        style={{ backgroundImage: `url('/bg.jpg')` }}
      >
        <Navbar />
        <div className='flex flex-col items-center justify-center h-screen'>
          <div className='flex flex-col items-center justify-between w-[30%] bg-black bg-opacity-80 rounded-lg p-8'>
            <h1 className='text-3xl font-semibold text-white mb-2'>Sign Up</h1>
            <div className={`relative w-full my-2 ${isFocused1 ? '' : 'mb-2'}`}>
              <input
                type='text'
                title='text'
                id='username'
                className='my-2 bg-[#202020] focus:outline-none pl-6 py-3 rounded-lg w-full'
                onFocus={() => setIsFocused1(true)}
                onBlur={() => setIsFocused1(false)}
              />
              <label
                htmlFor='text'
                className={`absolute left-6 transition-all ${
                  isFocused1
                    ? 'text-[#febd69] text-sm top-0'
                    : 'text-gray-400 top-5'
                }`}
              >
                Username
              </label>
            </div>
            <div className={`relative w-full my-2 ${isFocused2 ? '' : 'mb-2'}`}>
              <input
                type='email'
                title='email'
                id='email'
                className='my-2 bg-[#202020] focus:outline-none pl-6 py-3 rounded-lg w-full'
                onFocus={() => setIsFocused2(true)}
                onBlur={() => setIsFocused2(false)}
              />
              <label
                htmlFor='text'
                className={`absolute left-6 transition-all ${
                  isFocused2
                    ? 'text-[#febd69] text-sm top-0'
                    : 'text-gray-400 top-5'
                }`}
              >
                Email
              </label>
            </div>
            <div className={`relative w-full my-2 ${isFocused3 ? '' : 'mb-2'}`}>
              <input
                type='password'
                title='password'
                id='password'
                className='my-2 bg-[#202020] focus:outline-none pl-6 py-3 rounded-lg w-full'
                onFocus={() => setIsFocused3(true)}
                onBlur={() => setIsFocused3(false)}
              />
              <label
                htmlFor='text'
                className={`absolute left-6 transition-all ${
                  isFocused3
                    ? 'text-[#febd69] text-sm top-0'
                    : 'text-gray-400 top-5'
                }`}
              >
                Password
              </label>
            </div>
            <button className='my-4 py-3 px-2 bg-red-600 rounded-lg w-full'>
              Sign Up
            </button>

            <a href='/login' className='text-slate-500 my-4'>
              Already on Netflix?{' '}
              <span className='text-white text-lg hover:underline underline-offset-2'>
                SignIn now
              </span>
            </a>
            <a href='/' className='text-white mt-4'>
              Home
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
