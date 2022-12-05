import {NameSpace} from '../../const';
import {State} from '../../types/state';
import {Films} from '../../types/film';

export const getFilms = (state: State): Films => state[NameSpace.Data].films;
export const getFilmsDataLoadingStatus = (state: State): boolean => state[NameSpace.Data].isFilmsDataLoading;
