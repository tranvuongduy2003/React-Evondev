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
    case "TRY": {
      const { hits, loading } = action.payload;
      const nextState = JSON.parse(JSON.stringify(state));
      nextState.hits = hits;
      nextState.loading = loading;
      return nextState;
    }

    case "CATCH": {
      const { errorMessage, loading } = action.payload;
      const nextState = JSON.parse(JSON.stringify(state));
      nextState.errorMessage = errorMessage;
      nextState.loading = loading;
      return nextState;
    }

    case "CHANGE": {
      return { ...state, query: action.payload };
    }

    case "CLICK": {
      return { ...state, url: action.url };
    }

    default:
      break;
  }
};

const HackerNewsClone = () => {
  const [state, dispatch] = useReducer(hackerNewsReducer, initialState);

  const handleFetchData = useRef([]);
  handleFetchData.current = async () => {
    try {
      dispatch({
        type: "TRY",
        payload: {
          hits: [],
          loading: true,
        },
      });
      const response = await axios.get(
        `https://hn.algolia.com/api/v1/search?query=${state.query}`
      );
      dispatch({
        type: "TRY",
        payload: {
          hits: response.data?.hits || [],
          loading: false,
        },
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: "CATCH",
        payload: {
          errorMessage: `The error happened ${error}`,
          loading: false,
        },
      });
    }
  };
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
              type: "CHANGE",
              payload: e.target.value,
            })
          }
        />
        <button
          onClick={() =>
            dispatch({
              type: "CLICK",
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

export default HackerNewsClone;
