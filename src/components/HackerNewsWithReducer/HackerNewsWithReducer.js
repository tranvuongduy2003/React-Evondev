import React, { useEffect, useReducer, useRef, useState } from "react";
import axios from "axios";
import lodash, { set } from "lodash";
// https://hn.algolia.com/api/v1/search?query=react

const initialState = {
  hits: [],
  query: "react",
  loading: true,
  errorMessage: "",
  url: `https://hn.algolia.com/api/v1/search?query=react`,
};

const hackerNewsReducer = (state, action) => {
  switch (action.type) {
    case "SET_DATA": {
      return { ...state, hits: action.payload };
    }

    case "SET_LOADING": {
      return { ...state, loading: action.loading };
    }

    case "SET_ERROR": {
      return { ...state, errorMessage: action.payload };
    }

    case "SET_QUERY": {
      return { ...state, query: action.payload };
    }

    case "SET_URL": {
      return { ...state, url: action.url };
    }

    default:
      break;
  }
};

const HackerNewsWithReducer = () => {
  const [state, dispatch] = useReducer(hackerNewsReducer, initialState);

  const handleFetchData = useRef([]);
  // const [hits, setHits] = useState([]);
  // const [query, setQuery] = useState("react");
  // const [loading, setLoading] = useState("react");
  // const [errorMessage, setErrorMessage] = useState("");
  // const [url, setUrl] = useState(
  //   `https://hn.algolia.com/api/v1/search?query=${query}`
  // );
  handleFetchData.current = async () => {
    dispatch({
      type: "SET_LOADING",
      payload: true,
    });
    try {
      // setLoading(true);
      const response = await axios.get(
        `https://hn.algolia.com/api/v1/search?query=${state.query}`
      );
      dispatch({
        type: "SET_DATA",
        payload: response.data?.hits || [],
      });
      dispatch({
        type: "SET_LOADING",
        payload: false,
      });
      // setHits(response.data?.hits || []);
      // setLoading(false);
    } catch (error) {
      console.log(error);
      dispatch({
        type: "SET_ERROR",
        payload: `The error happened ${error}`,
      });
      dispatch({
        type: "SET_LOADING",
        payload: false,
      });
      // setErrorMessage(`The error happened ${error}`);
      // setLoading(false);
    }
  };
  //   const handleUpdateQuery = lodash.debounce((e) => {
  //     setQuery(e.target.value);
  //   }, 500);
  useEffect(() => {
    handleFetchData.current();
  }, [state.url]);
  return (
    <div className="bg-white mx-auto mt-5 mb-5 p-5 rounded-lg shadow-md w-2/4">
      <div className="flex mb-5 gap-x-5">
        <input
          type="text"
          className="border-2 border-gray-200 block w-full rounded-md p-5 transition-all focus:border-blue-400 outline-none"
          placeholder="Typing your key word"
          defaultValue={state.query}
          onChange={(e) =>
            dispatch({
              type: "SET_QUERY",
              payload: e.target.value,
            })
          }
        />
        <button
          onClick={() =>
            dispatch({
              type: "SET_URL",
              payload: `https://hn.algolia.com/api/v1/search?query=${state.query}`,
            })
          }
          className="bg-blue-500 text-white font-semibold p-5 rounded-md flex-shrink-0"
        >
          Fetching
        </button>
      </div>
      {state.loading && (
        <div className="loading w-8 h-8 rounded-full border-blue-500 border-4 border-r-white animate-spin mx-auto my-10"></div>
      )}
      {!state.loading && state.errorMessage && (
        <p className="text-red-400 my-5">{state.errorMessage}</p>
      )}
      <div className="flex flex-wrap gap-5">
        {!state.loading &&
          state.hits.length > 0 &&
          state.hits.map((item, index) => {
            if (!item.title || item.title.length <= 0) return null;
            return (
              <h3 key={item.objectID} className="p-3 bg-gray-100 rounded-md">
                {item.title}
              </h3>
            );
          })}
      </div>
    </div>
  );
};

export default HackerNewsWithReducer;
