'use client';
import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { toast, Toaster } from 'react-hot-toast';
import React, { useState } from 'react';
import StaticNavbar from '@/components/StaticNavbar';
import axios from 'axios';
export default function Page() {
  const router = useRouter();

  const [user, setUser] = React.useState({
    email: '',
    password: '',
  });

  const [buttonDisabled, setButtonDisabled] = React.useState(true);

  
  const signUpUser = async () => {
      try {
        toast.loading('Waiting...', {
          duration: 2000,
        });
        const response = await axios.post('/api/signup', user);
        console.log(response);
        toast.success('SignUp successful');
        router.push('/login');
      } catch (error) {
        console.log(error);
      }
  };

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className='h-screen'>
      <Toaster />
      <StaticNavbar />
      <div className='flex flex-col justify-center items-center py-48 bg-white text-black text-left'>
        <div className='flex flex-col justify-center items-start p-4'>
          <h1 className=' text-black my-1'>
            STEP <span className='font-extrabold'>2</span> OF{' '}
            <span className='font-extrabold'>3</span>
          </h1>
          <h2 className='text-3xl font-bold my-1'>
            Create a password to start <br /> your membership
          </h2>
          <h3 className='text-lg font-extralight mt-2'>
            Just a few more steps and you&aposre done!
          </h3>
          <h3 className='text-lg font-extralight mb-2'>
            We hate paperwork, too.
          </h3>
          <input
            type='text'
            title='signin'
            id='email'
            className='my-1 border w-full border-black focus:outline-none pl-6 py-3 rounded-md'
            placeholder='Email Address'
            onChange={(event) =>
              setUser({ ...user, email: event.target.value })
            }
          />
          <input
            type='password'
            title='signin'
            id='password'
            className='mt-2 mb-4 border w-full border-black focus:outline-none pl-6 py-3 rounded-md'
            placeholder='Add a password'
            onChange={(event) =>
              setUser({ ...user, password: event.target.value })
            }
          />
          {buttonDisabled ? (
            <button
              disabled
              className='text-center bg-[#484848] py-4 w-full text-white transition duration-200 text-2xl hover:shadow-lg'
            >
              Next
            </button>
          ) : (
            <button
              onClick={signUpUser}
              className='text-center bg-[#E50914] py-4 w-full text-white transition duration-200 text-2xl hover:shadow-lg'
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
