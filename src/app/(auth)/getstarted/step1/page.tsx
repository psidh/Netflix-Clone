import Image from 'next/image'
import StaticNavbar from '@/components/StaticNavbar'
export default function page() {
  return (
    <div className='h-screen'>
      <StaticNavbar />
      <div className='steps'>
        <div className='flex flex-col justify-center items-center p-4'>
          <Image  src={'/step1.png'} height={370} width={370} alt='step1' />
          <h1 className=' text-black my-4'>STEP <span className='font-semibold'>1</span> OF <span className='font-semibold'>3</span></h1>
          <h2 className='text-3xl font-semibold my-4 text-left'>Finish setting up your <br /> account</h2>
          <h3 className='text-lg font-extralight my-4'>Netflix is personalised for you. <br /> Create a password to watch on <br /> any device at any time.</h3>
            <a href="/getstarted/step2" className='next' >Next</a>
        </div>
      </div>
    </div>
  )
}
