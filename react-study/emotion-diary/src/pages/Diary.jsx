import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import Button from "../components/Button/Button";
import Viewer from "../components/Viewer/Viewer";
import useDiary from "../hooks/useDiary";
import getStringedDate from "../util/get-stringed-date";

const Diary = () => {
  const { id } = useParams();
  const curDiaryItem = useDiary(id);
  const nav = useNavigate();

  if (!curDiaryItem) {
    return <div>로딩 중...</div>;
  }

  const { createdDate, emotionId, content } = curDiaryItem;

  return (
    <div>
      <Header
        title={`${getStringedDate(new Date(createdDate))} 기록`}
        leftChild={<Button onClick={() => nav(-1)} text={"< 뒤로 가기 "} />}
        rightChild={
          <Button onClick={() => nav(`/edit/${id}`)} text={"수정하기"} />
        }
      />
      <Viewer {...curDiaryItem} />
    </div>
  );
};

export default Diary;
