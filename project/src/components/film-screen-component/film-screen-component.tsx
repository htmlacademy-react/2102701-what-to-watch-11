import {Film} from '../../types/film';
import {Link} from 'react-router-dom';

type FilmScreenComponentProps = {
  film: Film;
}

function FilmScreenComponent({film}: FilmScreenComponentProps): JSX.Element {
  return (
    <section key={film.id} className="film-card film-card--full">
      <div className="film-card__hero">
        <div className="film-card__bg">
          <img src={film.posterSrc} alt={film.altTitle}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <div className="logo">
            <Link to="/" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </li>
            <li className="user-block__item">
              <Link to="/" className="user-block__link">Sign out</Link>
            </li>
          </ul>
        </header>

        <div className="film-card__wrap">
          <div className="film-card__desc">
            <h2 className="film-card__title">{film.title}</h2>
            <p className="film-card__meta">
              <span className="film-card__genre">{film.genre}</span>
              <span className="film-card__year">{film.releaseDate}</span>
            </p>

            <div className="film-card__buttons">
              <button className="btn btn--play film-card__button" type="button">
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </button>
              <button className="btn btn--list film-card__button" type="button">
                <svg viewBox="0 0 19 20" width="19" height="20">
                  <use xlinkHref="#add"></use>
                </svg>
                <span>My list</span>
                <span className="film-card__count">9</span>
              </button>
              <Link to={`/films/${film.id}/review`} className="btn film-card__button">Add review</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="film-card__wrap film-card__translate-top">
        <div className="film-card__info">
          <div className="film-card__poster film-card__poster--big">
            <img src={film.posterSrc} alt={film.altTitle} width="218" height="327" />
          </div>

          <div className="film-card__desc">
            <nav className="film-nav film-card__nav">
              <ul className="film-nav__list">
                <li className="film-nav__item film-nav__item--active">
                  <Link to="/" className="film-nav__link">Overview</Link>
                </li>
                <li className="film-nav__item">
                  <Link to="/" className="film-nav__link">Details</Link>
                </li>
                <li className="film-nav__item">
                  <Link to="/" className="film-nav__link">Reviews</Link>
                </li>
              </ul>
            </nav>

            <div className="film-rating">
              <div className="film-rating__score">{film.ratingScore}</div>
              <p className="film-rating__meta">
                <span className="film-rating__level">{film.ratingLevel}</span>
                <span className="film-rating__count">{film.ratingCount} ratings</span>
              </p>
            </div>

            <div className="film-card__text">
              <p>{film.description}</p>
              <p className="film-card__director"><strong>Director: {film.director}</strong></p>

              <p className="film-card__starring"><strong>Starring: {film.actors[0]} {film.actors[1]} {film.actors[2]} and other</strong></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FilmScreenComponent;
