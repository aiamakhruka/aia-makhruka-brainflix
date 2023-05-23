import './VideoPlayer.scss'
function VideoPlayer({PlayingVideo}){
    return(
        <>
        <section className="video-player-container">
            <video className="video" controls height="100%"  poster={PlayingVideo.image}>
            </video>
        </section>
        </>
    )
}

export default VideoPlayer;