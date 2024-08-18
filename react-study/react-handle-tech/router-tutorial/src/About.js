import React from "react";
import { useSearchParams } from "react-router-dom";

const About = () => {
  const [query, setQuery] = useSearchParams();
  console.log("about ", query.get("detail"));
  return (
    <div>
      <h1>소개</h1>
      <p>소개 페이지</p>
    </div>
  );
};

export default About;
