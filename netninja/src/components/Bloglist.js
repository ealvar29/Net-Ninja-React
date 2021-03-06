import { useState } from "react";
import { Link } from "react-router-dom";
const Bloglist = ({ blogs }) => {
  return (
    <div>
      {blogs.map((blog) => (
        <div
          key={blog.id}
          className="grid py-5 mt-5 justify-items-start hover:shadow-xl px-7"
        >
          <Link to={`/blogs/${blog.id}`}>
            <h2 className="font-bold">{blog.title}</h2>
            <p>Written By {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Bloglist;
