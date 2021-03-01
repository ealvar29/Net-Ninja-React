const Navbar = () => {
  return (
    <nav className="flex flex-wrap items-center justify-between p-2">
      <h1 className="text-5xl px-2 py-2 text-red-600">The Dojo Blog</h1>
      <a
        href="/"
        className="text-3xl px-2 py-2 text-blue-400 no-underline hover:underline"
      >
        Home
      </a>
      <a
        href=""
        className="text-3xl px-2 py-2 text-blue-400 no-underline hover:underline"
      >
        New Blog
      </a>
    </nav>
  );
};

export default Navbar;
