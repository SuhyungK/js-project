import "./Main.css";

const Main = () => {
  const user = {
    name: "임솔",
    isLogin: true,
  };

  if (user.isLogin) {
    return <div className="logout">로그아웃</div>;
  } else {
    return <div>로그인</div>;
  }

  // {/* return <main>{user.isLogin ? <div>로그아웃</div> : <div>로그인</div>}</main>; */}
};

export default Main;
