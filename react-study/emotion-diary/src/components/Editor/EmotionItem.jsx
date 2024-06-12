import "./EmotionItem.css";
import { getEmotionImage } from "./../../util/get-emotion-image.js";
const EmotionItem = () => {
  const emotionId = 1;

  const emotionDescription = [
    {
      emotionId: 1,
      desc: "완전 좋음",
    },
    {
      emotionId: 2,
      desc: "좋음",
    },
    {
      emotionId: 3,
      desc: "그럭저럭",
    },
    {
      emotionId: 4,
      desc: "나쁨",
    },
    {
      emotionId: 5,
      desc: "끔찍함",
    },
  ];

  return (
    <div className="EmotionItem">
      {emotionDescription.map((emotionInfo, key) => (
        <div
          key={key}
          className={`emotion-section emotion-section-${emotionInfo.emotionId}`}
        >
          <img
            src={getEmotionImage(emotionInfo.emotionId)}
            alt={emotionInfo.emotionId}
          />
          <h5>{emotionInfo.desc}</h5>
        </div>
      ))}
    </div>
  );
};

export default EmotionItem;
