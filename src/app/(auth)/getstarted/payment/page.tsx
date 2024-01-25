import Image from 'next/image'
import StaticNavbar from '@/components/StaticNavbar'
export default function page() {
  return (
    <div className='h-screen'>
      <StaticNavbar />
      <div className='flex flex-col justify-center items-center py-32 bg-white text-black text-center'>
        <div className='flex flex-col justify-center items-center p-4'>
          <Image  src={'/lock.png'} height={50} width={50} alt='step1' className='my-6' />
          <h1 className=' text-black '>STEP <span className='font-semibold'>3</span> OF <span className='font-semibold'>3</span></h1>
          <h2 className='text-3xl font-semibold my-4 text-left text-[#333333]'>Choose how to pay</h2>
          <h3 className='text-lg font-light text-center'>Your payment is encrypted and you can change your <br /> payment method at anytime.</h3>
          <h4 className='text-lg font-semibold mt-2 text-center text-[#333333]'>Secure for peace of mind.</h4>
          <h5 className='text-lg font-semibold text-center mb-4 text-[#333333]'>Cancel easily online.</h5>
          
            <a href="/getstarted/step2" className='text-center bg-[#E50914] py-4 w-full text-white transition duration-200 text-2xl hover:shadow-lg' >Next</a>
        </div>
      </div>
    </div>
  )
}
