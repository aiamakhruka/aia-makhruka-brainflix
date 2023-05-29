import "./NavBar.scss";
import avatar from "../../assets/images/Mohan-muruge.jpg";
import logo from "../../assets/logo/BrainFlix-logo.svg";
import uploadIcon from "../../assets/icons/upload.svg";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="nav-bar">
      <Link to={"/"}>
        <img className="nav-bar__logo" src={logo} alt="brainflix logo" />
      </Link>
      <form className="nav-bar__container">
        <div className="search-bar-container">
            <input
              className="search-bar"
              type="search"
              id="search"
              placeholder="Search"
            />
          <img className="profile-picture" src={avatar} alt="the profile" />
        </div>
        <Link className="upload-button" to={"/upload"}>
          <img
            className="upload-button__icon"
            src={uploadIcon}
            alt="upload icon in the upload button"
          />
          UPLOAD
        </Link>
        <img
          className="profile-picture-tabDes"
          src={avatar}
          alt="the profile"
        />
      </form>
    </nav>
  );
}

export default NavBar;
