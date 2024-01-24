import Navbar from '@/components/Navbar';

export default function page() {
  return (
    <section>
      <div
        className='bg-cover bg-center h-screen bg-opacity-50 relative'
        style={{ backgroundImage: `url('/bg.jpg')` }}
      >
        <Navbar />
        <div className='flex flex-col items-center justify-center h-screen'>
          <div className='flex flex-col items-center justify-between w-[30%] bg-black rounded-lg p-8'>
            <h1 className='text-3xl font-semibold text-white mb-2'>Sign In</h1>
            <input
              type='email'
              title='email'
              id='email'
              className='my-2 bg-[#202020] focus:outline-none pl-6 py-3 rounded-lg w-full'
              placeholder='Email Address'
            />
            <input
              type='password'
              title='password'
              id='password'
              className='my-2 bg-[#202020] focus:outline-none pl-6 py-3 rounded-lg w-full'
              placeholder='Password'
            />
            <button className='my-4 py-3 px-2 bg-red-600 rounded-lg w-full'>
              Sign In
            </button>

            <a href='/signup' className='text-slate-500 my-4'>
              New to Netflix?{' '}
              <span className='text-white text-lg'>Sign up now.</span>
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
