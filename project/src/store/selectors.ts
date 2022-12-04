import { useAppSelector } from '../hooks';

export const useSelectGenres = () => useAppSelector((state) => [...new Set(state.filmsList.map((film) => film.genre))]);
