

import React, { useEffect, useState } from 'react';

import logo from "../assets/tv.png";
import home from "../assets/Home.png"
import Calender from "../assets/Calendar.png"
import projector from "../assets/projector.png"
import Tv from "../assets/tvshow.png"
import logout from "../assets/Logout.png"


  const MovieDetails = () => {


  return (
    <div className="rounded-tr-3xl h-full md:h-full rounded-br-3xl border border-black border-opacity-30 md:my-0 my-[-12%]">
        
      {/* Left Side */}
     
          <div className="grid w-full h-full p-4">
            <div className='flex items-center py-8'>
              <img className="h-10 w-10" 
              src={logo} alt="logo" />
              <h2 className="font-bold text-black text-xl cursor-pointer ml-2">
                MovieBox
              </h2>
            </div>

            <div className='flex pt-6 items-center py-8'>
              <img className="h-10 w-10" src={home} alt="home" />
              <h2 className="text-sm text-gray-500  font-bold cursor-pointer ml-2 hover:text-gray-700">
                Home
              </h2>
            </div>
            <div className='flex pt-6 items-center py-8'>
              <img className="h-10 w-10" src={projector} alt="movies" />
              <h2 className="text-sm text-gray-500  font-bold cursor-pointer ml-2 hover:text-gray-700">
                Movies
              </h2>
            </div>

            <div className='flex pt-6 items-center py-8 '>
              <img className="h-10 w-10" src={Tv} alt="tv" />
              <h2 className="text-sm text-gray-500  font-bold cursor-pointer ml-2 hover:text-gray-700">
                Tv Series
              </h2>
            </div>

            <div className='flex pt-6 items-center py-8'>
              <img className="h-10 w-10" src={Calender} alt="calender" />
              <h2 className="text-sm text-gray-500  font-bold cursor-pointer ml-2 hover:text-gray-700">
                Homecoming
              </h2>
            </div>
                  
            <div className='flex mt-26 items-center bg-red-100 text-black w-[180px] h-[260px]  rounded-[30px] border-red-400 border  mx-[-18px]'>
                <div className='grid p-4'>
                <h2 className='text-xl'> Play movie quizes and earn free tickets</h2>
                <p className='text-sm'>50k people are playing now</p>
              
               <button className='text-red-600 rounded-full bg-red-300 h-10 my-6 cursor-pointer hover:bg-red-400'>Start Playing</button>
               </div>
               </div>
            <div className='flex pt-6 items-center py-8'>
              <img className="h-10 w-10" src={logout} alt="calender" />
              <h2 className="text-sm text-gray-500  font-bold cursor-pointer ml-2 hover:text-gray-700">
                Logout
              </h2>
            </div>
            
          </div>
  

      {/* Right Side */}
    
    </div>
  );
};

export default MovieDetails;
