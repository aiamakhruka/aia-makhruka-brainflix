import viewsIcon from '../../assets/icons/views.svg';
import likeIcon from '../../assets/icons/likes.svg';
import './VideoPlayerDetail.scss';

function VideoPlayerDetail({VideoDetails}) {

    const date =VideoDetails.timestamp;
    // used .toLocaleDateString('en-GB') to make the format of the date DD/MM/YYYY; 
    const newdate = new Date(date).toLocaleDateString("en-US");

    return(
    <section className='video-detail'>
        <h1 className='video-detail__header'>{VideoDetails.title}</h1>
        <div className='video-detail__container'>
            <div  className='auther-date'>
                <h3 className='auther'>
                By {VideoDetails.channel}
                </h3>
                <h3 className='date'>
                {newdate}
                </h3>
            </div>
            <div className='views-likes'>
                <h3 className='views'>
                <img className='views__icon' src={viewsIcon}/>
                 {VideoDetails.views}
                </h3>
                <h3 className='likes'>
                <img className='likes__icon'src={likeIcon}/>
                {VideoDetails.likes}
                </h3>
            </div>
            <div className='spacing'></div>
        </div>
            <h2 className='video-description'>
                {VideoDetails.description}
            </h2>
    </section>
    )
}

export default VideoPlayerDetail;