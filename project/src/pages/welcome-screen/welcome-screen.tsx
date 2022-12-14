import FilmListComponent from '../../components/films-list/films-list';
import {Link} from 'react-router-dom';
import GenresListComponent from '../../components/genres-list-component/genres-list-component';
import {useAppDispatch, useAppSelector } from '../../hooks';
import ShowMoreButtonComponent from '../../components/show-more-button-component/show-more-button-component';
import { showMoreFilms } from '../../store/actions';
import {Films, Film} from '../../types/film';
import {useSelectGenres, useSelectFavoritesCount} from '../../store/selectors';
import SignInComponent from '../../components/sign-in-component/sign-in-component';
import SignOutComponent from '../../components/sign-out-component/sign-out-component';
import { AuthorizationStatus } from '../../const';
import {useNavigate} from 'react-router-dom';
import { favoritesAction } from '../../store/api-actions';

type WelcomeScreenProps = {
  films: Films;
  promoFilm: Film;
}

function WelcomeScreen({films, promoFilm}: WelcomeScreenProps): JSX.Element {
  const navigate = useNavigate();
  const authorizationStatus = useAppSelector((state) => state.USER.authorizationStatus);
  const filmsCount = useAppSelector((state) => state.DATA.filmsCount);
  const filmsGenre = useAppSelector((state) => state.DATA.genre);
  const dispatch = useAppDispatch();
  const genres = useSelectGenres();
  const filteredFilms = filmsGenre === 'All Genres'
    ? films.slice(0, filmsCount)
    : films.filter((film) => film.genre === filmsGenre).slice(0, filmsCount);
  const film = promoFilm;
  const favoritesCount = useSelectFavoritesCount();

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={film.backgroundImage} alt={film.name} />
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
          {authorizationStatus === AuthorizationStatus.Auth ? <SignOutComponent/> : <SignInComponent/> }
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={film.backgroundImage} alt={film.name} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{film.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film.genre}</span>
                <span className="film-card__year">{film.released}</span>
              </p>

              <div className="film-card__buttons">
                <button onClick={() => navigate(`/player/${film.id}`)} className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                {authorizationStatus !== AuthorizationStatus.Auth
                  ? ''
                  : (
                    <button
                      onClick={() => {dispatch(favoritesAction({filmId: film.id, status: !film.isFavorite}));}}
                      className="btn btn--list film-card__button"
                      type="button"
                    >
                      {!film.isFavorite
                        ? (
                          <svg viewBox="0 0 19 20" width="19" height="20">
                            <use xlinkHref="#add"></use>
                          </svg>
                        )
                        : (
                          <svg viewBox="0 0 18 14" width="18" height="14">
                            <use xlinkHref="#in-list"></use>
                          </svg>
                        )}
                      <span>My list</span>
                      <span className="film-card__count">{favoritesCount}</span>
                    </button>
                  )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresListComponent genres={genres}/>

          <div className="catalog__films-list">
            {films.length <= filmsCount ?
              <FilmListComponent films={films}/> : <FilmListComponent films={filteredFilms}/>}
          </div>
          {filteredFilms.length >= filmsCount ? <ShowMoreButtonComponent onClick={() => dispatch(showMoreFilms())}/> : ''}
        </section>

        <footer className="page-footer">
          <div className="logo">
            <Link to="/" className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
}


export default WelcomeScreen;
