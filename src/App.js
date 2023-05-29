import "./App.scss";
import "./components/NavBar/NavBar.scss";
import NavBar from "./components/NavBar/NavBar";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useParams,
} from "react-router-dom";
import { useState, useEffect } from "react";
import { GetVideosURL } from "./utility/API";
import HomePage from "./pages/HomePage/HomePage";
import UploadPage from "./pages/UploadPage/UploadPage";
import NotFound from "./pages/ErrorPage/NotFound";
import axios from "axios";
import LoadingPage from "./pages/LoadingPage/LoadingPage";


function App() {
  const { videoId } = useParams();

  const [firstVideoId, setfirstVideoId] = useState(null);
  const [videosArray, setvideosArray] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [hasError, sethasError] = useState(false);

  useEffect(() => {
    if (!videoId) {
      axios
        .get(GetVideosURL)
        .then((response) => {
          setisLoading(false);
          setfirstVideoId(response.data[0].id);
          setvideosArray(response.data);
        })
        .catch(() => {
          sethasError(true);
          setisLoading(false);
        });
    }
  }, []);
  if (isLoading) {
    return <LoadingPage />;
  }
  if (hasError) {
    return <NotFound/>;
  }

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<Navigate to={`/videos/${firstVideoId}`} />}
          />
          <Route
            path="/videos/:videoId"
            element={<HomePage videosArray={videosArray} />}
          />
          <Route path="/upload" element={<UploadPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
