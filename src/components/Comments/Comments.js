import "./Comments.scss";

function Comments({ commentDetails }) {
  const date = commentDetails.timestamp;
  // used .toLocaleDateString('en-GB') to make the format of the date DD/MM/YYYY;
  const newdate = new Date(date).toLocaleDateString("en-US", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return (
    <div className="comment-section">
      <div className="avatar">
        <img className="avatar__image"/>
      </div>
      <div className="comment-inputs">
        <div className="comment">
          <h2 className="comment__name">{commentDetails.name}</h2>
          <h3 className="comment__date">{newdate}</h3>
        </div>
        <div>
          <p className="comment-text">{commentDetails.comment}</p>
        </div>
      </div>
    </div>
  );
}
export default Comments;