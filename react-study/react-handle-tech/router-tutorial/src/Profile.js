import React from "react";
import { useParams } from "react-router-dom";

const data = {
  velopert: {
    name: "강소라",
    description: "리액트 개발자",
  },
  gildong: {
    name: "홍길동",
    description: "연예인",
  },
};

const Profile = () => {
  const { username } = useParams();
  console.log(data);
  const profile = data[username];
  if (!profile) {
    return <div>존재하지 않는 사람임.</div>;
  }
  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  );
};

export default Profile;
