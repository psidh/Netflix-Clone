'use client';
// Page.tsx
import React, { useState, useEffect } from 'react';
import PlanCard from '@/components/PlanCard';
import StaticNavbar from '@/components/StaticNavbar';
import { useRouter } from 'next/navigation';
import toast, { ToastBar, Toaster } from 'react-hot-toast';

export default function Page() {
  const [tier, setTier] = useState<string>('basic');

  // Callback function to update the tier state
  const handleTierSelect = (selectedTier: string) => {
    setTier(selectedTier);
  };

  const router = useRouter();

  const handleClick = async (tier: string) => {
    try {
      toast.loading('Updating Tier...', {
        duration: 2000,
      });
      const response = await fetch('/api/tier', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tier: tier }),
      });
      toast.success('Login successful', {
        duration: 2000,
      });
      router.push('/home');
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <div className='bg-white'>
      <StaticNavbar />
      <Toaster />
      <div className='flex flex-col items-start justify-start pt-36 pb-4 px-16'>
        <h1 className=' text-black my-1 pl-1'>
          STEP <span className='font-extrabold'>2</span> OF{' '}
          <span className='font-extrabold'>3</span>
        </h1>
        <h2 className='text-3xl font-semibold text-slate-700 my-4 text-left'>
          Choose the plan that’s right for you
        </h2>
        {/* Pass the callback function to PlanCard */}
        <PlanCard onTierSelect={handleTierSelect} />
        <div className='flex items-center justify-center w-full'>
          <button
            onClick={() => handleClick(tier)}
            className='text-center bg-[#E50914] py-4 w-[40%] my-8 text-white transition duration-200 text-2xl hover:shadow-lg'
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
