import viewsIcon from "../../assets/icons/views.svg";
import likeIcon from "../../assets/icons/likes.svg";
import "./VideoPlayerDetail.scss";

function VideoPlayerDetail({ currentVideo }) {
  const date = currentVideo.timestamp;
  //used .toLocaleDateString('en-GB') to make the format of the date DD/MM/YYYY;
  const newdate = new Date(date).toLocaleDateString("en-US", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return (
    <section className="video-detail">
      <h1 className="video-detail__header">{currentVideo.title}</h1>
      <div className="video-detail__container">
        <div className="infos">
          <h3 className="infos__auther">By {currentVideo.channel}</h3>
          <h3 className="infos__date">{newdate}</h3>
        </div>
        <div className="views-likes">
          <h3 className="views">
            <img className="views__icon" src={viewsIcon} />
            {currentVideo.views}
          </h3>
          <h3 className="likes">
            <img className="likes__icon" src={likeIcon} />
            {currentVideo.likes}
          </h3>
        </div>
      </div>
      <h2 className="video-description">{currentVideo.description}</h2>
    </section>
  );
}

export default VideoPlayerDetail;
