import { Link } from "react-router-dom";
import "./Video.scss";

function Video({ videoData }) {
  return (
    <Link className="next-video" to={`/videos/${videoData.id}`}>
        <div className="video-thumbnail">
          <img className="video-thumbnail__image" src={videoData.image} />
        </div>
        <div className="video-details">
          <h3 className="video-details__title">{videoData.title}</h3>
          <h2 className="video-details__channel">{videoData.channel}</h2>
        </div>
    </Link>
  );
}
export default Video;
