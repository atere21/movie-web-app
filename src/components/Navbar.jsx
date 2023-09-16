// import React, { useState, useEffect } from "react";
// import { FaSearch } from "react-icons/fa";
// import logo from "../assets/tv.png";
// import menu from "../assets/Menu.png";
// import Main from "./Main";

// const Navbar = () => {
//   const [query, setQuery] = useState("");
//   const [movies, setMovies] = useState([]);
//   const [isSearching, setIsSearching] = useState(false); // Track whether a search is in progress

//   const API_KEY = "6308e98f9cc4c1f4bb89a792df3bfbf5";
//   const API_SEARCH = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&query=`;

//   useEffect(() => {
//     // Fetch movies only when there's a search query and isSearching is true
//     if (query && isSearching) {
//       fetchMovies();
//     }
//   }, [query, isSearching]);

//   const fetchMovies = async () => {
//     try {
//       const url = `${API_SEARCH}${query}`;
//       const res = await fetch(url);
//       const data = await res.json();
//       console.log(data);
//       setMovies(data.results);
//     } catch (e) {
//       console.log(e);
//     }
//   };

//   const searchMovie = (e) => {
//     e.preventDefault();
//     console.log("Searching");
//     setIsSearching(true); // Set isSearching to true when searching
//   };

//   const changeHandler = (e) => {
//     setQuery(e.target.value);
//   };

//   return (
//     <div className="text-white absolute w-full top-0 flex items-center justify-between p-4 z-10 px-12">
//       <div className="flex items-center p-2">
//         <img className="h-10 w-10" src={logo} alt="logo" />
//         <h2 className="font-bold text-white text-xl cursor-pointer ml-2">
//           MovieBox
//         </h2>
//       </div>
//       <div className="relative">
//         <label htmlFor="search" className="sr-only">
//           Search
//         </label>
//         <form onSubmit={searchMovie}>
//           <input
//             id="search"
//             type="text"
//             placeholder="What do you want to watch?"
//             className="bg-transparent border-2 border-gray-100 text-white pl-10 pr-4 py-2 rounded-md w-[525px] h-[36px] hidden md:flex"
//             style={{ "::placeholder": { color: "white" } }}
//             value={query}
//             name="query"
//             onChange={changeHandler}
//           />
//           <div className="absolute right-3 top-3 text-white">
//             <button
//               className="absolute right-3 top-3 text-white"
//               type="submit"
//               onClick={searchMovie}
//             >
//               <FaSearch className="cursor-pointer hidden md:flex" />
//             </button>
//           </div>
//         </form>

//         <div>
//           {movies.length > 0 ? (
//             <div className="w-200px h-200 justify-center items-center mx-auto">
//               <div className="grid">
//                 {movies.map((movieReq) => (
//                   <Main key={movieReq.id} {...movieReq} />
//                 ))}
//               </div>
//             </div>
//           ) : (
//             isSearching && (
//               <h2 className="text-sm hidden md:flex">
//                 Sorry !! No Movies Found
//               </h2>
//             )
//           )}
//         </div>
//       </div>
//       <div className="flex items-center flex-row">
//         <button className="text-white hover:text-gray-100 bg-transparent px-4 py-2 rounded cursor-pointer font-bold">
//           Sign In
//         </button>
//         <img className="w-8 h-8 ml-4 cursor-pointer" src={menu} alt="menu" />
//       </div>
//     </div>
//   );
// };

// export default Navbar;

// {
//   /* <div className='flex items-center justify-between p-2 border-black rounded-full gap-12'>
//                <div className=''>
//             <p className='h-8 bg-red-600 rounded-md p-2  text-white'>Top rated movie #65</p>
//             <span>Awards 9 Nominations</span>
//              <AiOutlineDown className='h-6 '/>
//              </div>
//              </div> */
// }
