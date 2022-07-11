import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const BlogPageDetails = () => {
  const navigate = useNavigate();

  return (
    <div>
      Blog page details
      <button
        onClick={() => navigate("/blog")}
        className="p-3 text-white bg-blue-500 rounded-sm"
      >
        Navigate to Blog Page
      </button>
    </div>
  );
};

export default BlogPageDetails;
