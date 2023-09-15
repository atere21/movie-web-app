import React from "react";
import star from "../assets/Star.png";
import tickets from "../assets/tickets.png";
import List from "../assets/List.png";

const WatchMore = () => {
  return (
    <div className="bg-red-800 w-[126] h-[29] left-[466px] top-0 absolute hidden md:block">
      <div className="w-126 h-9 left-[216px] top-0 absolute ">
        <img src={star} className="w-7 h-7 left-[-42px] top-[3px] absolute" />
    
          <span className="text-gray-200 text-2xl font-medium ">8.5 </span>
          <span className="text-stone-500 text-xl font-medium ">| 350k</span>
          <div className="flex items-center flex-grow">
            <span className="w-[212px] p-2  bg-rose-700 text-white rounded-lg inline-flex items-center justify-center my-8 ml-[-50%]">
              <img src={tickets} alt="Tickets" className="w-8 h-8" />See Showtimes
            </span>
            </div>
            <span className="w-[212px] p-2  bg-rose-300 text-black rounded-lg inline-flex items-center justify-center ml-[-50%]">
              <img src={List} alt="Tickets" className="w-8 h-8" />Watch More Options
            </span>
          
        </div>
      </div>
  );
};

export default WatchMore;
