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
  return (


    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className="film-nav__item">
            <Link onClick={() => setActiveTab('Overview')} to="#Overview" className="film-nav__link">Overview</Link>
          </li>
          <li className="film-nav__item film-nav__item--active">
            <Link onClick={() => setActiveTab('Details')} to="#Details" className="film-nav__link">Details</Link>
          </li>
          <li className="film-nav__item">
            <Link onClick={() => setActiveTab('Reviews')} to="#Reviews" className="film-nav__link">Reviews</Link>
          </li>
        </ul>
      </nav>

      {activeTab === 'Overview' && (
        <div className="film-card__text">
          <p>{film.description}</p>
          <p className="film-card__director"><strong>Director: {film.director}</strong></p>

          <p className="film-card__starring"><strong>Starring: {film.actors[0]} {film.actors[1]} {film.actors[2]} and other</strong></p>
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
                {film.actors}
              </span>
            </p>
          </div>

          <div className="film-card__text-col">
            <p className="film-card__details-item">
              <strong className="film-card__details-name">Run Time</strong>
              <span className="film-card__details-value">{film.runTime}</span>
            </p>
            <p className="film-card__details-item">
              <strong className="film-card__details-name">Genre</strong>
              <span className="film-card__details-value">{film.genre}</span>
            </p>
            <p className="film-card__details-item">
              <strong className="film-card__details-name">Released</strong>
              <span className="film-card__details-value">{film.releaseDate}</span>
            </p>
          </div>
        </div>
      )}
      {activeTab === 'Reviews' && (
        <div className="film-card__reviews film-card__row">
          <div className="film-card__reviews-col">
            <div className="review">
              <blockquote className="review__quote">
                <p className="review__text">{reviews[0].text}</p>

                <footer className="review__details">
                  <cite className="review__author">{reviews[0].author}</cite>
                  <time className="review__date" dateTime="2016-12-24">{reviews[0].reviewDate}</time>
                </footer>
              </blockquote>

              <div className="review__rating">{reviews[0].reviewRating}</div>
            </div>

            <div className="review">
              <blockquote className="review__quote">
                <p className="review__text">{reviews[1].text}</p>

                <footer className="review__details">
                  <cite className="review__author">{reviews[1].author}</cite>
                  <time className="review__date" dateTime="2015-11-18">{reviews[1].reviewDate}</time>
                </footer>
              </blockquote>

              <div className="review__rating">{reviews[1].reviewRating}</div>
            </div>

            <div className="review">
              <blockquote className="review__quote">
                <p className="review__text">{reviews[2].text}</p>

                <footer className="review__details">
                  <cite className="review__author">{reviews[2].author}</cite>
                  <time className="review__date" dateTime="2015-11-18">{reviews[2].reviewDate}</time>
                </footer>
              </blockquote>

              <div className="review__rating">{reviews[2].reviewRating}</div>
            </div>
          </div>
          <div className="film-card__reviews-col">
            <div className="review">
              <blockquote className="review__quote">
                <p className="review__text">The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.</p>

                <footer className="review__details">
                  <cite className="review__author">Matthew Lickona</cite>
                  <time className="review__date" dateTime="2016-12-20">December 20, 2016</time>
                </footer>
              </blockquote>

              <div className="review__rating">7,2</div>
            </div>

            <div className="review">
              <blockquote className="review__quote">
                <p className="review__text">It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.</p>

                <footer className="review__details">
                  <cite className="review__author">Paula Fleri-Soler</cite>
                  <time className="review__date" dateTime="2016-12-20">December 20, 2016</time>
                </footer>
              </blockquote>

              <div className="review__rating">7,6</div>
            </div>

            <div className="review">
              <blockquote className="review__quote">
                <p className="review__text">It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.</p>

                <footer className="review__details">
                  <cite className="review__author">Paula Fleri-Soler</cite>
                  <time className="review__date" dateTime="2016-12-20">December 20, 2016</time>
                </footer>
              </blockquote>

              <div className="review__rating">7,0</div>
            </div>
          </div>
        </div>
      )}
    </div>

  );
}

export default Tabs;
