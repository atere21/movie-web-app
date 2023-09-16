import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import axios from "axios"; // Import axios
import logo from "../assets/tv.png";
import menu from "../assets/Menu.png";
import Main from "./Main";
import requests from "../Requests";

const Navbar = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [isSearching, setIsSearching] = useState(false); // Track whether a search is in progress

  useEffect(() => {
    // Fetch movies only when there's a search query and isSearching is true
    if (query && isSearching) {
      fetchMovies();
    }
  }, [query, isSearching]);

  useEffect(() => {
    axios.get(requests.requestSearch).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  const fetchMovies = async () => {
    try {
      const res = await fetch(`${requests.requestSearch}&query=${query}`);
      const data = await res.json();
      console.log(data);
      setMovies(data.results);
    } catch (e) {
      console.log(e);
    }
  };

  const searchMovie = (e) => {
    e.preventDefault();
    console.log("Searching");
    setIsSearching(true); // Set isSearching to true when searching
  };

  const changeHandler = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="text-white absolute w-full top-0 flex items-center justify-between p-4 z-10 px-12">
      <div className="flex items-center p-2">
        <img className="h-10 w-10" src={logo} alt="logo" />
        <h2 className="font-bold text-white text-xl cursor-pointer ml-2">
          MovieBox
        </h2>
      </div>
      <div className="relative">
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <form onSubmit={searchMovie}>
          <input
            id="search"
            type="text"
            placeholder="What do you want to watch?"
            className="bg-transparent border-2 border-gray-100 text-white pl-10 pr-4 py-2 rounded-md w-[525px] h-[36px] hidden md:flex"
            style={{ "::placeholder": { color: "white" } }}
            value={query}
            name="query"
            onChange={changeHandler}
          />
          <div className="absolute right-3 top-3 text-white">
            <button
              className="absolute right-3 top-3 text-white"
              type="submit"
              onClick={searchMovie}
            >
              <FaSearch className="cursor-pointer hidden md:flex" />
            </button>
          </div>
        </form>

        <div>
          {movies.length > 0 ? (
            <div className="w-200px h-200 justify-center items-center mx-auto">
              <div className="grid">
                {movies.map((movieReq) => (
                  <Main key={movieReq.id} {...movieReq} />
                ))}
              </div>
            </div>
          ) : (
            isSearching && (
              <h2 className="text-sm hidden md:flex">
                Sorry !! No Movies Found
              </h2>
            )
          )}
        </div>
      </div>
      <div className="flex items-center flex-row">
        <button className="text-white hover:text-gray-100 bg-transparent px-4 py-2 rounded cursor-pointer font-bold">
          Sign In
        </button>
        <img className="w-8 h-8 ml-4 cursor-pointer" src={menu} alt="menu" />
      </div>
    </div>
  );
};

export default Navbar;
