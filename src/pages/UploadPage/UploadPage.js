import "./UploadPage.scss";
import Thumbnail from "../../assets/images/Upload-video-preview.jpg";
import PublishIcon from "../../assets/icons/publish.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function UploadPage() {
  const [isPublished, setisPublished] = useState(false);
  const navigate = useNavigate();

  const handelSubmition = (e) => {
    e.preventDefault();
    setisPublished(true);
    setTimeout(() => {
      setisPublished(false);
      navigate("/");
    }, 3000);
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
            />
            <label className="form__labels" htmlFor="description">
              ADD A VIDEO DESCRIPTION
            </label>
            <textarea
              className="form__inputs form--textarea"
              type="text"
              placeholder="Add a description to your video"
              name="description"
            ></textarea>
            <div className="upload__info upload__info--mobile">
              <button className="form__publish-button">
                <img src={PublishIcon} />
                PUBLISH
              </button>
              <button type="reset" className="cancel-button">
                CANCEL
              </button>
            </div>
          </form>
        </div>
        <div className="upload__info upload__info--desktop">
          <button className="form__publish-button" onClick={handelSubmition}>
            <img src={PublishIcon} />
            PUBLISH
          </button>
          <button type="reset" className="cancel-button">
            CANCEL
          </button>
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
