'use client';
import React, { useEffect, useState } from 'react';
import SideBar from '@/components/SideBar';
import Movie from '@/interfaces/movie';
import Image from 'next/image';
import { FaImdb } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

const Moviee = [
  {
    _id: '',
    title: '',
    videolink: '',
    youtube: '',
    primaryposter: '',
    secondaryposter: '',
    genre: '',
    releaseYear: 0,
    rating: 0,
    description: '',
  },
];

export default function Page() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  let [results, setResults] = useState<Movie[]>([]);

  const handleSearch = async () => {
    try {
      const response = await fetch(`/api/search?query=${searchTerm}`, {
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
      console.log(data);
      setResults(data);
    } catch (error) {
      console.error('Client error:', error);
    }
  };

  const handlePush = () => {
    router.push(`/home/${results[0].title}`);
  };

  return (
    <section className='bg-black h-screen text-white'>
      <div className='flex justify-between items-start bg-black'>
        <div className='w-[15%] mt-24'>
          <SideBar />
        </div>
        <div className='w-[85%] mt-4'>
          <h1 className='text-4xl mt-6'>Search Movies</h1>
          <input
            type='text'
            title='search'
            className='focus:outline-none border-b my-4 bg-black border-white py-3 w-[60%]'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            onClick={handleSearch}
            className='py-2 px-8 bg-red-600 hover:bg-red-700 rounded-full'
          >
            Search
          </button>
          {results && results.length > 0 && (
            <div
              onClick={handlePush}
              key={results[0]._id}
              className='flex justify-between items-start space-x-8 border border-[#525252] p-4 rounded-3xl'
            >
              <Image
                src={results[0].primaryposter}
                width={230}
                height={300}
                alt='Movie'
                className='rounded-xl'
              />
              <div className='flex flex-col justify-start items-start'>
                <h1 className='text-4xl mb-4'>{results[0].title}</h1>
                <h2 className='text-lg my-4 text-[#666666]'>
                  {results[0].description}
                </h2>
                <div className='flex my-2 items-center'>
                  <FaImdb className='text-4xl mr-2 text-yellow-500' />
                  <h2 className='font-semibold text-xl text-yellow-400'>
                    {results[0].rating}.0 / 10
                  </h2>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
