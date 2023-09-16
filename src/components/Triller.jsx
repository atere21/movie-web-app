import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'; // Import useParams from react-router-dom
import requests from '../Requests'; // Import your requests file
import MovieDetails from './MovieDetails';
import MainMovie from './MainMovie';

const Triller = () => {
  const { id } = useParams(); // Get the movie ID from URL parameters
  const [movie, setMovie] = useState(null); // Use state to store the selected movie
  const [likes, setLikes] = useState({});

  const toggleLike = (movieId) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [movieId]: !prevLikes[movieId], // Toggle the like status for the movie
    }));
  };

  useEffect(() => {
    // Fetch trending movies data
    axios.get(requests.requestTrending).then((response) => {
      // Assuming you want to set the first movie in the trending list
      if (response.data.results && response.data.results.length > 0) {
        setMovie(response.data.results[0]);
      }
    });
  }, []); // Fetch data when the component mounts

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
          {/* Display movie details */}
          {movie && (
            <>
              <img 
                className="rounded-2xl"
                src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
                alt={movie?.title}
              />
              <h1>{movie?.title}</h1>
              {/* Add more movie details here */}
            </>
          )}
        </div>
        <MainMovie />
      </div>
    </div>
  );
}

export default Triller;
