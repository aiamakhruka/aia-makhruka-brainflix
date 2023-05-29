import "./HomePage.scss";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import VideoPlayerDetail from "../../components/VideoPlayerDetail/VideoPlayerDetail";
import VideosList from "../../components/VideosList/VideosList";
import CommentSection from "../../components/CommentSection/CommentSection";
import { GetVideoIdURL } from "../../utility/API";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import LoadingPage from "../LoadingPage/LoadingPage";
import NotFound from "../../pages/ErrorPage/NotFound";

function HomePage({ videosArray }) {
  
  const { videoId } = useParams();
  const [currentVideo, setCurrentVideo] = useState(null);
  const [isLoading, setisLoading] = useState(true);
  const [hasError, sethasError] = useState(false);

  useEffect(() => {
    axios
      .get(GetVideoIdURL(videoId))
      .then((response) => {
        setisLoading(false);
        setCurrentVideo(response.data);
      })
      .catch(() => {
        sethasError(true);
        setisLoading(false);
      });
  }, [videoId]);

  if (isLoading) {
    return <LoadingPage />;
  }
  if (hasError) {
    return <NotFound />;
  }

  return (
    <>
      <VideoPlayer currentVideo={currentVideo} />
      <main className="main-page">
        <section className="main-page__left">
          <VideoPlayerDetail currentVideo={currentVideo} />
          <CommentSection currentVideo={currentVideo} />
        </section>
        <section className="main-page__right">
          <VideosList videosArray={videosArray} />
        </section>
      </main>
    </>
  );
}

export default HomePage;
