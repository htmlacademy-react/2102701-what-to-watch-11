import { Link } from 'react-router-dom';
import {useState} from 'react';
import {Film} from '../../types/film';
import {Reviews} from '../../types/review';


type TabsProps = {
  film: Film;
  reviews: Reviews;
}


function Tabs({film, reviews}: TabsProps): JSX.Element {
  const [activeTab, setActiveTab] = useState<'Overview' | 'Details' | 'Reviews'>('Overview');
  function getTimeFromMins(mins: number) {
    const hours = Math.trunc(mins / 60);
    const minutes = mins % 60;
    return `${hours }h ${ minutes }m`;
  }

  let ratingText = '';

  if(film.rating >= 0 && film.rating <= 3) {
    ratingText = 'Bad';
  }

  if(film.rating > 3 && film.rating <= 5) {
    ratingText = 'Normal';
  }

  if(film.rating > 5 && film.rating <= 8) {
    ratingText = 'Good';
  }

  if(film.rating > 8 && film.rating <= 10) {
    ratingText = 'Very good';
  }

  if(film.rating === 10) {
    ratingText = 'Awesome';
  }

  return (


    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className={activeTab === 'Overview' ? 'film-nav__item film-nav__item--active' : 'film-nav__item'}>
            <Link onClick={() => setActiveTab('Overview')} to="#Overview" className="film-nav__link">Overview</Link>
          </li>
          <li className={activeTab === 'Details' ? 'film-nav__item film-nav__item--active' : 'film-nav__item'}>
            <Link onClick={() => setActiveTab('Details')} to="#Details" className="film-nav__link">Details</Link>
          </li>
          <li className={activeTab === 'Reviews' ? 'film-nav__item film-nav__item--active' : 'film-nav__item'}>
            <Link onClick={() => {setActiveTab('Reviews');}} to="#Reviews" className="film-nav__link">Reviews</Link>
          </li>
        </ul>
      </nav>
      {activeTab === 'Overview' && (
        <div className="film-card__text">
          <div className="film-rating">
            <div className="film-rating__score">{film.rating}</div>
            <p className="film-rating__meta">
              <span className="film-rating__level">{ratingText}</span>
              <span className="film-rating__count">{film.scoresCount} ratings</span>
            </p>
          </div>
          <p>{film.description}</p>
          <p className="film-card__director"><strong>Director: {film.director}</strong></p>
          <p className="film-card__starring"><strong>Starring: {film.starring.join(', ')} and other</strong></p>
        </div>
      )}

      {activeTab === 'Details' && (
        <div className="film-card__text film-card__row">
          <div className="film-card__text-col">
            <p className="film-card__details-item">
              <strong className="film-card__details-name">Director</strong>
              <span className="film-card__details-value">{film.director}</span>
            </p>
            <p className="film-card__details-item">
              <strong className="film-card__details-name">Starring</strong>
              <span className="film-card__details-value">
                {film.starring.join(', ')}
              </span>
            </p>
          </div>

          <div className="film-card__text-col">
            <p className="film-card__details-item">
              <strong className="film-card__details-name">Run Time</strong>
              <span className="film-card__details-value">{getTimeFromMins(film.runTime)}</span>
            </p>
            <p className="film-card__details-item">
              <strong className="film-card__details-name">Genre</strong>
              <span className="film-card__details-value">{film.genre}</span>
            </p>
            <p className="film-card__details-item">
              <strong className="film-card__details-name">Released</strong>
              <span className="film-card__details-value">{film.released}</span>
            </p>
          </div>
        </div>
      )}
      {activeTab === 'Reviews' && (
        <div className="film-card__reviews film-card__row">
          <div className="film-card__reviews-col">
            {reviews.map((review) => (
              <div key={review.id} className="review">
                <blockquote className="review__quote">
                  <p className="review__text">{review.comment}</p>
                  <footer className="review__details">
                    <cite className="review__author">{review.user.name}</cite>
                    <time className="review__date" dateTime={new Date(review.date).toLocaleDateString('en-US')}>{new Date(review.date).toDateString()}</time>
                  </footer>
                </blockquote>

                <div className="review__rating">{review.rating}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>

  );
}

export default Tabs;
