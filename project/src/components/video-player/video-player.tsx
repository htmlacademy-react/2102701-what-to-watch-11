import {useEffect, useRef} from 'react';

type VideoPlayerProps = {
  autoPlay: boolean;
  src: string;
  poster: string;
}

function VideoPlayer({autoPlay, src, poster}: VideoPlayerProps): JSX.Element {

  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {

    const timeoutId: ReturnType<typeof setTimeout> = setTimeout(() => {
      if (autoPlay) {
        videoRef.current?.play();

      }}, 1000);

    if (videoRef.current === null) {
      return;
    }


    videoRef.current.pause();

    return () => {
      if (videoRef.current !== null) {
        videoRef.current.currentTime = 0;
      }
      clearTimeout(timeoutId);
    };
  }, [autoPlay]);

  return (
    <video src={src} ref={videoRef} poster={poster} autoPlay={autoPlay} muted loop width="280" height="175" />
  );
}

export default VideoPlayer;
