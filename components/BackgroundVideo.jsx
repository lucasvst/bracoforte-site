import React from 'react'
import styled from 'styled-components'

const VIDEO_WIDTH = 1920
const VIDEO_HEIGHT = 1080

const BackgroundVideo = ({
  videoId,
}) => (
  <div className="background-video">
    <iframe
      width={VIDEO_WIDTH}
      height={VIDEO_HEIGHT}
      src={`https://www.youtube.com/embed/${videoId}?playlist=${videoId}&rel=0&autoplay=1&controls=0&mute=1&loop=1&disablekb=1&modestbranding=1&showinfo=0&start=50&enablejsapi=1&widgetid=3`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    />
    <div className="absolute w-full h-full backdrop-grayscale backdrop-blur-[.125rem]" />
  </div>
)

export default BackgroundVideo