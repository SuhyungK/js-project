import "./Viewer.css";
import { getEmotionImage } from "../../util/get-emotion-image";
import emotionList from "../../util/constant";

const Viewer = () => {
  const emotionId = 3;
  const emotionName = "끔찍함";

  const emotionItem = emotionList.find(
    (item) => String(item.emotionId) === String(emotionId)
  );

  return (
    <div className="Viewer">
      <section className="emotion-section">
        <h3>오늘의 감정</h3>
        <div className={`emotion-img-wrapper emotion-img-${emotionId}`}>
          <img src={getEmotionImage(emotionId)} alt={emotionItem.emotionName} />
          <div>{emotionName}</div>
        </div>
      </section>
      <section className="content-section">
        <h3>오늘의 일기</h3>
        <div className="content-wrapper">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Exercitationem cum commodi quibusdam illum, repudiandae mollitia
            doloremque harum, quae quisquam consequatur doloribus debitis
            repellat dolor officiis quos similique nobis rem voluptatibus! Lorem
            ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem
            cum commodi quibusdam illum, repudiandae mollitia doloremque harum,
            quae quisquam consequatur doloribus debitis repellat dolor officiis
            quos similique nobis rem voluptatibus! Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Exercitationem cum commodi quibusdam
            illum, repudiandae mollitia doloremque harum, quae quisquam
            consequatur doloribus debitis repellat dolor officiis quos similique
            nobis rem voluptatibus! Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Exercitationem cum commodi quibusdam illum,
            repudiandae mollitia doloremque harum, quae quisquam consequatur
            doloribus debitis repellat dolor officiis quos similique nobis rem
            voluptatibus! Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Exercitationem cum commodi quibusdam illum, repudiandae
            mollitia doloremque harum, quae quisquam consequatur doloribus
            debitis repellat dolor officiis quos similique nobis rem
            voluptatibus! Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Exercitationem cum commodi quibusdam illum, repudiandae
            mollitia doloremque harum, quae quisquam consequatur doloribus
            debitis repellat dolor officiis quos similique nobis rem
            voluptatibus! Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Exercitationem cum commodi quibusdam illum, repudiandae
            mollitia doloremque harum, quae quisquam consequatur doloribus
            debitis repellat dolor officiis quos similique nobis rem
            voluptatibus! Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Exercitationem cum commodi quibusdam illum, repudiandae
            mollitia doloremque harum, quae quisquam consequatur doloribus
            debitis repellat dolor officiis quos similique nobis rem
            voluptatibus! Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Exercitationem cum commodi quibusdam illum, repudiandae
            mollitia doloremque harum, quae quisquam consequatur doloribus
            debitis repellat dolor officiis quos similique nobis rem
            voluptatibus! Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Exercitationem cum commodi quibusdam illum, repudiandae
            mollitia doloremque harum, quae quisquam consequatur doloribus
            debitis repellat dolor officiis quos similique nobis rem
            voluptatibus! Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Exercitationem cum commodi quibusdam illum, repudiandae
            mollitia doloremque harum, quae quisquam consequatur doloribus
            debitis repellat dolor officiis quos similique nobis rem
            voluptatibus! Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Exercitationem cum commodi quibusdam illum, repudiandae
            mollitia doloremque harum, quae quisquam consequatur doloribus
            debitis repellat dolor officiis quos similique nobis rem
            voluptatibus!
          </p>
        </div>
      </section>
    </div>
  );
};

export default Viewer;
