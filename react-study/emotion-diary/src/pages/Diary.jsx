import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import Button from "../components/Button/Button";
import { useContext, useEffect, useState } from "react";
import { DiaryStateContext } from "../App";
import Viewer from "../components/Viewer/Viewer";
import useDiary from "../hooks/useDiary";

const Diary = () => {
  const { id } = useParams();
  const curDiaryItem = useDiary(id);

  if (!curDiaryItem) {
    return <div>로딩 중...</div>;
  }

  const { createdDate, emotionId, content } = curDiaryItem;

  return (
    <div>
      <Header
        title={`${createdDate}`}
        leftChild={<Button text={"< 뒤로 가기 "} />}
        rightChild={<Button text={"수정하기"} />}
      />
      <Viewer />
    </div>
  );
};

export default Diary;
