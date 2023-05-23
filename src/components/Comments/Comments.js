 import './Comments.scss';

function Comments({commentDetails}){

    const date =commentDetails.timestamp;
    // used .toLocaleDateString('en-GB') to make the format of the date DD/MM/YYYY; 
    const newdate = new Date(date).toLocaleDateString("en-US"); 
   
    return(
        <div className="comment-container">
             <div className="avatar-container">
                 <img  className="avatar"/>
             </div>
             <div className="comment-section-container">
                <div className="date-name-container">
                 <h2   className="name">{commentDetails.name}</h2>
                 <h3   className="date">{newdate}</h3>
                </div>
                 <div>
                 <p className="comment">{commentDetails.comment}</p>
                 </div>
             </div>
        </div> 
    )
}
export default Comments;