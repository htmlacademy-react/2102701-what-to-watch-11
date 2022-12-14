import {Film, Films} from '../../types/film';
import {Link} from 'react-router-dom';
import FilmListComponent from '../films-list/films-list';
import Tabs from '../tabs/tabs';
import {Reviews} from '../../types/review';
import {useNavigate} from 'react-router-dom';
import { AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import SignOutComponent from '../sign-out-component/sign-out-component';
import SignInComponent from '../sign-in-component/sign-in-component';
import { favoritesAction, fetchSimilarFilmsAction } from '../../store/api-actions';
import { useSelectFavoritesCount } from '../../store/selectors';
import { fetchReviewsAction } from '../../store/api-actions';
import { useEffect } from 'react';

type FilmScreenComponentProps = {
  film: Film;
  similarFilms: Films;
  reviews: Reviews;
}

function FilmScreenComponent({film, similarFilms, reviews}: FilmScreenComponentProps): JSX.Element {
  const navigate = useNavigate();
  const authorizationStatus = useAppSelector((state) => state.USER.authorizationStatus);
  const favoritesCount = useSelectFavoritesCount();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchReviewsAction({filmId: film.id}));
  }, [film.id, dispatch]);

  useEffect(() => {
    dispatch(fetchSimilarFilmsAction({filmId: film.id}));
  }, [film.id, dispatch]);

  return (
    <>
      <section key={film.id} className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film.posterImage} alt={film.name}/>
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
                {authorizationStatus === AuthorizationStatus.Auth ? <SignOutComponent/> : <SignInComponent/> }
              </li>
            </ul>
          </header>

          <div className="film-card__wrap">
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
                  ?
                  ''
                  :
                  <button
                    onClick={() => {dispatch(favoritesAction({filmId: film.id, status: !film.isFavorite}));}}
                    className="btn btn--list film-card__button"
                    type="button"
                  >
                    {!film.isFavorite
                      ?
                      <svg viewBox="0 0 19 20" width="19" height="20">
                        <use xlinkHref="#add"></use>
                      </svg>
                      :
                      <svg viewBox="0 0 18 14" width="18" height="14">
                        <use xlinkHref="#in-list"></use>
                      </svg>}
                    <span>My list</span>
                    <span className="film-card__count">{favoritesCount}</span>
                  </button>}
                {authorizationStatus === AuthorizationStatus.Auth ?
                  <Link to={`/films/${film.id}/review`} className="btn film-card__button">Add review</Link> :
                  ''}
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={film.posterImage} alt={film.name} width="218" height="327" />
            </div>
            <Tabs film={film} reviews={reviews}/>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <FilmListComponent films={similarFilms}/>
        </section>
      </div>
    </>
  );
}

export default FilmScreenComponent;
