import { Films } from '../../types/film';
import FilmScreenComponent from '../../components/film-screen-component/film-screen-component';
import {Navigate, useParams} from 'react-router-dom';

type FilmScreenProps = {
  films: Films;
}

function FilmScreen({films}: FilmScreenProps): JSX.Element {
  const params = useParams();
  const Film = films.find((film) => {
    if(film.id === Number(params.id)) {
      return true;
    }
    return false;
  });
  if(!Film) {
    return (
      <Navigate to='/'/>

    );
  }
  return (
    <FilmScreenComponent film={Film}/>

  );
}

export default FilmScreen;
