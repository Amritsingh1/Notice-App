import { useState } from "react";
import { useHistory } from "react-router-dom";
const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Amrit");
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();
  //used to redirect
  const handleSubmit = (e) => {
    e.preventDefault();
    const notice = {
      title,
      body,
      author,
    };
    setIsPending(true);
    fetch("http://localhost:8000/notices", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(notice),
    }).then(() => {
      setIsPending(false);
      history.push("/");
    });
  };
  return (
    <div className="create">
      <h2>Add a New Notice</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>Notice title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Notice body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Issued by:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="Amrit">Amrit</option>
          <option value="Ben">Ben</option>
        </select>
        {!isPending && <button>Add Notice</button>}
        {isPending && <button disabled>Adding Notice</button>}
      </form>
    </div>
  );
};

export default Create;
