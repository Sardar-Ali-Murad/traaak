import React from "react";
import "./index.css";
import search from "../../assets/search.png";
import { blogs } from "./data";
import Pagination from "@mui/material/Pagination";

const Blog = () => {
  return (
    <div className="blogBigMain">
      <h1 className="blogHeaderMain">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean diam
        nunc, commodo.
      </h1>
      <div className="blogSearchBar">
        <div className="placeholderBlog">
          <img src={search} className="blogSearch" />
          <input
            placeholder="Search posts, tags and authors"
            className="blogText"
          />
        </div>
        <button className="homeBtnCommon blogBtn">Search</button>
      </div>

      <div className="blogsGrid">
        {blogs.map((blog) => {
          return (
            <div className="singleBlog">
              <img src={blog.img} />
              <h3>{blog.date}</h3>
              <h1>{blog.head}</h1>
              <p>{blog.para}</p>
              <button className="homeBtnCommon">read more</button>
            </div>
          );
        })}
      </div>

      <Pagination count={10} color="primary" className="paginationBlog" />
    </div>
  );
};

export default Blog;
