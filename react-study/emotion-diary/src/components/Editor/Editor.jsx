import { useEffect, useState } from "react";
import "./Editor.css";
import EmotionItem from "./EmotionItem";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

const emotionList = [
  {
    emotionId: 1,
    emotionName: "완전 좋음",
  },
  {
    emotionId: 2,
    emotionName: "좋음",
  },
  {
    emotionId: 3,
    emotionName: "그럭저럭",
  },
  {
    emotionId: 4,
    emotionName: "나쁨",
  },
  {
    emotionId: 5,
    emotionName: "끔찍함",
  },
];

const getStringedDate = (targetDate) => {
  let year = targetDate.getFullYear();
  let month = targetDate.getMonth() + 1;
  let date = targetDate.getDate();

  if (month < 10) {
    month = `0${month}`;
  }

  if (date < 10) {
    date = `0${date}`;
  }

  return `${year}-${month}-${date}`;
};

const Editor = ({ initData, onSubmit }) => {
  const [input, setInput] = useState({
    createdDate: new Date(),
    emotionId: 1,
    content: "",
  });
  const nav = useNavigate();

  const onChangeInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "createdDate") {
      value = new Date(value);
    }

    setInput({
      ...input,
      [name]: value,
    });
  };

  const onClickSubmitButton = () => {
    onSubmit(input);
  };

  const onKeyDownEnter = (e) => {
    if (e.keyCode === 13) {
      onClickSubmitButton();
    }
  };

  useEffect(() => {
    if (initData) {
      setInput({
        ...initData,
        createdDate: new Date(Number(initData.createdDate)),
      });
    }
  }, [initData]);

  return (
    <div className="Editor">
      <section className="date-section">
        <h3>오늘의 날짜</h3>
        <input
          type="date"
          name="createdDate"
          value={getStringedDate(input.createdDate)}
          onChange={onChangeInput}
        />
      </section>
      <section className="emtion-section">
        <h3>오늘의 감정</h3>
        <div className="emotion-list-wrapper">
          {emotionList.map((emotion, key) => (
            <EmotionItem
              onClick={() =>
                onChangeInput({
                  target: {
                    name: "emotionId",
                    value: emotion.emotionId,
                  },
                })
              }
              key={key}
              {...emotion}
              isSelected={emotion.emotionId === input.emotionId}
            />
          ))}
        </div>
      </section>
      <section className="content-section">
        <h3>오늘의 일기</h3>
        <textarea
          name="content"
          id="content"
          placeholder="오늘은 어땠나요?"
          onChange={onChangeInput}
          value={input.content}
          onKeyDown={onKeyDownEnter}
        ></textarea>
      </section>
      <section className="editor-footer">
        <Button text={"취소하기"} onClick={() => nav(-1)} />
        <Button
          text={"작성 완료"}
          type={"POSITIVE"}
          onClick={onClickSubmitButton}
        />
      </section>
    </div>
  );
};

export default Editor;
