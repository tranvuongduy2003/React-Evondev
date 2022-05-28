import axios from "axios";
import { debounce } from "lodash";
import React, { useEffect, useState } from "react";
import useDebounce from "../../hooks/useDebounce";

// https://api.themoviedb.org/3/movie/550?api_key=7e12d3869fc93c0d942c505c589fe77a
// https://api.themoviedb.org/3/search/movie?api_key=7e12d3869fc93c0d942c505c589fe77a&query=''

const MovieSearchApp = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const queryDebounce = useDebounce(query, 500);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=7e12d3869fc93c0d942c505c589fe77a&query='${queryDebounce}'`
        );
        setMovies(response?.data?.results || []);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [queryDebounce]);

  return (
    <div className="p-10">
      <div className="w-full max-w-[500px] mx-auto mb-20">
        <input
          type="text"
          className="w-full p-5 rounded-lg shadow-[0px_0px_0px_3px_rgba(125,_106,_255,_0.2)] border-2 border-gray-400 focus:border-purple-500 outline-none"
          placeholder="Search movie"
          onChange={(e) => debounce(setQuery(e.target.value), 1000)}
        />
      </div>
      <div className="grid grid-cols-3 gap-10">
        {movies.length > 0 &&
          movies.map((movie, index) => (
            <MovieItem key={movie.id} data={movie}></MovieItem>
          ))}
      </div>
    </div>
  );
};

const MovieItem = ({ data }) => {
  return (
    <div className="bg-white p-3 rounded-2xl shadow-sm flex flex-col">
      <div className="h-[297px]">
        <img
          className="h-full w-full object-cover rounded-lg"
          src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
          alt=""
        />
      </div>
      <div className="p-7 flex-1 flex flex-col">
        <h3 className="text-lg text-black font-semibold mb-4">
          {data.original_title}
        </h3>
        <p className="text-[#999] text-sm mb-6 !leading-loose">
          {data.overview}
        </p>
        <div className="flex items-center gap-x-3 mt-auto">
          <img src="./star.svg" alt="" />
          <span className="text-sm font-semibold text-[#333]">
            {data.vote_average}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MovieSearchApp;
