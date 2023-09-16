import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { AiOutlineRight } from 'react-icons/ai'; // Import the right arrow icon

import Movie from './Movie';

const Row = ({ title, fetchURL }) => {
  const [movies, setMovies] = useState([]);
  const slideRight = () => {
    var slider = document.getElementById('slider')
    slider.scrollRight = slider.scrollRight = 500;
  }
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(fetchURL);
        setMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Call the fetchData function when the component mounts
  }, [fetchURL]);

  console.log(movies);

  return (
    <div className="my-6 bg-white w-full">
      <div className="flex justify-between mx-4">
        <h2 className="text-black font-bold md:text-2xl text-xl p-4">{title}</h2>
        <div className="inline-flex text-red-800 font-semibold cursor-pointer my-[14px] ">
          See More 
          <AiOutlineRight  onClick ={slideRight}
          className=" w-4 my-[0.3em] ml-4" />
        </div>
      </div>
      
        {/* <AiOutlineRight onClick ={slideRight}
        className =" bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer"
        size ={40}
        /> */}

        <div
          id={'slider'}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 w-full h-full gap-4 overflow-x-scroll whitespace-nowrap relative"
          style={{ overflowY: 'hidden', scrollbarWidth: 'none' }} // Hide vertical scrollbar
        >
          {movies.map((item) => (
            <Movie key={item.id} item={item} />
          ))}
      
      </div>
    </div>
  );
};

export default Row;
