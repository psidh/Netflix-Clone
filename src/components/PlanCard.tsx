'use client'
import React, { useState } from 'react';
import planData from '@/data/PlanCardData';

interface PlanCardProps {
  onTierSelect: (selectedTier: string) => void;
}

const PlanCard: React.FC<PlanCardProps> = ({ onTierSelect }) => {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  const handleCardSelect = (cardName: string) => {
    setSelectedCard(cardName === selectedCard ? null : cardName);
    onTierSelect(cardName);
  };

  return (
    <div className='grid grid-cols-4 gap-6 mx-20'>
      {planData.map((plan) => (
      <div
          key={plan.name}
          className={`${selectedCard === plan.name ? 'border border-red-500 bg-gray-100 ' : '' } hover:border-red-500 hover:border-2 transition ease-in-out duration-300 flex flex-col items-start justify-between p-2 bg-white text-black rounded-2xl border-2 border-[#dbdbdb] cursor-pointer`}
          onClick={() => handleCardSelect(plan.name)}
          
        >
        <div className="bg-gradient-to-r from-blue-700 to-red-700  w-full p-4 rounded-xl text-white">
          <h1 className='text-xl font-semibold'>{plan.name}</h1>
          <h2 className='text-md font-medium'>{plan.videoAndSoundQuality}</h2>
        </div>
        <div className='my-2 flex flex-col items-start justify-end mx-6'>
          <h1 className='text-sm font-semibold text-[#767676]'>Monthly price</h1>
          <h2 className='text-lg font-light mb-2'>{plan.monthlyPrice}</h2>
        </div>
        <div className='my-2 flex flex-col items-start justify-end mx-6'>
          <h1 className='text-sm font-semibold text-[#767676]'>Video and sound quality</h1>
          <h2 className='text-lg font-light mb-2'>{plan.videoAndSoundQuality}</h2>
        </div>
        <div className='my-2 flex flex-col items-start justify-end mx-6'>
          <h1 className='text-sm font-semibold text-[#767676]'>Resolution</h1>
          <h2 className='text-lg font-light mb-2'>{plan.resolution}</h2>
          
        </div>
        {plan.spatialAudio ? (
          <div className='my-2 flex flex-col items-start justify-end mx-6'>
          <h1 className='text-sm font-semibold text-[#767676]'>Spatial audio (immersive sound)</h1>
          <h2 className='text-lg font-light mb-2'>{plan.spatialAudio}</h2>
        </div>
        ) : (
          <div></div>
        )}
        
        <div className='my-2 flex flex-col items-start justify-end mx-6'>
          <h1 className='text-sm font-semibold text-[#767676]'>Supported devices</h1>
          <h2 className='text-lg font-light mb-2'>{plan.supportedDevices}</h2>
          
        </div>
        <div className='my-2 flex flex-col items-start justify-end mx-6'>
          <h1 className='text-sm font-semibold text-[#767676]'>
            Devices your household can watch at the same time
          </h1>
          <h2 className='text-lg font-light mb-2'>{plan.simultaneousStreams}</h2>
          
        </div>
        <div className='my-2 flex flex-col items-start justify-end'>
          <h1 className='text-sm font-semibold text-[#767676]'>Download Devices</h1>
          <h2 className='text-lg font-light mb-2'>{plan.downloadDevices}</h2>
          
        </div>
      </div>
      ))}
    </div>
  );
}


export default PlanCard;