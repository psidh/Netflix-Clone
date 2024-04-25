'use client';
import React, { useEffect, useState } from 'react';
import { BiArrowBack } from 'react-icons/bi';
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
        <div>
          <a href='/' title='home'>
            <BiArrowBack className='cursor-pointer transition duration-200 hover:-translate-y-1 my-4 hover:underline hover:underline-offset-2 hover:text-red-600 text-white text-3xl' />
          </a>
          <video width='full' height='full' controls>
            <source src={`${movie.videolink}`} type='video/mp4' />
          </video>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
