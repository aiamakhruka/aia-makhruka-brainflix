import Video from "../Video/Video.js";
import "./VideosList.scss";
import { useParams } from "react-router-dom";

function VideosList({ videosArray }) {

  const { videoId } = useParams();

  const fillteredArray = videosArray.filter((video) => {
    return video.id !== videoId;
  });

  return (
    <section className="videos-list">
      <h2 className="videos-list__header">NEXT VIDEOS</h2>
      {fillteredArray.map((videoData) => {
        window.scrollTo(0, 0);
        return <Video videoData={videoData} key={videoData.id} />;
      })}
    </section>
  );
  
}
export default VideosList;
