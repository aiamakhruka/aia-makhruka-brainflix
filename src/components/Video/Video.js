import './Video.scss';

function Video({VideoData,changeCurrentVideo}) {
    return(
        <section className="next-video-container" onClick={()=>{changeCurrentVideo(VideoData.id)}} >
            <div className="video-thumbnail">
                <img className="video-thumbnail__image" src={VideoData.image}/>
            </div>
            <div className="video-details">
                <h3 className="video-title">{VideoData.title}</h3>
                <h2 className="video-channel">{VideoData.channel}</h2>
            </div>
        </section>
    )
}
export default Video;