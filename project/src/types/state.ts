import {store} from '../store/index.js';
import {Film, Films} from './film.js';
import {AuthorizationStatus} from '../const.js';
import { Reviews } from './review.js';

export type FilmsData = {
  films: Films;
  isFilmsDataLoading: boolean;
  filmsCount: number;
  genre: string;
  error: string | null;
  filmsFavorites: Films;
  reviews: Reviews;
  isReviewsDataLoading: boolean;
  promoFilm?: Film;
  similarFilms: Films;
  similarFilmsCount: number;
};

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
