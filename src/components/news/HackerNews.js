import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

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
        `https://hn.algolia.com/api/v1/search?qery=${query}`
      );
      setHits(response.data?.hits || []);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setErrorMessage(`The error happened ${error}`);
      setLoading(false);
    }
  };
  useEffect(() => {
    handleFetchData.current();
  }, [query]);
  return (
    <div>
      <input
        type="text"
        className="p-5 mb-5 border border-green-500 text-black"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {loading && (
        <div className="loading w-8 h-8 rounded-full border border-blue-500 border-4 border-r-white animate-spin"></div>
      )}
      {!loading && errorMessage && <p>{errorMessage}</p>}
      {!loading &&
        hits.length > 0 &&
        hits.map((item, index) => <h3 key={item.objectID}>{item.title}</h3>)}
    </div>
  );
};

export default HackerNews;
