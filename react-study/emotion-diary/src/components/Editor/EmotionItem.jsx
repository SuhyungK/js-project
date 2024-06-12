import "./EmotionItem.css";
import { getEmotionImage } from "./../../util/get-emotion-image.js";

const EmotionItem = ({ emotionId, emotionName, isSelected, onClick }) => {
  return (
    <div
      className={`EmotionItem ${
        isSelected ? `EmotionItem-on-${emotionId}` : ""
      }`}
      onClick={onClick}
    >
      <img
        className="emotion-img"
        src={getEmotionImage(emotionId)}
        alt={emotionId}
      />
      <div className="emotion-name">{emotionName}</div>
    </div>
  );
};

export default EmotionItem;
