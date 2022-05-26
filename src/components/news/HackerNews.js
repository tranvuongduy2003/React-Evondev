import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

// https://hn.algolia.com/api/v1/search?query=react

const HackerNews = () => {
  const [hits, setHits] = useState([]);
  const [query, setQuery] = useState("react");
  const handleFetchData = useRef([]);
  handleFetchData.current = async () => {
    try {
      const response = await axios.get(
        `https://hn.algolia.com/api/v1/search?query=${query}`
      );
      setHits(response.data?.hits || []);
    } catch (error) {
      console.log(error);
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
      {hits.length &&
        hits.map((item, index) => <h3 key={item.objectID}>{item.title}</h3>)}
    </div>
  );
};

export default HackerNews;
