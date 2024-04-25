'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import styles from './MainContent.module.css';
import { FaImdb, FaHeart, FaRegHeart } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import movies from '@/data/MoviesData';
import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';

const MainContent = () => {
  const movie = movies[0];

  const [results, setResults] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(movie);
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

  const handleSelectedMovie = (movie: any) => {
    setSelectedMovie(movie);
  };

  const [isFavourite, setFavourite] = useState<Boolean>(false);

  const makeFav = async (movieId: any) => {
    try {
      const response = await fetch(`/api/favourite`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ _id: movieId }),
      });

      if (response.status === 409) {
        console.log('executed');
        toast.success('Already in the list');
        setFavourite(true);
      }

      if (response.ok) {
        setFavourite(true);
        toast.success('Add to Favourites');
        return;
      }
    } catch (error) {
      console.error('Error toggling favorite:', error);
    }
  };

  const removeFav = async (movieId: any) => {
    try {
      const response = await fetch(`/api/favourite`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ _id: movieId }),
      });

      if (!response.ok) {
        console.error('Failed to remove favorite');
        return;
      }
      toast.success('Removed successfully');
      setFavourite(false);
      console.log(response);
    } catch (error) {
      console.error('Error removing favorite:', error);
    }
  };

  const handlePush = (selectedMovie: any) => {
    router.push(`/home/${selectedMovie.title}`);
  };

  return (
    <div className='text-white'>
      <Toaster />
      <div key={selectedMovie?._id} className='text-white px-6'>
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
          <div className='inline-flex flex-wrap'>
            <button
              onClick={handlePush}
              className='py-2 px-16 text-xl my-2 rounded-full transition duration-300 hover:bg-red-700 bg-red-600'
            >
              Play
            </button>
            <button
              onClick={handlePush}
              className='py-2 px-8 text-xl my-2 rounded-full transition duration-300 hover:bg-slate-400 bg-white text-black ml-3'
            >
              Watch Trailer
            </button>
            {isFavourite ? (
              <FaHeart
                onClick={() => removeFav(selectedMovie._id)}
                className='my-3 ml-4 text-4xl text-red-500'
              />
            ) : (
              <FaRegHeart
                onClick={() => makeFav(selectedMovie._id)}
                className='my-3 ml-4 text-4xl'
              />
            )}
          </div>
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
        {results.map((movie: any) => (
          <div
            key={movie._id}
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
    </div>
  );
};

export default MainContent;
``