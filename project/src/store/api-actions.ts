import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state';
import {Films, Film} from '../types/film';
import {setError, redirectToRoute, replaceFilm} from './actions';
import {getToken,saveToken, dropToken} from '../services/token';
import {APIRoute, TIMEOUT_SHOW_ERROR, AppRoute} from '../const';
import {AuthData} from '../types/auth-data';
import {UserData} from '../types/user-data';
import {FavoritesData} from '../types/favorites-data';
import {ReviewsData} from '../types/reviews-data';
import { Reviews } from '../types/review';
import { PostReviewData } from '../types/post-review-data';
import {SimilarFilmsData} from '../types/similar-films-data';

export const fetchFilmsAction = createAsyncThunk<Films, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFilms',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<Films>(APIRoute.Films);
    return data;
  },
);

export const fetchPromoAction = createAsyncThunk<Film, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchPromoFilms',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<Film>(APIRoute.Promo);
    return data;
  },
);

export const fetchSimilarFilmsAction = createAsyncThunk<Films, SimilarFilmsData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchSimilarFilms',
  async ({filmId}, {extra: api}) => {
    const {data} = await api.get<Films>(`${APIRoute.SimilarFilms}/${filmId}/similar`);
    return data;
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {extra: api}) => {
    await api.get(APIRoute.Login);
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(redirectToRoute(AppRoute.Welcome));
  },
);

export const favoritesAction = createAsyncThunk<void, FavoritesData, {
  dispatch: AppDispatch;
  extra: AxiosInstance;
}>(
  'favorite',
  async ({filmId, status}, {dispatch, extra: api}) => {
    const film = await api.post<Film>(`${APIRoute.Favorites}/${filmId}/${status ? 1 : 0}`, null, {
      headers: {
        'X-Token': getToken()
      }
    });

    dispatch(replaceFilm(film.data));
  },
);

export const fetchFavoritesAction = createAsyncThunk<Films, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFavoriteFilms',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<Films>(APIRoute.Favorites, {
      headers: {
        'X-Token': getToken()
      }
    });
    return data;
  },
);

export const fetchReviewsAction = createAsyncThunk<Reviews, ReviewsData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchReviews',
  async ({filmId}, {extra: api}) => {
    const {data} = await api.get<Reviews>(`${APIRoute.Reviews}/${filmId}`, {
      headers: {
        'X-Token': getToken()
      }
    });
    return data;
  },
);

export const postReviewsAction = createAsyncThunk<Reviews, PostReviewData, {
  dispatch: AppDispatch;
  extra: AxiosInstance;
}>(
  'favorite',
  async ({filmId, comment, rating}, {extra: api}) => {
    const {data} = await api.post<Reviews>(`${APIRoute.Reviews}/${filmId}`, {comment, rating}, {
      headers: {
        'X-Token': getToken()
      }
    });

    return data;
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  },
);

export const clearErrorAction = createAsyncThunk(
  'clearError',
  (_arg, {dispatch}) => {
    setTimeout(
      () => dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);

