import { useHistory, useParams } from "react-router";
import useFetch from "../useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, error, isLoading } = useFetch(
    "http://localhost:3000/blogs/" + id
  );
  const history = useHistory();
  const handleClick = () => {
    fetch("http://localhost:3000/blogs/" + blog.id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };
  return (
    <div className="px-3 py-2 mt-2 border-b hover:shadow-2xl ">
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
          <button
            className="p-2 text-white bg-red-500 border-none rounded-lg cursor-pointer"
            onClick={handleClick}
          >
            Delete Blog
          </button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
