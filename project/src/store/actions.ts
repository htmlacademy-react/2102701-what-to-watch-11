import { createAction } from '@reduxjs/toolkit';
import {AppRoute} from '../const';
import { Film } from '../types/film';
import { Review } from '../types/review';

export const switchToAllGenres = createAction('allGenres');
export const switchToGenre = createAction<string>('switchToGenre');
export const showMoreFilms = createAction('showMoreFilms');
export const setError = createAction<string | null>('setError');
export const redirectToRoute = createAction<AppRoute>('redirectToRoute');
export const replaceFilm = createAction<Film>('replaceFilm');
export const loadReviews = createAction<Review>('loadReviews');
