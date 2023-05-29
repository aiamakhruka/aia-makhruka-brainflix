import "./CommentSection.scss";
import Comments from "../Comments/Comments";
import NewCommentIcon from "../../assets/icons/add_comment.svg";
import avatar from "../../assets/images/Mohan-muruge.jpg";

function CommentSection({ currentVideo }) {
  return (
    <section className="comments">
      <h3 className="comments__counter">3 Comments</h3>
      <h2 className="comments__header">JOIN THE CONVERSATION</h2>
      <div className="comments-container">
        <div className="profile">
          <img src={avatar} className="profile__image" />
        </div>
        <form className="comments-form">
          <label htmlFor="comment"></label>
          <textarea
            className="comments-form__textarea"
            id="comment"
            name="comment"
            type="text"
            placeholder="Add a new comment"
            required
          ></textarea>
          <button type="submit" value="Submit" className="comments-form__button">
            <img className="comments-form__icon" src={NewCommentIcon} />
            COMMENT
          </button>
        </form>
      </div>
      {currentVideo.comments.map((commentDetails) => {
        return (
          <Comments commentDetails={commentDetails} key={commentDetails.id} />
        );
      })}
    </section>
  );
}
export default CommentSection;
