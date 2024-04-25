'use client';
import { useEffect, useState } from 'react';
import Movie from '@/interfaces/movie';
import SideBar from '@/components/SideBar';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FaImdb } from 'react-icons/fa';

export default function Page() {
  const [results, setResults] = useState<Movie[]>([]);

  const router = useRouter();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/movies`, {
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

    fetchData();
  }, []);

  const handlePush = (movieName :any) => {
    router.push(`/home/${encodeURIComponent(movieName)}`);
  };
  
  return (
    <section className='bg-black h-screen text-white'>
      <div className='flex justify-between items-start bg-black'>
        <div className='w-[15%] mt-24'>
          <SideBar />
        </div>
        <div className='w-[85%] mt-8'>
          {results.map((result, index) => (
            <div
              onClick={() => handlePush(result.title)}
              key={result._id}
              className='flex justify-between items-start space-x-8 border border-[#525252] p-4 rounded-3xl my-4 cursor-pointer'
            >
              <Image
                src={result.primaryposter}
                width={230}
                height={300}
                alt='Movie'
                className='rounded-xl'
              />
              <div className='flex flex-col justify-start items-start'>
                <h1 className='text-4xl'>{result.title}</h1>
                <h2 className='text-xl my-2 text-[#666666]'>
                  {result.description}
                </h2>
                <div className='flex  items-center'>
                  <FaImdb className='text-4xl mr-2 text-yellow-500' />
                  <h2 className='font-semibold text-xl text-yellow-400'>
                    {result.rating}.0 / 10
                  </h2>
                </div>
                <h3 className='text-lg my-2 text-[#b8b8b8]'>
                  Release Year: {result.releaseYear}
                </h3>
                <h4 className='text-lg my-2 text-[#b8b8b8]'>
                  Genre: {result.genre}
                </h4>
                <a
                  href={result.youtube}
                  className='px-8 py-2 rounded-full bg-red-600 text-white hover:text-black transition-all duration-200  hover:bg-white'
                >
                  Watch Trailer
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
