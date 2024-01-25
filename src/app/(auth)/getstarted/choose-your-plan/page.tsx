import PlanCard from '@/components/PlanCard'
import StaticNavbar from '@/components/StaticNavbar'

export default function Page() {
  return (
    <div className='bg-white'>
      <StaticNavbar />
      <div className='flex flex-col items-start justify-start pt-36 pb-4 px-16'>
        <h1 className=' text-black my-1 pl-1'>STEP <span className='font-extrabold'>2</span> OF <span className='font-extrabold'>3</span></h1>
        <h2 className='text-3xl font-semibold text-slate-700 my-4 text-left'>Choose the plan that’s right for you</h2>     
        <PlanCard />
        <div className='flex items-center justify-center w-full'>
        <a href="/getstarted/step2" className='text-center bg-[#E50914] py-4 w-[40%] my-8 text-white transition duration-200 text-2xl hover:shadow-lg' >Next</a>
        </div>
      </div> 
    </div>
  )
}
