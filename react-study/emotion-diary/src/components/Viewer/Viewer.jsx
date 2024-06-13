import "./Viewer.css";
import { getEmotionImage } from "../../util/get-emotion-image";
import emotionList from "../../util/constant";

const Viewer = ({ emotionId, content }) => {
  const emotionItem = emotionList.find(
    (item) => String(item.emotionId) === String(emotionId)
  );

  return (
    <div className="Viewer">
      <section className="emotion-section">
        <h3>오늘의 감정</h3>
        <div className={`emotion-img-wrapper emotion-img-${emotionId}`}>
          <img src={getEmotionImage(emotionId)} alt={emotionItem.emotionName} />
          <div>{emotionItem.emotionName}</div>
        </div>
      </section>
      <section className="content-section">
        <h3>오늘의 일기</h3>
        <div className="content-wrapper">
          <p>{content}</p>
        </div>
      </section>
    </div>
  );
};

export default Viewer;
