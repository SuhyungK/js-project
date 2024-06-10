import { useParams } from "react-router-dom";

const Diary = () => {
  const { diaryId } = useParams();
  console.log(diaryId);
  return <div>Diary</div>;
};

export default Diary;
