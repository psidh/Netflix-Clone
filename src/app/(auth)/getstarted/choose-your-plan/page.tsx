import PlanCard from '@/components/PlanCard'
import React from 'react'

export default function Page() {
  return (
    <div>
      <div className='flex flex-col items-center justify-start'>
      <h1 className=' text-black my-1'>STEP <span className='font-extrabold'>2</span> OF <span className='font-extrabold'>3</span></h1>
      <h2 className='text-3xl font-semibold text-slate-700 my-4 text-left'>Choose the plan that’s right for you</h2> 
      <PlanCard />
      </div>
    </div>
  )
}
