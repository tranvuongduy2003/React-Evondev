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

  return <div></div>;
};

export default MovieSearchApp;
