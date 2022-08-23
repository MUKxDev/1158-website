import React from 'react'
import ReactPlayer from 'react-player'
import videoModal from '../assets/hero-bg-video.mp4'

const Lightbox = () => {
  return (
    <div className="fixed z-30">
            <div className="bg-black top-0 left-0 right-0 bottom-0"></div>
            <div className="relative m-auto"></div>
        <ReactPlayer className="z-30" autoplay muted={true} width="100%" height="100%" controls url={videoModal}/>
    </div>
  )
}

export default Lightbox