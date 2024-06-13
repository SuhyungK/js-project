import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import Button from "../components/Button/Button";
import Editor from "../components/Editor/Editor";
import { useContext, useEffect, useState } from "react";
import { DiaryDispatchContext, DiaryStateContext } from "../App";

const Edit = () => {
  const { id } = useParams();
  const data = useContext(DiaryStateContext);
  const nav = useNavigate();
  const [curDiaryItem, setCurDiaryItem] = useState({});
  const { onUpdate, onDelete } = useContext(DiaryDispatchContext);

  const onClickDelete = () => {
    if (window.confirm("일기를 정말 삭제할까요? 다시 복구할 수 없습니다.")) {
      onDelete(id);
      nav("/", { replace: true });
    }
  };

  const onSubmit = (input) => {
    console.log(input);
    onUpdate(input.id, input.createdDate, input.emotionId, input.content);
    nav("/");
  };

  useEffect(() => {
    const currentDiaryItem = data.find(
      (item) => String(item.id) === String(id)
    );

    if (!currentDiaryItem) {
      window.alert("존재하지 않는 일기입니다.");
      nav("/");
    }
    setCurDiaryItem(currentDiaryItem);
  }, [id, data]);

  return (
    <div>
      <Header
        title={"일기 수정하기"}
        leftChild={<Button onClick={() => nav(-1)} text={"< 뒤로 가기"} />}
        rightChild={
          <Button onClick={onClickDelete} text={"삭제하기"} type={"NEGATIVE"} />
        }
      />
      <Editor initData={curDiaryItem} onSubmit={onSubmit} />
    </div>
  );
};

export default Edit;
