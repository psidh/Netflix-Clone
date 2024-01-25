import { FaChevronRight } from 'react-icons/fa6';

export default function GetStarted() {
  return (
    <div className='flex flex-col items-center justify-center text-white'>
      <h1 className='text-5xl font-bold mt-16 mb-4'>
        Unlimited movies, TV shows and more
      </h1>
      <h2 className='text-2xl font-semibold my-4'>
        Watch anywhere. Cancel anytime.
      </h2>
      <h3 className='text-lg font-normal my-4'>
        Ready to watch? Enter your email to create or restart your membership.
      </h3>
      <div className='my-4 flex justify-between items-center'>
        <a href='/getstarted/step1' className='bg-[#E50914] opacity-100 mx-2  px-4 py-3 rounded flex justify-between items-center'>
          <p>Get Started</p>
          <FaChevronRight />
        </a>
      </div>
    </div>
  );
}
