import React, { useRef } from 'react';

function VideoPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  return (
    <div className="video-player">
      <video ref={videoRef} controls>
        <source src="https://drive.google.com/drive/u/0/folders/1o604g-drRg2b6Onw-K-uT14uwcZ_N7N3" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <button onClick={handleFullscreen}>Fullscreen</button>
    </div>
  );
}

export default VideoPlayer;
