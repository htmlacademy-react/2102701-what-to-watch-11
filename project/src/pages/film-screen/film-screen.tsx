import { Films } from '../../types/film';
import FilmScreenComponent from '../../components/film-screen-component/film-screen-component';
import {Navigate, useParams} from 'react-router-dom';
import { Reviews } from '../../types/review';

type FilmScreenProps = {
  films: Films;
  reviews: Reviews
}

function FilmScreen({films, reviews}: FilmScreenProps): JSX.Element {
  const params = useParams();
  const activeFilm = films.find((film) => {
    if(film.id === Number(params.id)) {
      return true;
    }
    return false;
  });
  if(!activeFilm) {
    return (
      <Navigate to='/'/>

    );
  }
  return (
    <FilmScreenComponent film={activeFilm} reviews={reviews} similarFilms={films.filter(film => film.genre === activeFilm.genre )}/>

  );
}

export default FilmScreen;
