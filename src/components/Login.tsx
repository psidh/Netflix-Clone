import { FaChevronRight } from 'react-icons/fa6';

export default function Login() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <h1 className='text-5xl font-extrabold mt-16 mb-4'>
        Unlimited movies, TV shows and more
      </h1>
      <h2 className='text-2xl font-semibold my-4'>
        Watch anywhere. Cancel anytime.
      </h2>
      <h3 className='text-lg font-normal my-4'>
        Ready to watch? Enter your email to create or restart your membership.
      </h3>
      <div className='my-4 flex justify-between items-center'>
        <input
          type='text'
          title='signin'
          className='my-4 bg-black focus:outline-none bg-opacity-80 pl-6 py-3 rounded-lg'
          placeholder='Email Address'
        />
        <a href='/login' className='bg-red-600 hover:bg-red-700 opacity-100 mx-2  px-4 py-3 rounded flex justify-between items-center'>
          <p>Get Started</p>
          <FaChevronRight />
        </a>
      </div>
    </div>
  );
}
