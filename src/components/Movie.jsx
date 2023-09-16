import React, { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import imdb from '../assets/imdb.png';
import apple from '../assets/apple.png';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Movie = ({ item }) => {
  const [likes, setLikes] = useState({});

  const toggleLike = (movieId) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [movieId]: !prevLikes[movieId],
    }));
  };

  return (
    <div className="cursor-pointer relative p-2">
      <div key={item.id} className="relative">
        {/* Use Link to navigate to the MoviePage with the movie's ID */}
        <Link to={`/MoviePage/${item.id}`}>
          <img
            className="object-contain rounded-md cursor-pointer"
            src={`https://image.tmdb.org/t/p/w500/${item?.poster_path}`}
            alt={item?.title}
            data-testid="movie-poster"
          />
        </Link>
        <p
          onClick={() => toggleLike(item.id)}
          className="absolute top-12 right-8 text-gray-400 border-none p-2 md:mr-[22px] bg-gray-200 rounded-full cursor-pointer"
        >
          {likes[item.id] ? (
            <FaHeart className="text-[18px]" />
          ) : (
            <FaRegHeart className="text-[18px]" />
          )}
        </p>
      </div>

      <div className="w-full h-full bg-white text-black">
        <div className="left-2">
          <p className="text-xs font-bold mt-4" 
          data-testid="movie-release-date">
            {item?.release_date}
          </p>
          <p data-testid="movie-title"
           className="md:text-xl text:sm font-bold text-black mt-4">{item?.title}</p>
          <div className="grid md:flex flex-col mt-4 justify-between">
            <div className="grid md:flex items-center">
              <img src={imdb} alt="/" />
              <p className="ml-2">{item?.vote_average}/100</p>
              <div className="flex items-center ml-4">
                <img className="pr-1" src={apple} alt="/" />
                <p>{item?.vote_count.toFixed(0)}%</p>
              </div>
            </div>
            <p className="text-gray-600 mt-2">Action, Adventure, Horror</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
