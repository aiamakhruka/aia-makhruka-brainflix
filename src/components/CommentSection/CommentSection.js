import Comments from "../Comments/Comments";
import './CommentSection.scss';
import NewCommentIcon from '../../assets/icons/add_comment.svg';
import avatar from '../../assets/images/Mohan-muruge.jpg';

function CommentSection({CommentsDetails}){
    return(
        <section className="comment-section">
            <h3 className="comments-counter">3 Comments</h3>
            <h2 className="comments-header">JOIN THE CONVERSATION</h2>
                 <div className="comments-container">
                 <div className="avatar-container">
                     <img src={avatar} className="comment-avatar"/>
                 </div>
                 <form className="comment-input-container">
                    <label htmlFor="comment"></label>
                     <textarea className="comment-area" id="comment" name="comment" type="text" placeholder="Add a new comment" required></textarea>
                     <button type="submit" value="Submit" className="comment-button">
                        <img className="comment-button__icon" src={NewCommentIcon}/>
                        COMMENT
                     <div></div>
                     </button>
                 </form>
                 </div>
                 {
                    CommentsDetails.map((commentDetails)=>{
                     return(
                        <Comments commentDetails={commentDetails} />)
                    })
                 }

        </section>
    )
}
export default CommentSection;