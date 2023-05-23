import Video from "../Video/Video.js";
import './VideosList.scss';

function VideosList({VideosListData ,changeCurrentVideo}) {

    return(

    <section className="videos-list">
        <h2 className="header">NEXT VIDEOS</h2>
       {VideosListData.map((VideoData)=>{
            return( 
        <Video VideoData={VideoData}  changeCurrentVideo={changeCurrentVideo} />
            )
        })}
    </section>)
}
export default VideosList;