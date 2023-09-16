import React, { useEffect, useState } from 'react'
import requests from '../Requests'
import axios from 'axios'
import { FaPlayCircle } from 'react-icons/fa'
import imdb from '../assets/imdb.png'
import apple from '../assets/apple.png'

const Main = () => {
    const [movies, setMovies] = useState ([])
    
    const movie = movies[Math.floor(Math.random() * movies.length )]; 

  
    useEffect(() => {
        axios.get(requests.requestTrending).then((response) =>{
          setMovies(response.data.results);
        });
      }, []);
       //console.log(movies)
       const truncateString = (str, num) => {
        if (str?.length > num) {
          return str.slice(0, num) + '...';
        } else {
          return str;
        }
      };

  return (
    <div className='w-full h-[650px] text-white'>
       <div className='w-full h-full '>
        <div className='absolute w-full h-[650px] bg-gradient-to-r from-black/10'></div>
          <img className='w-full h-full object-cover'
          data-testid="movie-card"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title}/>
        <div className='absolute top-[20%] p-4 md:p-8 my-4 px-8 h-[285px] flex-col justify-start items-start gap-4 inline-flex w-[404px]'>
       
         <h1 className=' text-3xl md:text-5xl font-semibold w-full'>{movie?.title}</h1>
         <p>{movie?.tagline}</p>
         
          <div className='w-[404px] h-[285px] flex-col justify-start items-start gap-4 inline-flex'>
           <div className='flex justify-between gap-4'>
           <img src={imdb} alt='/'/>
           <p>{movie?.vote_average}/100</p>
           
           <div className='flex justify-between'>
           <img className='pr-1' src={apple} alt='/'/>
           <p>{movie?.popularity}%</p>
           </div>
           </div>
          </div>
         <p className='w-[322px] md:w-[600px] text-white text-sm md:text-xl py-4 font-medium leading-[18px]'>
            {truncateString (movie?.overview, 200)}</p>
         
         <div className=' absolute bottom-[-60%] md:top[100%] '>
            <div className='bg-rose-700 text-white w-[169px] h-[48px] px-2 py-4 md:mt-6 rounded-md flex cursor-pointer hover:bg-red-800'>
              <FaPlayCircle className='mr-2 w-[40px] mt-[-4px]' />
              <p className='w-[190px] my-[-9px]'>Watch Triller</p>
            </div>
          </div>

        </div>

       </div>
    </div>
  )
}

export default Main