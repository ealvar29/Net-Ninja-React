const Tailwind = () => {
  return (
    <div>
      <div>
        <nav>
          <div>
            <h1>
              <a href="/">Food Ninja</a>
            </h1>
          </div>
          <ul>
            <li>
              <a href="/">
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="/">
                <span>About</span>
              </a>
            </li>
            <li>
              <a href="/">
                <span>Contact</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <main>
        <div>
          <a href="/">Log in</a>
          <a href="/">Sign Up</a>
        </div>
        <header>
          <h2>Recipes</h2>
          <h3>For Ninjas</h3>
        </header>
        <div>
          <h4>Latest Recipes</h4>
          <div>
            {/*Cards go here */}
            <div>
              <img src="" alt="" />
              <div>
                <span>5 Bean Chili Stew</span>
                <span>Recipe by Mario</span>
              </div>
            </div>
            {/*End of Cards*/}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Tailwind;
