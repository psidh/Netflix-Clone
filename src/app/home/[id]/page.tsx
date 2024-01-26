
'use client';
import React from 'react';
import ReactPlayer from 'react-player';
const VideoPlayer = () => {
  // Video path
  let videosrc =
    'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4';

  return (
    <div className='h-screen bg-black flex flex-col items-center justify-center'>
      <video width='full' height='full' controls>
        <source src='/movie.mp4' type='video/mp4' />
      </video>
    </div>
  );
};

export default VideoPlayer;
