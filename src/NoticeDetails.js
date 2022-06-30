import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";
const NoticeDetails = () => {
  const { id } = useParams();
  const history = useHistory();
  const {
    data: notice,
    error,
    isPending,
  } = useFetch("http://localhost:8000/notices/" + id);
  const handleClick = () => {
    //delete
    fetch("http://localhost:8000/notices/" + id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };
  return (
    <div className="notice-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {notice && (
        <article>
          <h2>{notice.title}</h2>
          <p>Issued By {notice.author}</p>
          <div>{notice.body}</div>
          <button onClick={handleClick}>Delete Notice</button>
        </article>
      )}
    </div>
  );
};

export default NoticeDetails;
