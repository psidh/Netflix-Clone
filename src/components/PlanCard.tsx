import React from 'react';

export default function PlanCard() {
  return (
    <div>
      <div className='max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-md'>
        <div className='md:flex'>
          <div className='md:flex-shrink-0'>
            <img
              className='h-48 w-full object-cover md:w-48'
              src='premium4k.jpg'
              alt='Premium 4K'
            />
          </div>
          <div className='p-8'>
            <div className='uppercase tracking-wide text-sm text-indigo-500 font-semibold'>
              Premium 4K + HDR
            </div>
            <div className='mt-2 text-xl leading-tight font-medium text-gray-800'>
              Monthly Price: ₹649
            </div>
            <div className='mt-2 text-gray-600'>
              <p>Video and Sound Quality: Best</p>
              <p>Resolution: 4K (Ultra HD) + HDR</p>
              <p>Spatial Audio (Immersive Sound): Included</p>
              <p>Supported Devices: TV, Computer, Mobile Phone, Tablet</p>
              <p>Devices for Simultaneous Streaming: 4</p>
              <p>Download Devices: Unlimited</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
