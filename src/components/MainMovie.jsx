import React, { useEffect, useState } from "react";
import requests from "../Requests";
import axios from "axios";
import { AiOutlineDown } from "react-icons/ai";
import WatchMore from "./WatchMore";

const MainMovie = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(requests.requestTrending).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  // Function to select a random movie
  const selectRandomMovie = () => {
    const randomIndex = Math.floor(Math.random() * movies.length);
    return movies[randomIndex];
  };

  // Get a random movie on component mount
  const movie = selectRandomMovie();

  // Function to truncate string
  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <div className="w-[400px] md:w-[600px] h-[400px] md:left-[281px] top-[100%] my-16 md:top-[518px] absolute mx-18  ">
      <div className="bg-white mx-12 flex flex-col">
        <div className="flex mt-2 w-full">
          <p className=" text-black">
            <span 
            data-testid="movie-title"
            className="text-xl font-bold mr-4 ">{movie?.title}</span> 
            <p  data-testid="movie-release-date"
            >{movie?.release_date}</p>
            <span className="ml-2">PG-13.</span>
            <span data-testid="movie-runtime"
            className="ml-2">2h 10mins</span>
          </p>
          <p className="border border-red-500 rounded-full p-2 mr-4 mx-8 text-red-700 font-bold align-center ">
            Action
          </p>
          <p className="border border-red-500 rounded-full p-2 text-red-700 font-bold align-center">
            Drama
          </p>
        </div>
        <p data-testid="movie-overview"
        className="mt-2 text-black leading-[18px] text-sm">
          {truncateString(movie?.overview, 200)}
        </p>
        <div className="">
          <p className=" ">
            Directors: <span className="text-red-700">Joseph Kosinki</span>
          </p>
          <p className="">
            Writers :{" "}
            <span className="text-red-700 ">
              Jim Cash, Jack Epps Jr, Peter Craig
            </span>{" "}
          </p>
          <p className=" ">
            Stars:{" "}
            <span className="text-red-700">
              Tom Cruise, Jennifer Connelly, Miles Teller
            </span>{" "}
          </p>

          <div className="flex items-center border-2 rounded-md h-[50px]">
            <p className="flex-grow h-[50px] bg-red-600 rounded-md p-2 my-[-2px] text-white overflow-hidden whitespace-nowrap overflow-ellipsis">
              Top rated movie #65
            </p>
            <input value="" type="options" placeholder="" />
            <span className="w-[256px]">Awards: 9 Nominations</span>
            <AiOutlineDown className="hidden md:inline-flex h-8 sm:mx-3 text-black cursor-pointer rounded-full w-8 p-2 mx-auto md:mx-2" />
          </div>
        </div>
      </div>
      <WatchMore />
    </div>
  );
};

export default MainMovie;
