'use client';
import { useEffect, useState } from 'react';
import Movies from '@/data/MoviesData';
import Image from 'next/image';
import { FaImdb } from 'react-icons/fa';
import styles from './MainContent.module.css';
import { useRouter } from 'next/navigation';
import Classics from '@/data/ClassicData';

const MainContent = () => {
  const movies = Movies;
  const classics = Classics;
  const router = useRouter();
  const [selectedMovie, isSelectedMovie] = useState(movies[0]);
  const handleSelectedMovie = (movie: any) => {
    isSelectedMovie(movie);
  };

  const [show, setShow] = useState<Boolean>(false);

  const handleTrailer = (movie: any) => {
    setShow(true);
  };

  const handlePush = () => {
    
    router.push(`/home/${selectedMovie.title}`); 
  };
  
  return (
    <div className='text-white'>
      <div key={selectedMovie.title} className='text-white px-6'>
        <div className={styles.titleContainer}>
          <h1 className='text-6xl font-semibold  mb-4'>
            {selectedMovie.title}
          </h1>
          <p className='text-lg font-normal my-2 w-[40%] text-[#646464]'>
            {selectedMovie.description}
          </p>
          <div className='flex my-2 items-center'>
            <FaImdb className='text-4xl mr-2 text-yellow-500' />
            <h2 className='font-semibold text-xl text-yellow-400'>
              {selectedMovie.rating} / 10
            </h2>
          </div>
          <button
            onClick={handlePush}
            className='py-2 px-16 text-xl my-2 rounded-full transition duration-300 hover:bg-red-700 bg-red-600'
          >
            Play
          </button>
          <button
            onClick={handleTrailer}
            className='py-2 px-8 text-xl my-2 rounded-full transition duration-300 hover:bg-slate-400 bg-white text-black ml-3'
          >
            Watch Trailer
          </button>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={`${selectedMovie.secondaryposter}`}
            width={700}
            height={300}
            alt={movies[0].title}
            className='overflow-hidden'
          />
        </div>
      </div>




      <section className='grid grid-cols-6 mr-5 gap-6 mt-32 relative z-1'>
        {movies.map((movie) => (
          <div
            key={movie.title}
            className=''
            onClick={() => handleSelectedMovie(movie)}
          >
            <Image
              src={`${movie.primaryposter}`}
              width={230}
              height={300}
              alt={movie.title}
              className='rounded-lg cursor-pointer hover:opacity-70 transition ease-linear duration-200 hover:scale-105 hover:-translate-y-2'
            />
          </div>
        ))}
      </section>
      <h2 className='my-8 font-semibold text-3xl'>Classics</h2>
      <section className='grid grid-cols-6 mr-5 gap-6 relative z-1'>
        {classics.map((classic) => (
          <div
            key={classic.title}
            className=''
            onClick={() => handleSelectedMovie(classic)}
          >
            <Image
              src={`${classic.primaryposter}`}
              width={230}
              height={300}
              alt={classic.title}
              className='rounded-sm cursor-pointer hover:opacity-70 transition ease-linear duration-200 hover:scale-105 hover:-translate-y-2'
            />
          </div>
        ))}
      </section>
    </div>
  );
};

export default MainContent;
