import useFetch from "../useFetch";
import Bloglist from "./Bloglist";

const Home = () => {
  const { data: blogs, isLoading, Error: error } = useFetch(
    "http://localhost:3000/blogs"
  );

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isLoading && <h1 className="text-5xl">Loading!</h1>}
      {blogs && <Bloglist blogs={blogs} />}
    </div>
  );
};

export default Home;
