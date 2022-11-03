import {Film} from '../../types/film';
import {Link} from 'react-router-dom';

type OneFilmComponentProps = {
  film: Film;
}

function OneFilmComponent({film}: OneFilmComponentProps): JSX.Element {
  return (
    <article className="small-film-card catalog__films-card">
      <div key={film.id}>
        <div className="small-film-card__image">
          <img src={film.posterSrc} alt={film.altTitle} width="280" height="175" />
        </div>
        <h3 className="small-film-card__title">
          <Link to="/films/:id" className="small-film-card__link">{film.title}</Link>
        </h3>
      </div>
    </article>
  );
}

export default OneFilmComponent;
