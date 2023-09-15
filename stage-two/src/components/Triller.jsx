import React, { useState, useEffect } from 'react';
import axios from 'axios';
import requests from '../Requests'; // Import your requests file
import MovieDetails from './MovieDetails';
import MainMovie from './MainMovie';


const Triller = () => {
  const [movies, setMovies] = useState([]);
  const movie = movies[Math.floor(Math.random() * movies.length)];
  const [likes, setLikes] = useState({});

  const toggleLike = (movieId) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [movieId]: !prevLikes[movieId], // Toggle the like status for the movie
    }));
  };

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + '...';
    } else {
      return str;
    }
  };

  return (
    <div className='w-full bg-white py-12 px-4 left-20'>
      <div className="md:max-w-[1240px] mx-auto md:flex grid absolute top-5">
        <div className="md:w-30 w-full p-4">
          <MovieDetails />
        </div>
        <div className="w-70 p-4">
          {/* Rest of your content */}
          <img 
            className=" rounded-2xl"
            src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
            alt={movie?.title}
          />
        </div>
  
          <MainMovie/>
        
      </div>
    </div>
  );
}

export default Triller;
