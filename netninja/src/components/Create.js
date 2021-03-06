import { useState } from "react";
import { useHistory } from "react-router-dom";
const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Mario");
  const [isLoading, setLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const blog = { title, body, author };
    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("new blog added");
      setLoading(false);
      history.push("/");
    });
  };

  return (
    <div className="max-w-screen-sm mx-auto my-0 text-center">
      <form onSubmit={handleSubmit}>
        <label>Blog Title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog Body: </label>
        <textarea
          type="text"
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label type="text">Blog Author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="Mario">Mario</option>
          <option value="Yoshi">Yoshi</option>
        </select>
        {!isLoading && (
          <button className="px-2 py-2 mt-3 text-white bg-red-500 border-0 rounded-lg cursor-pointer ">
            Add Blog
          </button>
        )}
        {isLoading && (
          <button className="px-2 py-2 mt-3 text-white bg-red-500 border-0 rounded-lg cursor-pointer ">
            Adding Blog...
          </button>
        )}
      </form>
    </div>
  );
};

export default Create;
