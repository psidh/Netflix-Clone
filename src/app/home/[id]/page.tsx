'use client';
import React from 'react';
const VideoPlayer = ({ params }: { params: { id: String } }) => {
  console.log(params.id);
  
  return (
    <div className='h-screen bg-black flex flex-col items-center justify-center'>
      <video width='full' height='full' controls>
        <source src={`'/movieVideos/${params.id}'}`} type='video/mp4' />
      </video>
    </div>
  );
};

export default VideoPlayer;
