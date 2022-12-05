import { createAction } from '@reduxjs/toolkit';
import {AppRoute} from '../const';

export const switchToAllGenres = createAction('allGenres');
export const switchToGenre = createAction<string>('switchToGenre');
export const showMoreFilms = createAction('showMoreFilms');
export const setError = createAction<string | null>('setError');
export const redirectToRoute = createAction<AppRoute>('redirectToRoute');
