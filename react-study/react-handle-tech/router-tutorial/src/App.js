import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Profile from "./Profile";
import Profiles from "./Profiles";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profiles" element={<Profiles />}>
          <Route path=":username" element={<Profile />} />
        </Route>
      </Routes>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">상세</Link>
        </li>
        <li>
          <Link to="/profiles">프로필</Link>
        </li>
        {/* <li>
          <Link to="/profile/velopert">강소라</Link>
        </li>
        <li>
          <Link to="/profile/gildong">홍길동</Link>
        </li> */}
      </ul>
    </>
  );
}

export default App;
