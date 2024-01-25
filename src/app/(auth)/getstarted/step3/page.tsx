import Image from 'next/image';
import StaticNavbar from '@/components/StaticNavbar';
export default function page() {
  return (
    <div className='h-screen'>
      <StaticNavbar />
      <div className='stepThree'>
        <div className='flex flex-col justify-center items-center p-4'>
          <Image src={'/step3.png'} height={80} width={80} alt='step1' />
          <h1 className='text-3xl font-semibold text-slate-700 my-4 text-left'>
          Choose your plan.
          </h1>
          <div className='flex flex-col items-stretch justify-between'>
          <div className='flex justify-start items-center'><Image src={'/tick.png'} height={40} width={40} alt='step1' /> <p className='font-light'>No commitments, cancel anytime.</p> </div>
          <div className='flex justify-start items-center'><Image src={'/tick.png'} height={40} width={40} alt='step1' /> <p className='font-light'>Everything on Netflix for one low price.</p> </div>
          <div className='flex justify-start items-center'><Image src={'/tick.png'} height={40} width={40} alt='step1' /> <p className='font-light'>No ads and no extra fees. Ever.</p> </div>
          </div>
          <a
            href='/login'
            className=' next'
          >
            Next
          </a>
        </div>
      </div>
    </div>
  );
}
