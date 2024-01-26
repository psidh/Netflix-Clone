'use client';
import { useEffect, useState } from 'react';
import Movies from '@/data/MoviesData';
import Image from 'next/image';
import { FaImdb } from 'react-icons/fa';
import YoutubeEmbed from '@/components/YoutubeTrailer';
import VideoPlayer from '@/components/YTVideo';
import styles from './MainContent.module.css';

const MainContent = () => {
  const movies = Movies;

  const [selectedMovie, isSelectedMovie] = useState(movies[0]);
  const handleSelectedMovie = (movie: any) => {
    isSelectedMovie(movie);
  };

  const [show, setShow] = useState<Boolean>(false);

  const handleTrailer = (movie: any) => {
    setShow(true);
  };
  return (
    <div>
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
          <button className='py-3 px-12 text-xl my-2 rounded-full transition duration-300 hover:bg-red-700 bg-red-600'>
            Play
          </button>
          <button onClick={handleTrailer}
            className='py-3 px-12 text-xl my-2 rounded-full transition duration-300 hover:bg-white bg-gray-300 text-slate-600 ml-3'>
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

      {/* Carousel - Map */}
      <section className='grid grid-cols-8 gap-6 mt-64 relative z-1'>
        {movies.map((movie) => (
          <div
            key={movie.title}
            className='mt-24'
            onClick={() => handleSelectedMovie(movie)}
          >
            <Image
              src={`${movie.primaryposter}`}
              width={230}
              height={300}
              alt={movie.title}
              className='rounded-sm cursor-pointer hover:opacity-70 transition ease-linear duration-200 hover:scale-105 hover:-translate-y-2'
            />
          </div>
        ))}

        {show ? (
          <div className='absolute top-1 left-1 z-1'>
            {/* <YoutubeEmbed embedId={"zSWdZVtXT7E"} /> */}
            <VideoPlayer />
          </div>
        ) : (
          <div></div>
        )}
      </section>
    </div>
  );
};

export default MainContent;
