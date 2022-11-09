import {useState, useEffect, useRef} from 'react';

type VideoPlayerProps = {
  autoPlay: boolean;
  src: string;
  poster: string;
}

function VideoPlayer({autoPlay, src, poster}: VideoPlayerProps): JSX.Element {

  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    let isVideoPlayerMounted = true;

    if (videoRef.current === null) {
      return;
    }

    if (autoPlay) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
      return;
    }

    videoRef.current.pause();

    return () => {
      isVideoPlayerMounted = false;
    };
  }, [autoPlay]);

  return (
    <>
      <video src={src} ref={videoRef} poster={poster} autoPlay={autoPlay} muted loop width="280" height="175" />
    </>
  );
}

export default VideoPlayer;
