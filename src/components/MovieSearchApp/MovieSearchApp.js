import axios from "axios";
import React, { useEffect } from "react";

// https://api.themoviedb.org/3/movie/550?api_key=7e12d3869fc93c0d942c505c589fe77a
// https://api.themoviedb.org/3/search/movie?api_key=7e12d3869fc93c0d942c505c589fe77a&query=''

const MovieSearchApp = () => {
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=7e12d3869fc93c0d942c505c589fe77a&query=''`
      );
    }
  }, []);

  return (
    <div className="p-10">
      <div className="w-full max-w-[500px] mx-auto mb-20">
        <input
          type="text"
          className="w-full p-5 rounded-lg shadow-[0px_0px_0px_3px_rgba(125,_106,_255,_0.2)] border-2 border-gray-400 focus:border-purple-500 outline-none"
          placeholder="Search movie"
        />
      </div>
      <div className="grid grid-cols-3 gap-10">
        <MovieItem></MovieItem>
        <MovieItem></MovieItem>
        <MovieItem></MovieItem>
      </div>
    </div>
  );
};

const MovieItem = () => {
  return (
    <div className="bg-white p-3 rounded-2xl shadow-sm">
      <div className="h-[297px]">
        <img
          className="h-full w-full object-cover rounded-lg"
          src="https://images.unsplash.com/photo-1653686893504-8287ae6c2dab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=978&q=80"
          alt=""
        />
      </div>
      <div className="p-7">
        <h3 className="text-lg text-black font-semibold mb-4">
          Hotel Transylvania: Puppy!
        </h3>
        <p className="text-[#999] text-sm mb-6">
          The residents of Hotel Transylvania find their world turned
          upside-down when youngster Dennis gets a surprise monster-sized pet.
        </p>
        <div className="flex items-center gap-x-3">
          <img src="./star.svg" alt="" />
          <span className="text-sm font-semibold text-[#333]">6.4</span>
        </div>
      </div>
    </div>
  );
};

export default MovieSearchApp;
