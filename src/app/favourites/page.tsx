'use client';
import SideBar from '@/components/SideBar';
import Image from 'next/image';
import { FaImdb } from 'react-icons/fa6';
import React, { useEffect, useState } from 'react';
import Movie from '@/interfaces/movie';

export default function Page() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch('/api/favourite');
        if (!response.ok) {
          console.error('Failed to fetch movies');
          return;
        }

        const data = await response.json();
        console.log(data);

        setMovies(data);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <section className='bg-black text-white  h-screen'>
      <div className='flex justify-between items-start bg-black'>
        <div className='w-[15%] mt-24'>
          <SideBar />
        </div>
        <div className='w-[85%] mt-4'>
          <div>
            <h1 className='text-3xl my-16'>Favourites</h1>
            <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4  gap-4'>
              {movies.map((movie, index) => (
                <div
                  key={movie._id}
                  className='flex flex-col justify-center items-center  border border-[#363636] p-4 rounded-3xl cursor-pointer'
                >
                  <img
                    src={movie.primaryposter}
                    alt='Movie'
                    className='rounded-xl object-top object-cover sm:w-full md:h-auto h-48'
                  />
                  <div className='grow' />
                  <div className='flex flex-col w-full justify-center  sm:justify-between'>
                    <h1 className='text-lg sm:text-md mt-4'>{movie.title}</h1>
                    <a
                      href={movie.youtube}
                      className='w-full mt-4 text-center py-1  rounded-full bg-red-600 text-white hover:text-black transition-all duration-200  hover:bg-white'
                    >
                      Play
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
