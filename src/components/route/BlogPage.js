import React from "react";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const BlogPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    setSearchParams({ search: "evondev" });
  }, []);
  return <div>Blog page</div>;
};

export default BlogPage;
