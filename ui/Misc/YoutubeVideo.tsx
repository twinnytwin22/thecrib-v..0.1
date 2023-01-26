import React from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';



export function YoutubeVideo(id: any) {
  const iD = 'sP3cLeD_sk4'
  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  const opts: YouTubeProps['opts'] = {
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  return <YouTube videoId={iD} opts={opts} onReady={onPlayerReady} />;
}