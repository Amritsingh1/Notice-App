import { Link } from "react-router-dom";

const NoticeList = ({ notices }) => {
  return (
    <div className="notice-list">
      {notices.map((notice) => (
        <div className="notice-preview" key={notice.id}>
          <Link to={`/notices/${notice.id}`}>
            {console.log(notice.id)}
            <h2>{notice.title}</h2>
            <p>Issued by {notice.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default NoticeList;
