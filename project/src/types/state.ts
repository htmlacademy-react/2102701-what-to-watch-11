import {store} from '../store/index.js';
import {Films} from './film.js';
import {AuthorizationStatus} from '../const.js';

export type FilmsData = {
  films: Films;
  isFilmsDataLoading: boolean;
  filmsCount: number;
  genre: string;
  error: string | null;
};

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
