import { createAction } from '@reduxjs/toolkit';
import { Films } from '../types/film';
import {AuthorizationStatus} from '../const';

export const switchToAllGenres = createAction<Films>('allGenres');
export const switchToComedies = createAction<Films>('comedies');
export const switchToCrime = createAction<Films>('crime');
export const switchToDocumentary = createAction<Films>('documentary');
export const switchToDramas = createAction<Films>('dramas');
export const switchToHorror = createAction<Films>('horror');
export const switchToKidsAndFamily = createAction<Films>('kids & family');
export const switchToRomance = createAction<Films>('romance');
export const switchToSciFi = createAction<Films>('sci-fi');
export const switchToThrillers = createAction<Films>('thrillers');
export const showMoreFilms = createAction<Films>('showMoreFilms');
export const loadFilms = createAction<Films>('data/loadFilms');
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization')
export const setError = createAction<string | null>('setError');
export const setFilmsDataLoadingStatus = createAction<boolean>('data/setFilmsDataLoadingStatus');
