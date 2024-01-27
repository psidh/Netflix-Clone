'use client';
import React, { useEffect, useState } from 'react';

interface Movie {
  videolink: string;
}

const VideoPlayer = ({ params }: { params: { name: String } }) => {
  console.log(params.name);
  const [movie, setMovie] = useState<Movie | null>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(params.name);

        const response = await fetch(`/api/movie?name=${params?.name}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          console.error('Server error:', response);
          console.error('Failed to fetch data from the server');
          return;
        }

        const data = await response.json();
        // console.log("Front end received",data);

        setMovie(data);
      } catch (error) {
        console.error('Client error:', error);
      }
    };

    fetchData();
  }, [params?.name]);

  return (
    <div className='h-screen bg-black flex flex-col items-center justify-center'>
      {movie && (
        <video width='full' height='full' controls>
          <source src={`${movie.videolink}`} type='video/mp4' />
        </video>
      )}
    </div>
  );
};

export default VideoPlayer;
