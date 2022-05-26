import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import lodash, { set } from "lodash";

// https://hn.algolia.com/api/v1/search?query=react

const HackerNews = () => {
  const [hits, setHits] = useState([]);
  const [query, setQuery] = useState("react");
  const [loading, setLoading] = useState("react");
  const [errorMessage, setErrorMessage] = useState("");
  const handleFetchData = useRef([]);
  handleFetchData.current = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://hn.algolia.com/api/v1/search?query=${query}`
      );
      setHits(response.data?.hits || []);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setErrorMessage(`The error happened ${error}`);
      setLoading(false);
    }
  };
  const handleUpdateQuery = lodash.debounce((e) => {
    setQuery(e.target.value);
  }, 500);
  useEffect(() => {
    handleFetchData.current();
  }, [query]);
  return (
    <div className="bg-white mx-auto mt-5 mb-5 p-5 rounded-lg shadow-md w-2/4">
      <input
        type="text"
        className="border-2 border-gray-200 block w-full rounded-md p-5 mb-5 transition-all focus:border-blue-400 outline-none"
        placeholder="Typing your key word"
        defaultValue={query}
        onChange={handleUpdateQuery}
      />
      {loading && (
        <div className="loading w-8 h-8 rounded-full border-blue-500 border-4 border-r-white animate-spin mx-auto my-10"></div>
      )}
      {!loading && errorMessage && (
        <p className="text-red-400 my-5">{errorMessage}</p>
      )}
      <div className="flex flex-wrap gap-5">
        {!loading &&
          hits.length > 0 &&
          hits.map((item, index) => (
            <h3 key={item.objectID} className="p-3 bg-gray-100 rounded-md">
              {item.title}
            </h3>
          ))}
      </div>
    </div>
  );
};

export default HackerNews;
