import Image from 'next/image'

export default function page() {
  return (
    <div className='flex flex-col justify-center items-center my-12 bg-white text-black text-center'>
      <div className='flex flex-col justify-center items-center p-4'>
        <Image  src={'/step1.png'} height={370} width={370} alt='step1' />
        <h1 className=' text-black my-4'>STEP <span className='font-extrabold'>1</span> OF <span className='font-extrabold'>3</span></h1>
        <h2 className='text-3xl font-bold my-4 text-left'>Finish setting up your <br /> account</h2>
        <h3 className='text-lg font-extralight my-4'>Netflix is personalised for you. <br /> Create a password to watch on <br /> any device at any time.</h3>
          <a href="/getstarted/step2" className=' bg-red-600 py-4 w-full text-white  text-2xl rounded-lg shadow-lg' >Next Step</a>
      </div>
    </div>
  )
}
