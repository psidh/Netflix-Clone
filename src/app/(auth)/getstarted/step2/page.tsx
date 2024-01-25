import Image from 'next/image'
import StaticNavbar from '@/components/StaticNavbar'
export default function page() {
  return (
    <div className='h-screen'>
      <StaticNavbar />
      <div className='flex flex-col justify-center items-center py-48 bg-white text-black text-left'>
        <div className='flex flex-col justify-center items-start p-4'>
          <h1 className=' text-black my-1'>STEP <span className='font-extrabold'>2</span> OF <span className='font-extrabold'>3</span></h1>
          <h2 className='text-3xl font-bold my-1'>Create a password to start <br /> your membership</h2>
          <h3 className='text-lg font-extralight mt-2'>Just a few more steps and you&aposre done!</h3>
          <h3 className='text-lg font-extralight mb-2'>We hate paperwork, too.</h3>
          <input
            type='text'
            title='signin'
            className='my-1 border w-full border-black focus:outline-none pl-6 py-3 rounded-md'
            placeholder='Email Address'
          />
          <input
            type='text'
            title='signin'
            className='mt-2 mb-4 border w-full border-black focus:outline-none pl-6 py-3 rounded-md'
            placeholder='Add a password'
          />
          
            <a href="/getstarted/step3" className='text-center bg-[#E50914] py-4 w-full text-white transition duration-200 text-2xl hover:shadow-lg' >Next</a>
        </div>
      </div>
    </div>
  )
}
