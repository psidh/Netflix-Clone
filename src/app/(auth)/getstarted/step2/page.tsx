'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { toast, Toaster } from 'react-hot-toast';
import React, { useState } from 'react';
import StaticNavbar from '@/components/StaticNavbar';
import axios from 'axios';
import PlanCard from '@/components/PlanCard';
import { animateScroll as scroll } from 'react-scroll';

export default function Page() {
  const router = useRouter();

  const [user, setUser] = React.useState({
    email: '',
    password: '',
    tier: '',
  });

  const [buttonDisabled, setButtonDisabled] = React.useState(true);

  const [tier, setTier] = useState<string>('basic');

  const [tierVisible, setTierVisible] = useState<boolean>(false);

  const handleTierSelect = (selectedTier: string) => {
    setTier(selectedTier);
  };

  const scrollToBottom = () => {
    scroll.scrollToBottom();
  };

  const handleTierVisible = () => {
    scrollToBottom();
    setTierVisible(!tierVisible);
  };

  const signUpUser = async () => {
    try {
      toast.loading('Waiting...', {
        duration: 2000,
      });
      user.tier = tier;
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

  function handleClick(tier: string): void {
    throw new Error('Function not implemented.');
  }

  return (
    <>
      <div className=''>
        <Toaster />
        <StaticNavbar />
        <div className='stepTwo'>
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
              className='stepTwoEmail'
              placeholder='Email Address'
              onChange={(event) =>
                setUser({ ...user, email: event.target.value })
              }
            />
            <input
              type='password'
              title='signin'
              id='password'
              className='stepTwoPass'
              placeholder='Add a password'
              onChange={(event) =>
                setUser({ ...user, password: event.target.value })
              }
            />
            {buttonDisabled ? (
              <button disabled className='disabledNext'>
                Next
              </button>
            ) : (
              <button onClick={handleTierVisible} className='next'>
                Next
              </button>
            )}
          </div>
        </div>
      </div>

      {tierVisible ? (
        <div className='bg-white'>
          <Toaster />
          <div className='flex flex-col items-start justify-start  pb-4 px-16'>
            <h1 className=' text-black my-1 pl-1'>
              STEP <span className='font-extrabold'>2</span>
            </h1>
            <h2 className='text-3xl font-semibold text-slate-700 my-4 text-left'>
              Choose the plan that’s right for you
            </h2>
            {/* Pass the callback function to PlanCard */}
            <PlanCard onTierSelect={handleTierSelect} />
            <div className='flex items-center justify-center w-full'>
              <button onClick={signUpUser} className='nextChoose'>
                Submit
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
}
