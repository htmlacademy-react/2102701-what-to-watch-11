import { Film } from '../../types/film';
import {useNavigate} from 'react-router-dom';
import { useRef } from 'react';
import {useState} from 'react';

type PlayerProps = {
  film: Film;
}

function Player ({film}: PlayerProps): JSX.Element {
  function getTimeFromMins(sec: number) {
    const hours = Math.floor(sec / 3600);
    sec = sec - 3600 * hours;
    const minutes = Math.floor(sec / 60);
    sec = sec - 60 * minutes;
    const time = [];
    if (hours) {
      time.push(hours);
    }
    time.push(minutes);
    time.push(Math.round(sec));
    return time.join(':');
  }
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(videoRef.current?.currentTime);
  const navigate = useNavigate();

  const play = function() {
    videoRef.current?.play();
    setIsPlaying(true);
  };
  const pause = function() {
    videoRef.current?.pause();
    setIsPlaying(false);
  };

  return (
    <div className="player">
      <video ref={videoRef} onTimeUpdate={(event) => setIsLoaded(event.currentTarget.currentTime)} id='vPlayer' src={film.videoLink} className="player__video" poster={film.posterImage}></video>

      <button onClick={() => navigate(`/films/${film.id}`)} type="button" className="player__exit">Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="0" max="100"></progress>
            <div className="player__toggler" style={{left: '0%'}}>Toggler</div>
          </div>
          <div className="player__time-value">-{getTimeFromMins(((videoRef.current?.duration || 0) - (isLoaded || 0)) || film.runTime * 60)}</div>
        </div>

        <div className="player__controls-row">
          {!isPlaying ?
            <button onClick={() => play()} type="button" className="player__play">
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"></use>
              </svg>
              <span>Play</span>
            </button> :
            <button onClick={() => pause()} type="button" className="player__play">
              <svg viewBox="0 0 14 21" width="14" height="21">
                <use xlinkHref="#pause"></use>
              </svg>
              <span>Pause</span>
            </button>}
          <div className="player__name">Transpotting</div>

          <button onClick={() => {document.getElementById('vPlayer')?.requestFullscreen();}} type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Player;
