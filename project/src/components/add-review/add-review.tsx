import {Film} from '../../types/film';
import {Link} from 'react-router-dom';
import AddReviewForm from '../add-review-form/add-review-form';
import { AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';
import SignInComponent from '../../components/sign-in-component/sign-in-component';
import SignOutComponent from '../../components/sign-out-component/sign-out-component';


type AddReviewProps = {
  film: Film;
}

function AddReview ({film}: AddReviewProps): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.USER.authorizationStatus);

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={film.posterImage} alt={film.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <div className="logo">
            <Link to="/" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/${film.id}`} className="breadcrumbs__link">{film.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <Link to={`/films/${film.id}/review`} className="breadcrumbs__link">Add review</Link>
              </li>
            </ul>
          </nav>

          <ul className="user-block">
            {authorizationStatus === AuthorizationStatus.Auth ? <SignOutComponent/> : <SignInComponent/> }
          </ul>
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={film.posterImage} alt={film.name} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <AddReviewForm filmId={film.id}/>
      </div>

    </section>
  );
}

export default AddReview;
