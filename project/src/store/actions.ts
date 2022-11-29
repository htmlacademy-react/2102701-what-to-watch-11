import { createAction } from '@reduxjs/toolkit';
import { Films } from '../types/film';
import {AuthorizationStatus} from '../const';

export const switchToAllGenres = createAction('allGenres');
export const switchToGenre = createAction<string>('switchToGenre');
export const showMoreFilms = createAction('showMoreFilms');
export const loadFilms = createAction<Films>('data/loadFilms');
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const setError = createAction<string | null>('setError');
export const setFilmsDataLoadingStatus = createAction<boolean>('data/setFilmsDataLoadingStatus');
