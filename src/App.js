import React from "react";
import { Routes, Route } from "react-router-dom";
import BlogPage from "./components/route/BlogPage";
import BlogPageDetails from "./components/route/BlogPageDetails";
import Nav from "./components/route/Nav";
import ProfilePage from "./components/route/ProfilePage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<Nav></Nav>}>
          <Route path="/" element={<>Home page</>}></Route>
          <Route path="/blog" element={<BlogPage></BlogPage>}></Route>
          <Route
            path="/blog:slug"
            element={<BlogPageDetails></BlogPageDetails>}
          ></Route>
          <Route path="/profile" element={<ProfilePage></ProfilePage>}></Route>
        </Route>
        <Route path="*" element={<>This is 404 page</>}></Route>
      </Routes>
    </div>
  );
};

export default App;
