import React from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';



export function YoutubeVideo(idme: any) {
   const id = '2g811Eo7K8U'
  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  const opts: YouTubeProps['opts'] = {
    height: '345',
    width: '600',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return <YouTube videoId={id} opts={opts} onReady={onPlayerReady} />;
}