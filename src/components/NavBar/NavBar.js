import "./NavBar.scss";
import avatar from '../../assets/images/Mohan-muruge.jpg';
import logo from '../../assets/logo/BrainFlix-logo.svg';
import searchIcon from '../../assets/icons/search.svg';
import uploadIcon from '../../assets/icons/upload.svg';

function NavBar() {

    return(
    <nav className="nav-bar">
        <a href="/"><img className="nav-bar__logo" src={logo} alt="brainflix logo"/></a>
        <form className="nav-bar__container">
           <div className="search-bar-container">   {/* <------ is my BEM good ? */}
            <input className="search-bar" type="search" placeholder="Search"/>
            <img className="profile-picture" src={avatar} alt="the profile"/>
            </div>
            <button className="upload-button">
            <img className="upload-button__icon" src={uploadIcon}  alt="upload icon in the upload button"/>
            UPLOAD
            <div></div>
            </button>
            <img className="profile-picture-tabDes" src={avatar} alt="the profile"/>
        </form>
    </nav>)
}

export default NavBar;