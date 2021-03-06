import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="px-2 py-2 text-5xl text-red-600">The Dojo Blog</h1>
      <div className="links">
        <Link
          to="/"
          className="text-2xl text-blue-400 no-underline hover:underline"
        >
          Home
        </Link>
        <Link
          to="/create"
          className="text-2xl text-blue-400 no-underline hover:underline"
        >
          New Blog
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
