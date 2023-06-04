import "./UploadPage.scss";
import Thumbnail from "../../assets/images/Upload-video-preview.jpg";
import PublishIcon from "../../assets/icons/publish.svg";
import { useState ,useRef} from "react";
import { useNavigate } from "react-router-dom";
import { GetVideosURL } from "../../utility/API";
import axios from "axios";

function UploadPage() {
  const [isPublished, setisPublished] = useState(false);
  const navigate = useNavigate();

  const titleRef = useRef();
  const descriptionRef = useRef();
  
  const handelSubmition = (e) => {
    e.preventDefault();
    
    const titleValue = titleRef.current.value;
    const descriptionValue = descriptionRef.current.value;

    if (!titleValue || !descriptionValue) {
      alert('Please fill out both fields');
      return;
    }

    const uploadVideo ={
      title:titleValue,
      description:descriptionValue
    };
  
    axios
    .post(GetVideosURL,uploadVideo)
    .then((response) => {console.log(response.data);})
    .catch((error) => {
      console.log(error);
    });

    setisPublished(true);
    setTimeout(() => {
      setisPublished(false);
      navigate("/");
    }, 3000);
  };
  const handelCancelation = () => {
      navigate("/");
  };

  return (
    <>
      <section className="upload">
        <h1 className="upload__header">Upload Video</h1>
        <div className="container">
          <div className="thumbnail">
            <h2 className="thumbnail__subheader">VIDEO THUMBNAIL</h2>
            <img className="thumbnail__picture" src={Thumbnail} />
          </div>
          {isPublished && <Overlay />}
          <form className="form" onSubmit={handelSubmition}>
            <label className="form__labels" htmlFor="title">
              TITLE YOUR VIDEO
            </label>
            <input
              className="form__inputs"
              type="text"
              placeholder="Add a title to your video"
              name="title"
              ref={titleRef}
            />
            <label className="form__labels" htmlFor="description">
              ADD A VIDEO DESCRIPTION
            </label>
            <textarea
              className="form__inputs form--textarea"
              type="text"
              placeholder="Add a description to your video"
              name="description"
              ref={descriptionRef}

            ></textarea>
            <div className="upload__info">
              <button className="form__publish-button">
                <img src={PublishIcon} />
                PUBLISH
              </button>
              <button type="reset" className="cancel-button" onClick={handelCancelation}>
                CANCEL
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export function Overlay() {
  return (
    <div className="overlay-background">
      <h2 className="overlay-header">Your video Got Published ✅</h2>
    </div>
  );
}

export default UploadPage;
