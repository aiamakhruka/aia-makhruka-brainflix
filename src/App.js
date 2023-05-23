import './App.scss';
import PlayNextVideos from './data/videos.json'
import  { useState } from 'react';
import CurrentVideos from './data/video-details.json';
import NavBar from './components/NavBar/NavBar';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import VideoPlayerDetail from './components/VideoPlayerDetail/VideoPlayerDetail';
import VideosList from './components/VideosList/VideosList';
import CommentSection from './components/CommentSection/CommentSection';

function App() {

const [CurrentVideo , setCurrentVideo] = useState(CurrentVideos[0]);
const changeCurrentVideo = (VideoDataId)=>{
  const newVideo= CurrentVideos.find((video)=>{
    console.log(video,VideoDataId)
    return  video.id===VideoDataId 
  } )

  setCurrentVideo(newVideo)
}

const fillteredArray =PlayNextVideos.filter((video)=>{
  return video.id!==CurrentVideo.id
})

  return (
    <>
      <NavBar/>
      <VideoPlayer PlayingVideo={CurrentVideo}/>
      <main className='main-page'>
      <section className='main-page__left'>
      <VideoPlayerDetail VideoDetails={CurrentVideo}/>
      <CommentSection CommentsDetails={CurrentVideo.comments}/>
      </section>
      <section className='main-page__right'>
      <VideosList VideosListData={fillteredArray} changeCurrentVideo={changeCurrentVideo}/>
      </section>
      </main>
    </>
  );
}

export default App;