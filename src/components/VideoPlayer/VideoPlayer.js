import "./VideoPlayer.scss";

function VideoPlayer({ currentVideo }) {
  return (
    <>
      <section className="video-player">
        <video
          className="video-player__video"
          controls
          height="100%"
          poster={currentVideo.image}
        ></video>
      </section>
    </>
  );
}

export default VideoPlayer;
