'use client';
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
          className={`${
            selectedCard === plan.name
              ? 'border border-red-500 bg-gray-100 '
              : ''
          } planCard`}
          onClick={() => handleCardSelect(plan.name)}
        >
          <div className='gradientCard'>
            <h1 className='text-xl font-semibold'>{plan.name}</h1>
            <h2 className='text-md font-medium'>{plan.videoAndSoundQuality}</h2>
          </div>
          <div className='parentCard'>
            <h1>Monthly price</h1>
            <h2>{plan.monthlyPrice}</h2>
          </div>
          <div className='parentCard'>
            <h1>Video and sound quality</h1>
            <h2>{plan.videoAndSoundQuality}</h2>
          </div>
          <div className='parentCard'>
            <h1>Resolution</h1>
            <h2>{plan.resolution}</h2>
          </div>
          {plan.spatialAudio ? (
            <div className='parentCard'>
              <h1>Spatial audio (immersive sound)</h1>
              <h2>{plan.spatialAudio}</h2>
            </div>
          ) : (
            <div></div>
          )}

          <div className='parentCard'>
            <h1>Supported devices</h1>
            <h2>{plan.supportedDevices}</h2>
          </div>
          <div className='parentCard'>
            <h1>Devices your household can watch at the same time</h1>
            <h2>{plan.simultaneousStreams}</h2>
          </div>
          <div className='my-2 flex flex-col items-start justify-end'>
            <h1>Download Devices</h1>
            <h2>{plan.downloadDevices}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlanCard;
