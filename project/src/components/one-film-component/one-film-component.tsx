import {Film} from '../../types/film';
import {Link} from 'react-router-dom';
import VideoPlayer from '../video-player/video-player';
import {useState} from 'react';


type OneFilmComponentProps = {
  film: Film;
}

function OneFilmComponent({film}: OneFilmComponentProps): JSX.Element {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <article onMouseEnter={()=> {setIsPlaying(true);}} onMouseLeave={()=> setIsPlaying(false)} className="small-film-card catalog__films-card">
      <div key={film.id}>
        <div className="small-film-card__image">
          {isPlaying ? '' : <img src={film.posterImage} alt={film.name} width="280" height="175"/>}
          <VideoPlayer src={film.previewVideoLink} poster={film.previewImage} autoPlay={isPlaying}/>
        </div>

        <h3 className="small-film-card__title">
          <Link to={`/films/${film.id}`} className="small-film-card__link">{film.name}</Link>
        </h3>
      </div>
    </article>
  );
}

export default OneFilmComponent;
