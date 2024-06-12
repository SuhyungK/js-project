import { useState } from "react";
import "./Editor.css";
import EmotionItem from "./EmotionItem";
import Button from "../Button/Button";

const Editor = () => {
  const [todayDate, setTodayDate] = useState(new Date());

  const onChangeTodayDate = (e) => {
    setTodayDate(new Date(e.target.value));
  };

  return (
    <div className="Editor">
      <div className="today-date">
        <h3>오늘의 날짜</h3>
        <input type="date" onChange={onChangeTodayDate} />
      </div>
      <div className="today-emotion">
        <h3>오늘의 감정</h3>
        <EmotionItem />
      </div>
      <div className="today-diary">
        <h3>오늘의 일기</h3>
        <textarea name="" id="" placeholder="오늘은 어땠나요?"></textarea>
      </div>
      <div className="editor-footer">
        <Button text={"취소하기"} />
        <Button text={"작성 완료"} />
      </div>
    </div>
  );
};

export default Editor;
