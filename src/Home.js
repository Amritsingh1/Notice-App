import NoticeList from "./noticeList";
import useFetch from "./useFetch";
const Home = () => {
  const {
    data: notices,
    isPending,
    error,
  } = useFetch("http://localhost:8000/notices");

  //dependencies to selectively render
  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {notices && <NoticeList notices={notices} />}
    </div>
  );
};

export default Home;
